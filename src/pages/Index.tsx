
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import ServiceSelector from "@/components/ServiceSelector";
import { services } from "@/data/services";
import { useBookingManager } from "@/hooks/useBookingManager";

const Index = () => {
  const {
    isBookingFormOpen,
    setIsBookingFormOpen,
    isServiceSelectorOpen,
    setIsServiceSelectorOpen,
    selectedService,
    handleBookingClick,
    handleServiceSelect,
  } = useBookingManager();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onBookingClick={() => handleBookingClick()} />
      
      <ServicesSection services={services} onBookingClick={handleBookingClick} />

      <ContactSection onContactClick={() => handleBookingClick()} />
      <Footer />
      
      <ServiceSelector
        open={isServiceSelectorOpen}
        onOpenChange={setIsServiceSelectorOpen}
        services={services}
        onServiceSelect={handleServiceSelect}
      />
      
      <BookingForm 
        open={isBookingFormOpen} 
        onOpenChange={setIsBookingFormOpen}
        service={selectedService}
      />
    </div>
  );
};

export default Index;
