import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { appointmentApi } from "@/services/appointmentApi";
import type { ApiDoctor } from "@/types/api";

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

const formatSchedule = (scheduleTemplates: Array<{start_time: string, end_time: string, weeks: string}>): string => {
  const weekdays = scheduleTemplates.filter(s =>
      ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'].includes(s.weeks)
  );

  const saturday = scheduleTemplates.find(s => s.weeks === 'SATURDAY');

  let schedule = '';

  if (weekdays.length > 0) {
    const firstWeekday = weekdays[0];
    schedule += `Будние дни: ${firstWeekday.start_time.slice(0, 5)}-${firstWeekday.end_time.slice(0, 5)}`;
  }

  if (saturday) {
    schedule += schedule ? ', ' : '';
    schedule += `Суббота: ${saturday.start_time.slice(0, 5)}-${saturday.end_time.slice(0, 5)}`;
  }

  return schedule || 'Расписание уточняется';
};

const getCategoryFromSpecialization = (specialization: string): string => {
  const categoryMap: Record<string, string> = {
    'Терапевт': 'Общая медицина',
    'Невропатолог': 'Неврология',
    'Невролог': 'Неврология',
    'ЛОР': 'Отоларингология',
    'Отоларинголог': 'Отоларингология',
    'УЗИ': 'Диагностика',
    'Гинеколог': 'Женское здоровье',
    'Педиатр': 'Детское здоровье',
    'Детский гастроэнтеролог': 'Детское здоровье',
    'Гастроэнтеролог': 'Гастроэнтерология',
    'Эндокринолог': 'Эндокринология',
    'Хирург': 'Хирургия',
    'Кардиолог': 'Кардиология',
    'Дерматолог': 'Дерматология',
    'Офтальмолог': 'Офтальмология',
    'Уролог': 'Урология',
    'Ортопед': 'Ортопедия',
    'Травматолог': 'Ортопедия'
  };

  for (const [key, value] of Object.entries(categoryMap)) {
    if (specialization.includes(key)) {
      return value;
    }
  }

  return 'Другие специальности';
};

// Функция для генерации UUID v4
const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const allDoctors: ApiDoctor[] = await appointmentApi.getAllDoctors();
        const clinicId = appointmentApi.getClinicId();
        
        const clinicDoctors = allDoctors.filter(doctor =>
            doctor.clinics.some(clinic => clinic.id === clinicId)
        );

        const servicesMap = new Map<string, Service>();

        clinicDoctors.forEach(doctor => {
          const specialization = doctor.specialist.name;
          const price = parseInt(doctor.priceDiscounted.replace(/[^\d]/g, '')) || 0;

          if (!servicesMap.has(specialization)) {
            servicesMap.set(specialization, {
              id: generateUUID(), // Генерируем валидный UUID
              title: specialization,
              price: price,
              category: getCategoryFromSpecialization(specialization),
              doctors: []
            });
          }

          const service = servicesMap.get(specialization)!;
          service.doctors.push({
            name: doctor.name,
            experience: doctor.experience,
            schedule: formatSchedule(doctor.schedule.work_schedule_record_templates)
          });
        });

        setServices(Array.from(servicesMap.values()));
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        
        if (err instanceof TypeError && err.message.includes('Failed to fetch')) {
          setError('Ошибка подключения к серверу. Проверьте, что сервер запущен и доступен');
        } else {
          setError(err instanceof Error ? err.message : 'Произошла ошибка при загрузке данных');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const categories = ["Все", ...Array.from(new Set(services.map(s => s.category)))];

  const filteredServices = selectedCategory === "Все"
      ? services
      : services.filter(service => service.category === selectedCategory);

  const handleBookingClick = (service: Service) => {
    setSelectedService(service);
    setIsBookingFormOpen(true);
  };

  if (loading) {
    return (
        <div className="min-h-screen">
          <Header />
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Загрузка услуг...</p>
            </div>
          </div>
        </div>
    );
  }

  if (error) {
    return (
        <div className="min-h-screen">
          <Header />
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="text-red-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ошибка загрузки данных</h3>
              <p className="text-gray-600 mb-4">{error}</p>
              <Button onClick={() => window.location.reload()}>
                Попробовать снова
              </Button>
            </div>
          </div>
        </div>
    );
  }

  return (
      <div className="min-h-screen">
        <Header />
        <Hero onBookingClick={() => setIsBookingFormOpen(true)} />

        <section id="services" className="py-12 sm:py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-8 sm:mb-12 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Наши медицинские услуги
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
                Квалифицированные специалисты с учеными степенями готовы помочь вам
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 px-4">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        onClick={() => setSelectedCategory(category)}
                        className="rounded-full transition-all duration-200 hover:scale-105 text-sm sm:text-base px-3 sm:px-4 py-2"
                    >
                      {category}
                    </Button>
                ))}
              </div>
            </div>

            {filteredServices.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
                  {filteredServices.map((service, index) => (
                      <div
                          key={service.id}
                          className="animate-fade-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <ServiceCard service={service} onBookClick={() => handleBookingClick(service)} />
                      </div>
                  ))}
                </div>
            ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600">Услуги в данной категории не найдены</p>
                </div>
            )}
          </div>
        </section>

        <ContactSection onContactClick={() => setIsBookingFormOpen(true)} />
        <Footer />
        
        <BookingForm 
          open={isBookingFormOpen} 
          onOpenChange={setIsBookingFormOpen}
          service={selectedService}
        />
      </div>
  );
};

export default Index;
