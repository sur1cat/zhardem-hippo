
import { Heart, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-medical-blue text-white p-2 rounded-full">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">МедЦентр</h3>
                <p className="text-gray-400 text-sm">Ваше здоровье - наш приоритет</p>
              </div>
            </div>
            <p className="text-gray-400">
              Современная медицинская помощь с заботой о каждом пациенте. 
              Опытные врачи и индивидуальный подход.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Наши услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Терапия и общая медицина</li>
              <li>Неврология</li>
              <li>Отоларингология (ЛОР)</li>
              <li>УЗИ диагностика</li>
              <li>Гинекология</li>
              <li>Педиатрия</li>
              <li>Хирургия</li>
              <li>Кардиология</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-medical-blue" />
                <div>
                  <p className="font-semibold">+7 701 220 00 36</p>
                  <p className="text-gray-400 text-sm">Для записи на приём</p>
                </div>
              </div>
              
              <div className="bg-medical-blue/10 rounded-lg p-4 mt-6">
                <p className="text-medical-blue font-medium mb-2">
                  Запись на приём
                </p>
                <p className="text-sm text-gray-300">
                  Если интересно, позвоните или напишите по номеру +7 701 220 00 36
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 МедЦентр. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
