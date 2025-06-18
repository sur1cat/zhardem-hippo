
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  const phoneNumber = "+77012200036";

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, "_self");
    onOpenChange(false);
  };

  const handleMessage = () => {
    // Можно добавить WhatsApp или Telegram ссылку
    window.open(`https://wa.me/77012200036`, "_blank");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 text-center mb-2">
            Запись на приём
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600 mb-6">
            Если вас заинтересовало, то напишите или позвоните на номер
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-medical-blue mb-4">
              {phoneNumber}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleCall}
              className="flex-1 bg-medical-green hover:bg-medical-green/90 text-white"
              size="lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              Позвонить
            </Button>
            
            <Button
              onClick={handleMessage}
              variant="outline"
              className="flex-1 border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white"
              size="lg"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Написать
            </Button>
          </div>
          
          <div className="text-center">
            <Button
              onClick={() => onOpenChange(false)}
              variant="ghost"
              className="text-gray-500 hover:text-gray-700"
            >
              Закрыть
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
