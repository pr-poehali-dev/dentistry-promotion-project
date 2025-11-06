import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", email: "" });
  };

  const doctors = [
    {
      name: "Иванов Сергей",
      specialty: "Имплантолог",
      experience: "15 лет опыта",
      image: "https://cdn.poehali.dev/projects/f9e1ba10-ac25-493d-bef5-1a34919bdf17/files/658421e2-9ab9-45d5-aaf8-c2051cf027e3.jpg"
    },
    {
      name: "Петрова Анна",
      specialty: "Ортопед",
      experience: "12 лет опыта",
      image: "https://cdn.poehali.dev/projects/f9e1ba10-ac25-493d-bef5-1a34919bdf17/files/fbfb7f82-a5f7-40bb-86ad-51f3cf96cdba.jpg"
    },
    {
      name: "Смирнов Дмитрий",
      specialty: "Хирург",
      experience: "18 лет опыта",
      image: "https://cdn.poehali.dev/projects/f9e1ba10-ac25-493d-bef5-1a34919bdf17/files/658421e2-9ab9-45d5-aaf8-c2051cf027e3.jpg"
    }
  ];

  const pricingPlans = [
    {
      title: "БАЗОВЫЙ",
      price: "35 000",
      monthly: "2 916",
      features: [
        "Имплант Nobel Biocare",
        "Металлокерамическая коронка",
        "Операция по установке",
        "Анестезия",
        "Послеоперационный осмотр"
      ]
    },
    {
      title: "ОПТИМАЛЬНЫЙ",
      price: "55 000",
      monthly: "4 583",
      featured: true,
      features: [
        "Имплант Straumann",
        "Циркониевая коронка",
        "Операция по установке",
        "Анестезия",
        "КТ-диагностика",
        "Гарантия 10 лет"
      ]
    },
    {
      title: "ПРЕМИУМ",
      price: "85 000",
      monthly: "7 083",
      features: [
        "Имплант Nobel Biocare Active",
        "Коронка E-max",
        "Операция по установке",
        "Анестезия",
        "КТ-диагностика",
        "Пожизненная гарантия",
        "3D-планирование"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Activity" size={24} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-xl text-primary">Флоренс</div>
              <div className="text-xs text-muted-foreground">Стоматология</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#doctors" className="text-sm hover:text-primary transition-colors">Врачи</a>
            <a href="#prices" className="text-sm hover:text-primary transition-colors">Цены</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-right">
              <div className="font-semibold text-primary">+7 (495) 123-45-67</div>
              <div className="text-xs text-muted-foreground">Ежедневно 9:00-21:00</div>
            </div>
            <Button size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Щадящая имплантация зубов с восстановлением{" "}
              <span className="inline-block bg-primary text-white px-6 py-2 rounded-full">
                в 5 раз быстрее
              </span>{" "}
              обычного
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-white border-0 shadow-xl overflow-hidden relative">
              <CardContent className="pt-8 pb-8 relative z-10">
                <div className="absolute top-4 right-4">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Акция до 10 ноября
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">ИМПЛАНТ</h3>
                  <h3 className="text-2xl font-bold mb-6">ЗУБА + КОРОНКА</h3>
                  <div className="mb-4">
                    <p className="text-white/90 text-lg mb-2">в рассрочку 0%</p>
                    <p className="text-4xl font-bold mb-1">4 800 ₽/мес</p>
                    <p className="text-white/80 text-sm">или <span className="line-through">82 000 ₽</span> 48 000 ₽</p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
                  <img 
                    src="https://cdn.poehali.dev/projects/f9e1ba10-ac25-493d-bef5-1a34919bdf17/files/5944c8ec-ae99-4987-85f7-2f361740db31.jpg"
                    alt="Dental implant"
                    className="w-full h-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-primary/80 text-white border-0 shadow-xl overflow-hidden relative">
              <CardContent className="pt-8 pb-8 relative z-10">
                <div className="absolute top-4 right-4">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Акция до 10 ноября
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">ВСЯ ЧЕЛЮСТЬ</h3>
                  <h3 className="text-2xl font-bold mb-6">«ПОД КЛЮЧ»</h3>
                  <div className="mb-4">
                    <p className="text-white/90 text-lg mb-2">в рассрочку 0%</p>
                    <p className="text-4xl font-bold mb-1">11 450 ₽/мес</p>
                    <p className="text-white/80 text-sm">или <span className="line-through">129 000 ₽</span> 114 500 ₽</p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-80 h-64 opacity-10">
                  <img 
                    src="https://cdn.poehali.dev/projects/f9e1ba10-ac25-493d-bef5-1a34919bdf17/files/c3787668-edc6-4556-9494-af4d58d64e1b.jpg"
                    alt="Full jaw restoration"
                    className="w-full h-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-primary/20 shadow-lg">
            <CardContent className="pt-8 pb-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Ответьте на 4 вопроса и получите{" "}
                  <span className="text-primary">РАСЧЁТ СТОИМОСТИ + ПОДАРКИ:</span>
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="flex gap-3 items-start">
                  <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">КТ-снимки для оценки</p>
                    <p className="text-muted-foreground text-sm">состояния челюстей</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Консультацию сразу</p>
                    <p className="text-muted-foreground text-sm">3х специалистов</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">План лечения под ваш</p>
                    <p className="text-muted-foreground text-sm">случай и бюджет</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg px-12 py-6 h-auto shadow-lg"
                >
                  РАССЧИТАТЬ СТОИМОСТЬ + ПОЛУЧИТЬ ПОДАРКИ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Самое важное сегодня – чтобы{" "}
                <span className="text-primary">импланты прижились</span> и{" "}
                <span className="text-primary">прослужили не меньше 15-20 лет</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Check" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Операция без боли</h4>
                    <p className="text-muted-foreground text-sm">
                      Современная анестезия и щадящие методики установки имплантов
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Check" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Гарантия приживления</h4>
                    <p className="text-muted-foreground text-sm">
                      99,7% успешных имплантаций благодаря опыту наших специалистов
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Check" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Пожизненная гарантия</h4>
                    <p className="text-muted-foreground text-sm">
                      На импланты премиум-класса от ведущих производителей
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/f9e1ba10-ac25-493d-bef5-1a34919bdf17/files/7b9e6d00-ce2a-4046-946c-ae158a375864.jpg"
                alt="Команда врачей"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="doctors" className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Доверяйте здоровье и внешность в мастера
            </h2>
            <p className="text-xl text-muted-foreground">
              Официальный стаж наших врачей от 10 лет
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-2">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50">
                  <img 
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                  <p className="text-primary font-semibold mb-2">{doctor.specialty}</p>
                  <p className="text-muted-foreground text-sm">{doctor.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Сертификаты</h3>
                <p className="text-muted-foreground text-sm text-center">
                  Все врачи имеют действующие сертификаты и дипломы международного образца
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Icon name="GraduationCap" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Обучение</h3>
                <p className="text-muted-foreground text-sm text-center">
                  Регулярное повышение квалификации и участие в международных конференциях
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Trophy" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Награды</h3>
                <p className="text-muted-foreground text-sm text-center">
                  Победители профессиональных конкурсов и лауреаты отраслевых премий
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Сколько стоит имплантация зубов{" "}
              <span className="text-primary">без боли</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              У нас от 35 000 ₽ — сразу «под ключ» за 4 дня/6 визитов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all hover:shadow-2xl ${
                  plan.featured 
                    ? 'border-4 border-green-500 scale-105 shadow-xl' 
                    : 'border-2 border-primary/20'
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-6 py-2 text-sm font-bold">
                    ЛУЧШИЙ ВЫБОР
                  </div>
                )}
                <CardContent className="pt-8 pb-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-4 text-primary">{plan.title}</h3>
                    <div className="mb-2">
                      <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-2xl text-muted-foreground"> ₽</span>
                    </div>
                    <div className="text-muted-foreground">
                      или <span className="font-semibold text-lg text-foreground">{plan.monthly} ₽/мес</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">в рассрочку 0%</div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${
                      plan.featured 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                    size="lg"
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-lg px-12"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать точную стоимость
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Консультация стоматолога всего за 500₽ вместо 2000₽
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={24} className="flex-shrink-0" />
                  <span>Осмотр полости рта</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={24} className="flex-shrink-0" />
                  <span>Составление плана лечения</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={24} className="flex-shrink-0" />
                  <span>Ответы на все вопросы</span>
                </div>
              </div>
            </div>

            <Card className="bg-white text-foreground">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold text-center mb-6">Запишитесь на приём</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                    size="lg"
                  >
                    Записаться на приём
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Адрес и контакты</h2>
            <p className="text-xl text-muted-foreground">Мы всегда рады вам помочь</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-200 rounded-2xl overflow-hidden h-96 mb-6">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A12345" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  title="Карта"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Адрес</h4>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Телефон</h4>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <p className="text-muted-foreground">info@florence-dent.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-primary to-primary/90 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Icon name="Activity" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-xl">Флоренс</div>
                  <div className="text-xs text-white/80">Стоматология</div>
                </div>
              </div>
              <p className="text-sm text-white/80">
                Современная стоматология с европейским подходом
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Имплантация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Протезирование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Терапия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отбеливание</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">О клинике</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Врачи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@florence-dent.ru</li>
                <li>г. Москва, ул. Примерная, 123</li>
                <li>Ежедневно: 9:00 - 21:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2024 Стоматология Флоренс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
