
import { Calendar, Clock, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-12 sm:py-20 px-4 medical-gradient overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/5 to-medical-green/5"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Медицинский центр
            <span className="text-medical-blue block">«ЖӘРДЕМ»</span>
          </h1>
          <p className="text-lg sm:text-2xl font-semibold text-medical-green mb-3 sm:mb-4">!Болезням- STOP!</p>
          <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
            Сеть медицинских центров полного цикла оздоровления с 2001 года. 
            Врачи с учеными степенями и стажем до 45 лет. Оборудование производства Великобритании.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Button 
              size="lg" 
              className="bg-medical-blue hover:bg-medical-blue/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-200 hover:scale-105 animate-scale-in w-full sm:w-auto"
              onClick={() => window.open("tel:+77012200036", "_self")}
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Записаться на приём
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-200 hover:scale-105 w-full sm:w-auto"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Наши услуги
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 animate-fade-in px-4" style={{ animationDelay: '0.3s' }}>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 card-shadow hover:card-shadow-hover transition-all duration-200">
            <div className="bg-medical-blue/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-medical-blue" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">20+</h3>
            <p className="text-gray-600 text-sm sm:text-base">Квалифицированных врачей</p>
          </div>
          
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 card-shadow hover:card-shadow-hover transition-all duration-200">
            <div className="bg-medical-green/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-medical-green" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">23</h3>
            <p className="text-gray-600 text-sm sm:text-base">Года опыта</p>
          </div>
          
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 card-shadow hover:card-shadow-hover transition-all duration-200">
            <div className="bg-medical-blue/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-medical-blue" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">6</h3>
            <p className="text-gray-600 text-sm sm:text-base">Дней в неделю</p>
          </div>
          
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 card-shadow hover:card-shadow-hover transition-all duration-200">
            <div className="bg-medical-green/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-medical-green" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">12</h3>
            <p className="text-gray-600 text-sm sm:text-base">Часов работы</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
