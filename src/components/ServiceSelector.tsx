import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, User, Clock } from "lucide-react";
import type { Service } from "@/data/services";

interface ServiceSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  services: Service[];
  onServiceSelect: (service: Service) => void;
}

const ServiceSelector = ({ open, onOpenChange, services, onServiceSelect }: ServiceSelectorProps) => {
  const handleServiceClick = (service: Service) => {
    onServiceSelect(service);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 text-center mb-2">
            Выберите услугу
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600 mb-4">
            Выберите медицинскую услугу для записи на приём
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-3 max-h-96 overflow-y-auto">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service)}
              className="p-4 border rounded-lg hover:border-medical-blue hover:bg-blue-50/50 cursor-pointer transition-all duration-200 hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-medical-blue/10 text-medical-blue border-0 text-xs">
                      {service.category}
                    </Badge>
                    <span className="text-lg font-semibold text-medical-green">
                      {service.price.toLocaleString()} ₸
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                </div>
              </div>
              
              <div className="space-y-2">
                {service.doctors.slice(0, 2).map((doctor, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="w-3 h-3" />
                    <span>{doctor.name}</span>
                    <span className="text-xs">({doctor.experience})</span>
                  </div>
                ))}
                {service.doctors.length > 2 && (
                  <div className="text-xs text-gray-500">
                    +{service.doctors.length - 2} врач(ей)
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceSelector;
