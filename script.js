<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vata9a Boxing Club</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white text-gray-800">
  <!-- Header -->
  <header class="flex justify-between items-center p-6 bg-blue-600 text-white shadow-lg">
    <h1 class="text-2xl font-bold">Vata9a Boxing Club</h1>
    <nav>
      <ul class="flex space-x-6">
        <li><a href="#about" class="hover:underline">О клубе</a></li>
        <li><a href="#trainers" class="hover:underline">Тренеры</a></li>
        <li><a href="#contact" class="hover:underline">Контакты</a></li>
      </ul>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="relative h-screen flex items-center justify-center bg-cover bg-center" style="background-image: url('https://source.unsplash.com/1600x900/?boxing-ring');">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative z-10 text-center px-6">
      <h2 class="text-5xl font-extrabold text-white mb-4">Добро пожаловать в Vata9a</h2>
      <p class="text-xl text-white/80 mb-6">Присоединяйтесь к лучшим боксерам Днепра</p>
      <a href="#contact" class="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg">Записаться на тренировку</a>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-16 bg-white">
    <div class="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <img src="https://source.unsplash.com/600x400/?boxing-gloves" alt="Boxing gloves" class="rounded-2xl shadow-lg" />
      <div>
        <h3 class="text-3xl font-bold text-blue-600 mb-4">О нашем клубе</h3>
        <p class="text-lg mb-4">
          Vata9a — это сообщество профессиональных тренеров и спортсменов, объединенных страстью к боксу.
          Мы предлагаем тренировочные программы для новичков и продвинутых, а наши залы оснащены всем необходимым оборудованием.
        </p>
        <p class="text-lg">
          Присоединяйтесь к нам и развивайте силу, выносливость и уверенность в себе под руководством лучших.
        </p>
      </div>
    </div>
  </section>

  <!-- Trainers Section -->
  <section id="trainers" class="py-16 bg-black">
    <div class="container mx-auto px-6 lg:px-20">
      <h3 class="text-3xl font-bold text-white text-center mb-12">Наши тренеры</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition">
          <img src="https://source.unsplash.com/400x400/?trainer,boxing" alt="Иван Петров" class="w-full h-56 object-cover" />
          <div class="p-6 text-center">
            <h4 class="text-xl font-semibold text-blue-600 mb-2">Иван Петров</h4>
            <p class="text-gray-600">Профессиональный тренер с опытом более 10 лет.</p>
          </div>
        </div>
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition">
          <img src="https://source.unsplash.com/400x400/?coach,boxing" alt="Алексей Смирнов" class="w-full h-56 object-cover" />
          <div class="p-6 text-center">
            <h4 class="text-xl font-semibold text-blue-600 mb-2">Алексей Смирнов</h4>
            <p class="text-gray-600">Эксперт по технике и стратегии.</p>
          </div>
        </div>
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition">
          <img src="https://source.unsplash.com/400x400/?female,boxing" alt="Марина Иванова" class="w-full h-56 object-cover" />
          <div class="p-6 text-center">
            <h4 class="text-xl font-semibold text-blue-600 mb-2">Марина Иванова</h4>
            <p class="text-gray-600">Специалист по тренировкам для начинающих и продвинутых.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-16 bg-white">
    <div class="container mx-auto px-6 lg:px-20">
      <h3 class="text-3xl font-bold text-blue-600 text-center mb-8">Свяжитесь с нами</h3>
      <form class="max-w-xl mx-auto grid grid-cols-1 gap-6">
        <input type="text" name="name" placeholder="Ваше имя" class="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        <input type="email" name="email" placeholder="Ваш Email" class="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        <textarea name="message" placeholder="Сообщение" rows="4" class="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"></textarea>
        <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mx-auto">Отправить</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-black text-white py-6 text-center">
    <p>&copy; 2025 Vata9a Boxing Club. Все права защищены.</p>
    <p>г. Днепр, ул. Боксеров, 9</p>
  </footer>
</body>
</html>
