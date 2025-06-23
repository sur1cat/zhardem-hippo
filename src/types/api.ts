
export interface ApiService {
  id: string;
  name: string;
  price: string;
  priceDiscounted: string;
  discount: string;
  orderCount: number;
  selected: boolean;
}

export interface ApiDoctor {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  price: string;
  priceDiscounted: string;
  schedule: {
    work_schedule_record_templates: Array<{
      start_time: string;
      end_time: string;
      weeks: string;
    }>;
  };
  specialist: {
    name: string;
  };
  clinics: Array<{
    id: string;
    name: string;
  }>;
}

export interface AppointmentData {
  doctor_id: string;
  service_id: string;
  user_phone_number: string;
  clinic_id: string;
  datetime: string;
  user_first_name: string;
  user_iin: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}
