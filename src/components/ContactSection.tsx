
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ContactSectionProps {
  onContactClick: () => void;
}

const ContactSection = ({ onContactClick }: ContactSectionProps) => {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-r from-medical-blue to-medical-blue/90 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
            Готовы записаться на приём?
          </h2>
          <p className="text-lg sm:text-xl opacity-90 mb-6 sm:mb-8 px-4">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-scale-in">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="bg-white/20 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Позвоните нам</h3>
              <p className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">+7 701 220 00 36</p>
              <p className="opacity-90 mb-4 sm:mb-6 text-sm sm:text-base px-2">
                Если интересно, позвоните или напишите по номеру
              </p>
              <Button 
                onClick={onContactClick}
                variant="secondary"
                size="lg"
                className="bg-white text-medical-blue hover:bg-gray-100 transition-all duration-200 hover:scale-105 w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 mr-2" />
                Позвонить сейчас
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="bg-white/20 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Напишите нам</h3>
              <p className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">WhatsApp / SMS</p>
              <p className="opacity-90 mb-4 sm:mb-6 text-sm sm:text-base px-2">
                Отправьте сообщение в удобное для вас время
              </p>
              <Button 
                onClick={() => window.open("https://wa.me/77012200036", "_blank")}
                variant="secondary"
                size="lg"
                className="bg-white text-medical-blue hover:bg-gray-100 transition-all duration-200 hover:scale-105 w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Написать в WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="bg-white/20 p-2 sm:p-3 rounded-full">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Часы работы</h3>
            </div>
            <div className="space-y-1 sm:space-y-2 opacity-90 text-sm sm:text-base">
              <p>Понедельник - Пятница: 08:00 - 20:00</p>
              <p>Суббота: 09:00 - 17:00</p>
              <p>Воскресенье: Закрыто</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="bg-white/20 p-2 sm:p-3 rounded-full">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Наш адрес</h3>
            </div>
            <p className="opacity-90 text-sm sm:text-base">
              улица Шокана Валиханова 12<br />
              Астана 010000, Казахстан
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
