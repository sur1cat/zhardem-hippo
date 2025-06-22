
import ServiceCard from "@/components/ServiceCard";
import type { Service } from "@/data/services";

interface ServicesSectionProps {
  services: Service[];
  onBookingClick: (service: Service) => void;
}

const ServicesSection = ({ services, onBookingClick }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-12 sm:py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Наши медицинские услуги
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
            Квалифицированные специалисты с учеными степенями готовы помочь вам
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard service={service} onBookClick={() => onBookingClick(service)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
