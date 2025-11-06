import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  const services = [
    {
      icon: "Stethoscope",
      title: "Терапия",
      description: "Лечение кариеса, пульпита, периодонтита. Профессиональная гигиена полости рта."
    },
    {
      icon: "Crown",
      title: "Ортопедия",
      description: "Протезирование зубов, виниры, коронки. Восстановление эстетики и функции."
    },
    {
      icon: "Anvil",
      title: "Имплантология",
      description: "Современная имплантация зубов под ключ. Пожизненная гарантия на импланты."
    },
    {
      icon: "Sparkles",
      title: "Эстетика",
      description: "Отбеливание зубов, художественная реставрация. Голливудская улыбка."
    }
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Опытные врачи",
      description: "Стаж специалистов от 10 лет. Регулярное повышение квалификации."
    },
    {
      icon: "Microscope",
      title: "Современное оборудование",
      description: "Цифровая диагностика, микроскопы, 3D-томография."
    },
    {
      icon: "ShieldCheck",
      title: "Гарантия качества",
      description: "Официальная гарантия на все виды работ до 5 лет."
    },
    {
      icon: "Heart",
      title: "Без боли",
      description: "Безболезненное лечение с использованием современной анестезии."
    },
    {
      icon: "FlaskConical",
      title: "Своя лаборатория",
      description: "Изготовление протезов на месте. Быстрые сроки и контроль качества."
    },
    {
      icon: "CreditCard",
      title: "Рассрочка 0%",
      description: "Лечение в рассрочку без переплат и скрытых комиссий."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Консультация",
      description: "Бесплатный осмотр и диагностика. Составление индивидуального плана лечения."
    },
    {
      number: "02",
      title: "План лечения",
      description: "Детальная смета с фиксированными ценами. Обсуждение всех этапов работы."
    },
    {
      number: "03",
      title: "Лечение",
      description: "Качественное выполнение всех процедур по утвержденному плану."
    },
    {
      number: "04",
      title: "Результат",
      description: "Здоровые зубы и красивая улыбка. Гарантия и поддержка после лечения."
    }
  ];

  const testimonials = [
    {
      name: "Мария Петрова",
      text: "Делала имплантацию в этой клинике. Очень довольна результатом! Врачи профессионалы своего дела, всё прошло быстро и безболезненно.",
      rating: 5
    },
    {
      name: "Александр Иванов",
      text: "Обратился с острой болью. Приняли в тот же день, быстро вылечили. Цены адекватные, отношение внимательное. Рекомендую!",
      rating: 5
    },
    {
      name: "Елена Смирнова",
      text: "Отбеливала зубы перед свадьбой. Результат превзошёл все ожидания! Улыбка стала белоснежной. Спасибо большое!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Smile" size={32} className="text-primary" />
            <span className="text-xl font-bold text-foreground">СтомаКлиник</span>
          </div>
          <Button size="lg" className="hidden md:flex">
            Записаться на приём
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Современная стоматология{" "}
                <span className="text-primary">без боли</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Качественное лечение с гарантией и заботой о пациентах. Первая консультация бесплатно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на приём
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10000+</div>
                  <div className="text-sm text-muted-foreground">пациентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">довольных</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                <img 
                  src="https://cdn.poehali.dev/projects/f9e1ba10-ac25-493d-bef5-1a34919bdf17/files/8b34b49e-384c-474c-b1ff-de1772d400c5.jpg" 
                  alt="Современная стоматология" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">О нашей клинике</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создали современную клинику, где каждый пациент получает индивидуальный подход и высочайшее качество услуг
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <Icon name="Users" size={48} className="text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Команда профессионалов</h3>
                <p className="text-muted-foreground">
                  Наши врачи регулярно проходят обучение и повышают квалификацию в России и за рубежом
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <Icon name="Target" size={48} className="text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Индивидуальный подход</h3>
                <p className="text-muted-foreground">
                  Разрабатываем персональный план лечения с учётом особенностей каждого пациента
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <Icon name="Zap" size={48} className="text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Современные технологии</h3>
                <p className="text-muted-foreground">
                  Используем передовое оборудование и материалы от ведущих мировых производителей
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр стоматологических услуг для всей семьи
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary hover:shadow-lg transition-all group">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши преимущества</h2>
            <p className="text-xl text-muted-foreground">
              Почему пациенты выбирают нас
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={advantage.icon} size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Этапы лечения</h2>
            <p className="text-xl text-muted-foreground">
              Простой и понятный путь к здоровой улыбке
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Результаты «До и После»</h2>
            <p className="text-xl text-muted-foreground">
              Реальные кейсы наших пациентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-2">
                  <div className="aspect-square bg-gray-200 relative">
                    <img src="https://cdn.poehali.dev/projects/f9e1ba10-ac25-493d-bef5-1a34919bdf17/files/ff956e47-4be2-4b34-8969-09fa4c5ae298.jpg" alt="До" className="w-full h-full object-cover grayscale" />
                    <div className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                      До
                    </div>
                  </div>
                  <div className="aspect-square bg-gray-200 relative">
                    <img src="https://cdn.poehali.dev/projects/f9e1ba10-ac25-493d-bef5-1a34919bdf17/files/ff956e47-4be2-4b34-8969-09fa4c5ae298.jpg" alt="После" className="w-full h-full object-cover" />
                    <div className="absolute bottom-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      После
                    </div>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-sm text-muted-foreground">Имплантация и протезирование</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Отзывы пациентов</h2>
            <p className="text-xl text-muted-foreground">
              Что говорят о нас наши пациенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                    <div className="font-semibold">{testimonial.name}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Специальные предложения</h2>
            <p className="text-xl opacity-90">
              Выгодные акции для новых и постоянных пациентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6">
                <Icon name="Gift" size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">Первая консультация</h3>
                <div className="text-4xl font-bold mb-2">БЕСПЛАТНО</div>
                <p className="opacity-90">Осмотр, диагностика и план лечения</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6">
                <Icon name="Percent" size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">Скидка на лечение</h3>
                <div className="text-4xl font-bold mb-2">-20%</div>
                <p className="opacity-90">При комплексном лечении от 3 зубов</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6">
                <Icon name="Banknote" size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">Рассрочка 0%</h3>
                <div className="text-4xl font-bold mb-2">12 мес</div>
                <p className="opacity-90">На все виды лечения без переплат</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Записаться на приём</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          <Card className="border-2">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <Input 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Интересующая услуга</label>
                  <Input 
                    placeholder="Например: имплантация" 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий</label>
                  <Textarea 
                    placeholder="Опишите вашу проблему или пожелания..." 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Как нас найти</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:00 - 21:00<br/>Сб-Вс: 10:00 - 18:00</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@stomaclinic.ru</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-2xl bg-gray-200 overflow-hidden">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=1234567890" 
                width="100%" 
                height="100%" 
                frameBorder="0"
                className="grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Smile" size={32} />
                <span className="text-xl font-bold">СтомаКлиник</span>
              </div>
              <p className="text-sm opacity-80">
                Современная стоматология без боли с гарантией качества
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Терапия</li>
                <li>Ортопедия</li>
                <li>Имплантология</li>
                <li>Эстетическая стоматология</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О клинике</li>
                <li>Врачи</li>
                <li>Цены</li>
                <li>Акции</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@stomaclinic.ru</li>
                <li>г. Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            © 2024 СтомаКлиник. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;