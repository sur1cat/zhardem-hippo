
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Clock, Phone, User } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useApiBooking } from "@/hooks/useApiBooking";
import { appointmentApi } from "@/services/appointmentApi";
import DoctorSelector from "@/components/DoctorSelector";
import type { Service } from "@/pages/Index";
import { useToast } from "@/hooks/use-toast";

interface BookingFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service?: Service | null;
}

const BookingForm = ({ open, onOpenChange, service }: BookingFormProps) => {
  const { toast } = useToast();
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [iin, setIin] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [isDoctorSelectorOpen, setIsDoctorSelectorOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
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
  } = useApiBooking();

  // Load doctors when service is selected
  useEffect(() => {
    if (service && open) {
      loadDoctorsForService(service.title);
    }
  }, [service, open]);

  // Update time slots when date or doctor changes
  useEffect(() => {
    if (selectedDate && selectedDoctor) {
      updateTimeSlots(selectedDate.toISOString().split('T')[0], selectedDoctor);
    }
  }, [selectedDate, selectedDoctor]);

  // Reset form when dialog closes
  useEffect(() => {
    if (!open) {
      setPhone("");
      setFullName("");
      setIin("");
      setSelectedDate(undefined);
      setSelectedTime("");
      setSelectedDoctor(null);
      setError(null);
    }
  }, [open, setSelectedDoctor, setError]);

  const handleDoctorSelect = (doctor: any) => {
    setSelectedDoctor(doctor);
    setSelectedTime(""); // Reset time when doctor changes
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDoctor || !selectedDate || !selectedTime || !service) {
      setError('Заполните все обязательные поля');
      return;
    }

    try {
      setSubmitting(true);
      setError(null);

      const appointmentData = {
        doctor_id: selectedDoctor.id,
        service_id: service.id, // Используем ID из выбранной услуги
        user_phone_number: phone,
        clinic_id: appointmentApi.getClinicId(),
        datetime: new Date(`${selectedDate.toISOString().split('T')[0]}T${selectedTime}:00.000Z`).toISOString(),
        user_first_name: fullName,
        user_iin: iin
      };

      await createAppointment(appointmentData);
      
      toast({
        title: "Запись успешно создана!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      
      onOpenChange(false);
    } catch (err) {
      console.error('Error creating appointment:', err);
      setError(err instanceof Error ? err.message : 'Ошибка при записи');
    } finally {
      setSubmitting(false);
    }
  };

  const openDoctorSelector = () => {
    if (doctors.length > 1) {
      setIsDoctorSelectorOpen(true);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900 text-center mb-2">
              Запись на приём
            </DialogTitle>
            {service && (
              <DialogDescription className="text-center text-medical-blue font-semibold mb-4">
                {service.title} - {service.price.toLocaleString()} ₸
              </DialogDescription>
            )}
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                Полное имя
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Введите ваше полное имя"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Номер телефона
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (777) 123-45-67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="iin" className="text-sm font-medium text-gray-700">
                ИИН
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="iin"
                  type="text"
                  placeholder="123456789012"
                  value={iin}
                  onChange={(e) => setIin(e.target.value)}
                  className="pl-10"
                  maxLength={12}
                  required
                />
              </div>
            </div>

            {/* Doctor Selection */}
            {doctors.length > 0 && (
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Врач
                </Label>
                {doctors.length === 1 ? (
                  <div className="p-3 bg-gray-50 rounded-md">
                    <p className="font-medium">{doctors[0].name}</p>
                    <p className="text-sm text-gray-600">{doctors[0].experience}</p>
                  </div>
                ) : (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={openDoctorSelector}
                    className="w-full justify-start"
                  >
                    {selectedDoctor ? selectedDoctor.name : "Выберите врача"}
                  </Button>
                )}
              </div>
            )}

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Дата приёма
              </Label>
              <Popover modal={true}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground"
                    )}
                    type="button"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "dd MMMM yyyy", { locale: ru }) : "Выберите дату"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent 
                  className="w-auto p-0 bg-white border shadow-lg z-[100]" 
                  align="start"
                  side="bottom"
                  sideOffset={4}
                >
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                    initialFocus
                    className="p-3 pointer-events-auto bg-white rounded-md"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time Selection */}
            {selectedDate && timeSlots.length > 0 && (
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Время приёма
                </Label>
                <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot.time}
                      type="button"
                      variant={selectedTime === slot.time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(slot.time)}
                      disabled={!slot.available}
                      className={cn(
                        "text-xs",
                        selectedTime === slot.time 
                          ? "bg-medical-blue hover:bg-medical-blue/90" 
                          : "border-gray-200 hover:border-medical-blue hover:text-medical-blue"
                      )}
                    >
                      <Clock className="w-3 h-3 mr-1" />
                      {slot.time}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {loading && (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-sm text-gray-600 mt-2">Загрузка...</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="submit"
                disabled={!phone || !iin || !fullName || !selectedDate || !selectedTime || !selectedDoctor || submitting}
                className="flex-1 bg-medical-green hover:bg-medical-green/90 text-white"
                size="lg"
              >
                {submitting ? 'Записываем...' : 'Записаться на приём'}
              </Button>
              
              <Button
                type="button"
                onClick={() => onOpenChange(false)}
                variant="outline"
                className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50"
                size="lg"
              >
                Отмена
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <DoctorSelector
        open={isDoctorSelectorOpen}
        onOpenChange={setIsDoctorSelectorOpen}
        doctors={doctors}
        onDoctorSelect={handleDoctorSelect}
        serviceName={service?.title || ""}
      />
    </>
  );
};

export default BookingForm;
