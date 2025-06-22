
import { useState } from "react";
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
import type { Service } from "@/pages/Index";

interface BookingFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service?: Service;
}

const timeSlots = [
  "09:00-09:30", "09:30-10:00", "10:00-10:30", "10:30-11:00",
  "11:00-11:30", "11:30-12:00", "12:00-12:30", "12:30-13:00",
  "14:00-14:30", "14:30-15:00", "15:00-15:30", "15:30-16:00",
  "16:00-16:30", "16:30-17:00", "17:00-17:30", "17:30-18:00"
];

const BookingForm = ({ open, onOpenChange, service }: BookingFormProps) => {
  const [phone, setPhone] = useState("");
  const [iin, setIin] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Симуляция отправки запроса
    console.log({
      service: service?.title,
      phone,
      iin,
      date: selectedDate ? format(selectedDate, "dd.MM.yyyy", { locale: ru }) : "",
      time: selectedTime
    });
    
    // Показать уведомление об успехе (можно добавить toast)
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    
    // Очистить форму и закрыть
    setPhone("");
    setIin("");
    setSelectedDate(undefined);
    setSelectedTime("");
    onOpenChange(false);
  };

  return (
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
          {/* Телефон */}
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

          {/* ИИН */}
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

          {/* Выбор даты */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Дата приёма
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "dd MMMM yyyy", { locale: ru }) : "Выберите дату"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0} // Отключить прошедшие даты и воскресенье
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Выбор времени */}
          {selectedDate && (
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Время приёма
              </Label>
              <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    type="button"
                    variant={selectedTime === slot ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTime(slot)}
                    className={cn(
                      "text-xs",
                      selectedTime === slot 
                        ? "bg-medical-blue hover:bg-medical-blue/90" 
                        : "border-gray-200 hover:border-medical-blue hover:text-medical-blue"
                    )}
                  >
                    <Clock className="w-3 h-3 mr-1" />
                    {slot}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              disabled={!phone || !iin || !selectedDate || !selectedTime}
              className="flex-1 bg-medical-green hover:bg-medical-green/90 text-white"
              size="lg"
            >
              Записаться на приём
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
  );
};

export default BookingForm;
