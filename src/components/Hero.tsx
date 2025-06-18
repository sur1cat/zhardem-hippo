
import { Calendar, Clock, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onBookingClick?: () => void;
}

const Hero = ({ onBookingClick }: HeroProps) => {
  return (
    <section className="relative py-8 sm:py-16 lg:py-20 px-4 medical-gradient overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/5 to-medical-green/5"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight px-2">
            Медицинский центр
            <span className="text-medical-blue block">«ЖӘРДЕМ»</span>
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl font-semibold text-medical-green mb-2 sm:mb-3 lg:mb-4">!Болезням- STOP!</p>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
            Сеть медицинских центров полного цикла оздоровления с 2001 года. 
            Врачи с учеными степенями и стажем до 45 лет. Оборудование производства Великобритании.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 lg:mb-12 px-4">
            <Button 
              size="lg" 
              className="bg-medical-blue hover:bg-medical-blue/90 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg transition-all duration-200 hover:scale-105 animate-scale-in w-full sm:w-auto"
              onClick={onBookingClick}
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Записаться на приём
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg transition-all duration-200 hover:scale-105 w-full sm:w-auto"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Наши услуги
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 animate-fade-in px-2 sm:px-4" style={{ animationDelay: '0.3s' }}>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-6 card-shadow hover:card-shadow-hover transition-all duration-200">
            <div className="bg-medical-blue/10 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-medical-blue" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 lg:mb-2">20+</h3>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-tight">Квалифицированных врачей</p>
          </div>
          
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-6 card-shadow hover:card-shadow-hover transition-all duration-200">
            <div className="bg-medical-green/10 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-medical-green" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 lg:mb-2">23</h3>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-tight">Года опыта</p>
          </div>
          
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-6 card-shadow hover:card-shadow-hover transition-all duration-200">
            <div className="bg-medical-blue/10 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-medical-blue" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 lg:mb-2">6</h3>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-tight">Дней в неделю</p>
          </div>
          
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-6 card-shadow hover:card-shadow-hover transition-all duration-200">
            <div className="bg-medical-green/10 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-medical-green" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 lg:mb-2">12</h3>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-tight">Часов работы</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
