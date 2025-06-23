
import type { AppointmentData, ApiService, ApiDoctor } from "@/types/api";

const BASE_URL = "http://127.0.0.1:8030";
const CLINIC_ID = "bfcd44d4-cd05-4378-9e12-f181c83af051";

export const appointmentApi = {
  async getAllDoctors(): Promise<ApiDoctor[]> {
    const response = await fetch(`${BASE_URL}/api/v1/doctor/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(`Ошибка загрузки врачей: ${response.status}`);
    }

    return response.json();
  },

  async getDoctorServices(doctorId: string): Promise<ApiService[]> {
    const response = await fetch(`${BASE_URL}/api/v1/doctor/${doctorId}/services/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(`Ошибка получения услуг врача: ${response.status}`);
    }

    return response.json();
  },

  async createAppointment(data: AppointmentData): Promise<any> {
    const response = await fetch(`${BASE_URL}/api/v1/appointment/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Ошибка записи: ${response.status} - ${errorData}`);
    }

    return response.json();
  },

  getClinicId(): string {
    return CLINIC_ID;
  }
};
