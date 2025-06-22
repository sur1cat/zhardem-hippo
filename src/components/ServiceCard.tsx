
import { Clock, User, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Service } from "@/pages/Index";

interface ServiceCardProps {
  service: Service;
  onBookClick: (service: Service) => void;
}

const ServiceCard = ({ service, onBookClick }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 card-shadow hover:card-shadow-hover h-full flex flex-col">
      <CardHeader className="pb-3 sm:pb-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
          <Badge variant="secondary" className="bg-medical-blue/10 text-medical-blue border-0 text-xs sm:text-sm w-fit">
            {service.category}
          </Badge>
          <div className="text-left sm:text-right">
            <p className="text-xl sm:text-2xl font-bold text-medical-green">{service.price.toLocaleString()} ₸</p>
            <p className="text-xs sm:text-sm text-gray-500">за приём</p>
          </div>
        </div>
        
        <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-medical-blue transition-colors min-h-[2.5rem] sm:min-h-[3rem] flex items-center">
          {service.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 space-y-3 px-4 sm:px-6">
        {service.doctors.length === 1 ? (
          // Специальное отображение для одного врача
          <div className="bg-gradient-to-r from-medical-blue/5 to-medical-green/5 rounded-xl p-3 sm:p-4 border border-medical-blue/10">
            <div className="flex items-start gap-2 sm:gap-3 mb-3">
              <div className="bg-medical-blue/10 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                <User className="w-3 h-3 sm:w-4 sm:h-4 text-medical-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight mb-1">
                  {service.doctors[0].name}
                </h4>
                <div className="flex items-center gap-1">
                  <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-500 fill-current" />
                  <span className="text-xs text-gray-600">Стаж: {service.doctors[0].experience}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="bg-medical-green/10 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-medical-green" />
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                {service.doctors[0].schedule}
              </p>
            </div>
          </div>
        ) : (
          // Отображение для нескольких врачей
          <div className="space-y-2 sm:space-y-3 max-h-40 sm:max-h-48 overflow-y-auto">
            {service.doctors.map((doctor, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-2 sm:p-3 space-y-2">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-medical-blue/10 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-medical-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight">
                      {doctor.name}
                    </h4>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-500 fill-current" />
                      <span className="text-xs text-gray-600">Стаж: {doctor.experience}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-medical-green/10 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-medical-green" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                    {doctor.schedule}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="mt-auto px-4 sm:px-6 pb-4 sm:pb-6">
        <Button 
          onClick={() => onBookClick(service)}
          className="w-full bg-medical-green hover:bg-medical-green/90 text-white transition-all duration-200 hover:scale-105 group-hover:shadow-lg text-sm sm:text-base py-2 sm:py-3"
          size="lg"
        >
          <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          Записаться на приём
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
