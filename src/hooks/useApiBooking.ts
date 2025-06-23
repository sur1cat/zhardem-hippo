
import { useState, useEffect } from "react";
import { appointmentApi } from "@/services/appointmentApi";
import type { ApiDoctor, ApiService, AppointmentData, TimeSlot } from "@/types/api";

export const useApiBooking = () => {
  const [doctors, setDoctors] = useState<ApiDoctor[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<ApiDoctor | null>(null);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadDoctorsForService = async (serviceName: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const allDoctors = await appointmentApi.getAllDoctors();
      const clinicId = appointmentApi.getClinicId();
      
      const serviceDoctors = allDoctors.filter(doctor =>
        doctor.clinics.some(clinic => clinic.id === clinicId) &&
        doctor.specialist.name === serviceName
      );
      
      setDoctors(serviceDoctors);
      
      if (serviceDoctors.length === 1) {
        setSelectedDoctor(serviceDoctors[0]);
      }
    } catch (err) {
      console.error('Error loading doctors:', err);
      setError('Ошибка загрузки врачей');
    } finally {
      setLoading(false);
    }
  };

  const generateTimeSlots = (selectedDate: string, doctorSchedule: any): TimeSlot[] => {
    const date = new Date(selectedDate);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();

    const scheduleTemplate = doctorSchedule.work_schedule_record_templates.find((template: any) =>
      template.weeks === dayOfWeek
    );

    if (!scheduleTemplate) {
      return [];
    }

    const startTime = scheduleTemplate.start_time;
    const endTime = scheduleTemplate.end_time;

    const slots: TimeSlot[] = [];
    const start = new Date(`2000-01-01T${startTime}`);
    const end = new Date(`2000-01-01T${endTime}`);

    while (start < end) {
      slots.push({
        time: start.toTimeString().slice(0, 5),
        available: true
      });
      start.setMinutes(start.getMinutes() + 30);
    }

    return slots;
  };

  const updateTimeSlots = (date: string, doctor: ApiDoctor) => {
    const slots = generateTimeSlots(date, doctor.schedule);
    setTimeSlots(slots);
  };

  const createAppointment = async (appointmentData: AppointmentData) => {
    if (!selectedDoctor) {
      throw new Error('Врач не выбран');
    }

    console.log('Создание записи для врача:', selectedDoctor.id);
    console.log('Отправляем данные записи:', appointmentData);
    
    return appointmentApi.createAppointment(appointmentData);
  };

  return {
    doctors,
    selectedDoctor,
    setSelectedDoctor,
    timeSlots,
    loading,
    error,
    setError,
    loadDoctorsForService,
    updateTimeSlots,
    createAppointment
  };
};
