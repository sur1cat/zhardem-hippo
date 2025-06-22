
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

export const services: Service[] = [
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
    id: "pediatrician-gastro",
    title: "Детский гастроэнтеролог",
    price: 12500,
    category: "Детское здоровье",
    doctors: [{
      name: "Преснова Нина Михайловна",
      experience: "более 47 лет (инфекционист, паразитолог)",
      schedule: "Будние дни: 14:00-19:00"
    }]
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
  },
  {
    id: "dermatologist",
    title: "Дерматолог",
    price: 10000,
    category: "Дерматология",
    doctors: [{
      name: "Врач-дерматолог",
      experience: "более 15 лет",
      schedule: "Вторник, четверг: 14:00-18:00"
    }]
  },
  {
    id: "ophthalmologist",
    title: "Офтальмолог",
    price: 8000,
    category: "Офтальмология",
    doctors: [{
      name: "Врач-офтальмолог",
      experience: "более 20 лет",
      schedule: "Понедельник, среда, пятница: 9:00-15:00"
    }]
  },
  {
    id: "urologist",
    title: "Уролог",
    price: 12000,
    category: "Урология",
    doctors: [{
      name: "Врач-уролог",
      experience: "более 25 лет",
      schedule: "Вторник, пятница: 16:00-19:00"
    }]
  },
  {
    id: "orthopedist",
    title: "Ортопед-травматолог",
    price: 12000,
    category: "Ортопедия",
    doctors: [{
      name: "Врач-ортопед",
      experience: "более 18 лет",
      schedule: "Понедельник, четверг: 15:00-19:00"
    }]
  }
];
