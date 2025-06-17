
import { Heart, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="bg-medical-blue text-white p-1.5 sm:p-2 rounded-full">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Жардем Астана</h3>
                <p className="text-medical-blue text-xs sm:text-sm font-medium">!Болезням- STOP!</p>
              </div>
            </div>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              Медицинский центр полного цикла оздоровления с 2001 года. 
              Врачи с учеными степенями и стажем до 45 лет.
            </p>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-medical-blue mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-300 text-sm sm:text-base">улица Шокана Валиханова 12</p>
                <p className="text-gray-300 text-sm sm:text-base">Астана 010000, Казахстан</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Наши услуги</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li>Терапия и общая медицина</li>
              <li>Неврология</li>
              <li>Отоларингология (ЛОР)</li>
              <li>УЗИ диагностика</li>
              <li>Гинекология</li>
              <li>Педиатрия</li>
              <li>Хирургия</li>
              <li>Кардиология</li>
              <li>Гастроэнтерология</li>
              <li>Эндокринология</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Контакты</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-medical-blue" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">+7 701 220 00 36</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Для записи на приём</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-medical-blue mt-1" />
                <div className="text-xs sm:text-sm text-gray-300">
                  <p className="font-medium text-white mb-1 sm:mb-2">Часы работы:</p>
                  <p>Пн-Пт: 08:00–20:00</p>
                  <p>Суббота: 09:00–17:00</p>
                  <p>Воскресенье: Закрыто</p>
                </div>
              </div>
              
              <div className="bg-medical-blue/10 rounded-lg p-3 sm:p-4 mt-4 sm:mt-6">
                <p className="text-medical-blue font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                  Запись на приём
                </p>
                <p className="text-xs sm:text-sm text-gray-300">
                  Если интересно, позвоните или напишите по номеру +7 701 220 00 36
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm">&copy; 2024 Медицинский центр «ЖӘРДЕМ». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
