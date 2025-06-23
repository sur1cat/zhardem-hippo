
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Clock, Calendar } from "lucide-react";
import type { ApiDoctor } from "@/types/api";

interface DoctorSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  doctors: ApiDoctor[];
  onDoctorSelect: (doctor: ApiDoctor) => void;
  serviceName: string;
}

const formatSchedule = (scheduleTemplates: Array<{start_time: string, end_time: string, weeks: string}>): string => {
  const daysMap: Record<string, string> = {
    'MONDAY': 'Пн',
    'TUESDAY': 'Вт', 
    'WEDNESDAY': 'Ср',
    'THURSDAY': 'Чт',
    'FRIDAY': 'Пт',
    'SATURDAY': 'Сб',
    'SUNDAY': 'Вс'
  };

  if (scheduleTemplates.length === 0) return 'Расписание уточняется';

  const weekdays = scheduleTemplates.filter(s => 
    ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'].includes(s.weeks)
  );
  
  const saturday = scheduleTemplates.find(s => s.weeks === 'SATURDAY');

  let schedule = '';
  
  if (weekdays.length > 0) {
    const firstWeekday = weekdays[0];
    schedule += `Будни: ${firstWeekday.start_time.slice(0, 5)}-${firstWeekday.end_time.slice(0, 5)}`;
  }
  
  if (saturday) {
    schedule += schedule ? ', ' : '';
    schedule += `Сб: ${saturday.start_time.slice(0, 5)}-${saturday.end_time.slice(0, 5)}`;
  }
  
  return schedule;
};

const DoctorSelector = ({ open, onOpenChange, doctors, onDoctorSelect, serviceName }: DoctorSelectorProps) => {
  const handleDoctorClick = (doctor: ApiDoctor) => {
    onDoctorSelect(doctor);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 text-center mb-2">
            Выберите врача
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600 mb-4">
            Доступные врачи для услуги "{serviceName}"
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-3 max-h-96 overflow-y-auto">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              onClick={() => handleDoctorClick(doctor)}
              className="p-4 border rounded-lg hover:border-blue-500 hover:bg-blue-50/50 cursor-pointer transition-all duration-200 hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs mb-2">
                    {doctor.specialist.name}
                  </Badge>
                </div>
                <div className="text-right">
                  <span className="text-lg font-semibold text-green-600">
                    {parseInt(doctor.priceDiscounted.replace(/[^\d]/g, '')).toLocaleString()} ₸
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User className="w-4 h-4" />
                  <span>Стаж: {doctor.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{formatSchedule(doctor.schedule.work_schedule_record_templates)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DoctorSelector;
