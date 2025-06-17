
import { Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-medical-blue text-white p-2 rounded-full">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Жардем Астана</h1>
              <p className="text-sm text-medical-blue font-medium">!Болезням- STOP!</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:block text-right">
              <p className="text-sm text-gray-600">Записаться на приём</p>
              <p className="text-lg font-semibold text-medical-blue">+7 701 220 00 36</p>
            </div>
            <Button 
              className="bg-medical-green hover:bg-medical-green/90 text-white transition-all duration-200 hover:scale-105"
              onClick={() => window.open("tel:+77012200036", "_self")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
