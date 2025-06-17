
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ContactSectionProps {
  onContactClick: () => void;
}

const ContactSection = ({ onContactClick }: ContactSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-medical-blue to-medical-blue/90 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Готовы записаться на приём?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-scale-in">
            <CardContent className="p-8 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Позвоните нам</h3>
              <p className="text-3xl font-bold mb-4">+7 701 220 00 36</p>
              <p className="opacity-90 mb-6">
                Если интересно, позвоните или напишите по номеру
              </p>
              <Button 
                onClick={onContactClick}
                variant="secondary"
                size="lg"
                className="bg-white text-medical-blue hover:bg-gray-100 transition-all duration-200 hover:scale-105"
              >
                <Phone className="w-4 h-4 mr-2" />
                Позвонить сейчас
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Напишите нам</h3>
              <p className="text-3xl font-bold mb-4">WhatsApp / SMS</p>
              <p className="opacity-90 mb-6">
                Отправьте сообщение в удобное для вас время
              </p>
              <Button 
                onClick={() => window.open("https://wa.me/77012200036", "_blank")}
                variant="secondary"
                size="lg"
                className="bg-white text-medical-blue hover:bg-gray-100 transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Написать в WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Часы работы</h3>
            </div>
            <div className="space-y-2 opacity-90">
              <p>Понедельник - Пятница: 8:00 - 20:00</p>
              <p>Суббота: 9:00 - 16:00</p>
              <p>Воскресенье: Выходной</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 p-3 rounded-full">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Как нас найти</h3>
            </div>
            <p className="opacity-90">
              Позвоните нам, и мы подскажем удобное время для приёма и ответим на все ваши вопросы.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
