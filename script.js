import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-red-600 text-white shadow-lg">
        <h1 className="text-2xl font-bold">Vata9a Boxing Club</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:underline">О клубе</a></li>
            <li><a href="#trainers" className="hover:underline">Тренеры</a></li>
            <li><a href="#contact" className="hover:underline">Контакты</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?boxing-ring')" }}>
        <div className="absolute inset-0 bg-red-900 opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="text-5xl font-extrabold text-white mb-4">Добро пожаловать в Vata9a</h2>
          <p className="text-xl text-white-300 mb-6">Присоединяйтесь к лучшим боксерам Днепра</p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg">Записаться на тренировку</Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img src="https://source.unsplash.com/600x400/?boxing-gloves" alt="Boxing gloves" className="rounded-2xl shadow-lg" />
            <div>
              <h3 className="text-3xl font-bold text-red-600 mb-4">О нашем клубе</h3>
              <p className="text-lg mb-4">
                Vata9a — это сообщество профессиональных тренеров и спортсменов, объединенных страстью к боксу.
                Мы предлагаем тренировочные программы для новичков и продвинутых, а наши залы оснащены всем необходимым оборудованием.
              </p>
              <p className="text-lg">
                Присоединяйтесь к нам и развивайте силу, выносливость и уверенность в себе под руководством лучших.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-16 bg-orange-50">
        <div className="container mx-auto px-6 lg:px-20">
          <h3 className="text-3xl font-bold text-red-600 text-center mb-12">Наши тренеры</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Иван Петров', img: 'https://source.unsplash.com/400x400/?trainer,boxing' },
              { name: 'Алексей Смирнов', img: 'https://source.unsplash.com/400x400/?coach,boxing' },
              { name: 'Марина Иванова', img: 'https://source.unsplash.com/400x400/?female,boxing' }
            ].map((t, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img src={t.img} alt={t.name} className="w-full h-56 object-cover" />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-red-600 mb-2">{t.name}</h4>
                  <p className="text-gray-600">Профессиональный тренер с опытом более 10 лет.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <h3 className="text-3xl font-bold text-red-600 text-center mb-8">Свяжитесь с нами</h3>
          <form className="max-w-xl mx-auto grid grid-cols-1 gap-6">
            <input type="text" placeholder="Ваше имя" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300" />
            <input type="email" placeholder="Ваш Email" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300" />
            <textarea placeholder="Сообщение" rows="4" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"></textarea>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg mx-auto">Отправить</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Vata9a Boxing Club. Все права защищены.</p>
        <p>г. Днепр, ул. Боксеров, 9</p>
      </footer>
    </div>
  );
}
