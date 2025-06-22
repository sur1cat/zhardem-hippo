
import { useState } from "react";
import type { Service } from "@/data/services";

export const useBookingManager = () => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [isServiceSelectorOpen, setIsServiceSelectorOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service>();

  const handleBookingClick = (service?: Service) => {
    if (service) {
      // Если услуга уже выбрана, сразу открываем форму записи
      setSelectedService(service);
      setIsBookingFormOpen(true);
    } else {
      // Если услуга не выбрана, открываем селектор услуг
      setIsServiceSelectorOpen(true);
    }
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setIsBookingFormOpen(true);
  };

  return {
    isBookingFormOpen,
    setIsBookingFormOpen,
    isServiceSelectorOpen,
    setIsServiceSelectorOpen,
    selectedService,
    handleBookingClick,
    handleServiceSelect,
  };
};
