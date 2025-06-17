
import { Calendar, Clock, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 px-4 medical-gradient overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/5 to-medical-green/5"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Качественная медицинская
            <span className="text-medical-blue block">помощь для всей семьи</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Опытные врачи, современное оборудование и индивидуальный подход к каждому пациенту. 
            Записывайтесь на приём к лучшим специалистам города.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-medical-blue hover:bg-medical-blue/90 text-white px-8 py-4 text-lg transition-all duration-200 hover:scale-105 animate-scale-in"
              onClick={() => window.open("tel:+77012200036", "_self")}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Записаться на приём
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white px-8 py-4 text-lg transition-all duration-200 hover:scale-105"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Наши услуги
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-200">
            <div className="bg-medical-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-medical-blue" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
            <p className="text-gray-600">Опытных врачей</p>
          </div>
          
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-200">
            <div className="bg-medical-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-medical-green" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">47</h3>
            <p className="text-gray-600">Лет опыта</p>
          </div>
          
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-200">
            <div className="bg-medical-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-medical-blue" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">6</h3>
            <p className="text-gray-600">Дней в неделю</p>
          </div>
          
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-200">
            <div className="bg-medical-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-medical-green" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">12</h3>
            <p className="text-gray-600">Часов работы</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
