
import { Clock, User, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Service } from "@/pages/Index";

interface ServiceCardProps {
  service: Service;
  onBookClick: () => void;
}

const ServiceCard = ({ service, onBookClick }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 card-shadow hover:card-shadow-hover">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-3">
          <Badge variant="secondary" className="bg-medical-blue/10 text-medical-blue border-0">
            {service.category}
          </Badge>
          <div className="text-right">
            <p className="text-2xl font-bold text-medical-green">{service.price.toLocaleString()} ₸</p>
            <p className="text-sm text-gray-500">за приём</p>
          </div>
        </div>
        
        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-medical-blue transition-colors">
          {service.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {service.doctors.map((doctor, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-4 space-y-2">
            <div className="flex items-start gap-3">
              <div className="bg-medical-blue/10 p-2 rounded-full flex-shrink-0">
                <User className="w-4 h-4 text-medical-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                  {doctor.name}
                </h4>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs text-gray-600">Стаж: {doctor.experience}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-medical-green/10 p-2 rounded-full flex-shrink-0">
                <Clock className="w-4 h-4 text-medical-green" />
              </div>
              <p className="text-sm text-gray-600 leading-tight">
                {doctor.schedule}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={onBookClick}
          className="w-full bg-medical-green hover:bg-medical-green/90 text-white transition-all duration-200 hover:scale-105 group-hover:shadow-lg"
          size="lg"
        >
          <Phone className="w-4 h-4 mr-2" />
          Записаться на приём
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
