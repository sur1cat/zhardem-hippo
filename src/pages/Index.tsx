
import { useState } from "react";
import { Heart, Clock, Phone, User, Calendar, MapPin, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export interface Doctor {
  name: string;
  experience: string;
  schedule: string;
}

export interface Service {
  id: string;
  title: string;
  price: number;
  doctors: Doctor[];
  category: string;
}

const services: Service[] = [
  {
    id: "therapist",
    title: "Терапевт",
    price: 9000,
    category: "Общая медицина",
    doctors: [{
      name: "Исаева Нургуль Утеловна",
      experience: "6 лет",
      schedule: "Будние дни: 8:00-17:00, Суббота: 9:00-13:00"
    }]
  },
  {
    id: "neurologist",
    title: "Невропатолог",
    price: 9000,
    category: "Неврология",
    doctors: [{
      name: "Жокебаев Ержан Сейтказиевич",
      experience: "более 40 лет",
      schedule: "Понедельник, среда, пятница: 15:00-17:00"
    }]
  },
  {
    id: "lor",
    title: "ЛОР",
    price: 10000,
    category: "Отоларингология",
    doctors: [
      {
        name: "Ташмуратов Исламбек Улугбекович",
        experience: "более 9 лет",
        schedule: "Будние дни: 10:00-14:00, Суббота: 10:00-16:00"
      },
      {
        name: "Жайшибек Амиржан Серикулы",
        experience: "более 2 лет",
        schedule: "Будние дни: 15:00-19:00"
      }
    ]
  },
  {
    id: "uzi",
    title: "УЗИ",
    price: 8000,
    category: "Диагностика",
    doctors: [
      {
        name: "Каримбаева Акниет Бауыржановна",
        experience: "более 10 лет",
        schedule: "Будние дни: 10:30-13:00"
      },
      {
        name: "Махметова Анаргуль Жаксыбаевна",
        experience: "более 17 лет",
        schedule: "Понедельник, среда: 15:00-19:00"
      },
      {
        name: "Дьяков Сергей Сергеевич",
        experience: "более 33 лет",
        schedule: "Вторник, четверг: 15:00-19:00, Суббота: 9:00-14:00"
      }
    ]
  },
  {
    id: "gynecologist",
    title: "Гинеколог",
    price: 10000,
    category: "Женское здоровье",
    doctors: [
      {
        name: "Доспанова Айзада Саитбековна",
        experience: "более 18 лет",
        schedule: "Будние дни: 8:00-13:00, Суббота: 9:00-13:00"
      },
      {
        name: "Мусина Ардак Ергалиевна",
        experience: "более 10 лет",
        schedule: "Будние дни: 18:30-20:00, Суббота: 14:00-16:00"
      }
    ]
  },
  {
    id: "pediatrician",
    title: "Педиатр",
    price: 9000,
    category: "Детское здоровье",
    doctors: [
      {
        name: "Чен Виктория Александровна",
        experience: "более 17 лет",
        schedule: "Будние дни: 10:00-13:00"
      },
      {
        name: "Преснова Нина Михайловна",
        experience: "более 47 лет",
        schedule: "Будние дни: 14:00-19:00"
      }
    ]
  },
  {
    id: "gastroenterologist",
    title: "Гастроэнтеролог",
    price: 9000,
    category: "Гастроэнтерология",
    doctors: [{
      name: "Жолдаспаева Ляззат Кайралаповна",
      experience: "более 10 лет",
      schedule: "Понедельник, среда: 16:30-18:30"
    }]
  },
  {
    id: "endocrinologist",
    title: "Эндокринолог",
    price: 12000,
    category: "Эндокринология",
    doctors: [{
      name: "Тримова Рахат Саматаевна",
      experience: "более 18 лет",
      schedule: "Только по субботам: 13:00-15:00"
    }]
  },
  {
    id: "surgeon",
    title: "Хирург",
    price: 15000,
    category: "Хирургия",
    doctors: [{
      name: "Шакенов Абылай Дуйсенович",
      experience: "более 40 лет (профессор)",
      schedule: "Будние дни: 18:00-20:00"
    }]
  },
  {
    id: "cardiologist",
    title: "Кардиолог",
    price: 15000,
    category: "Кардиология",
    doctors: [{
      name: "Специалист по кардиологии",
      experience: "более 30 лет",
      schedule: "Среда: 15:00-18:00, Пятница: 11:00-13:00"
    }]
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  
  const categories = ["Все", ...Array.from(new Set(services.map(s => s.category)))];
  
  const filteredServices = selectedCategory === "Все" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const handleBookingClick = () => {
    window.open("tel:+77012200036", "_self");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши медицинские услуги
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Квалифицированные специалисты готовы помочь вам
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full transition-all duration-200 hover:scale-105"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard service={service} onBookClick={handleBookingClick} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection onContactClick={handleBookingClick} />
      <Footer />
    </div>
  );
};

export default Index;
