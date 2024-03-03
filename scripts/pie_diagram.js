// Створення нового елементу script
var script = document.createElement('script');

// Встановлення атрибуту src для завантаження Chart.js
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js';

// Додавання обробника події завантаження скрипта
script.onload = function() {
  // Код для створення діаграми розу
  var subjects = ['Математика', 'Фізика', 'Хімія', 'Біологія', 'Історія'];
  var grades = [85, 78, 90, 30, 82]; // Оцінки за предметами

  var ctx = document.getElementById('radarChart').getContext('2d');
  var myRadarChart = new Chart(ctx, {
      type: 'radar',
      data: {
          labels: subjects,
          datasets: [{
              label: 'Оцінка',
              data: grades,
              backgroundColor: 'rgba(54, 162, 235, 0.2)', // Колір заливки області
              borderColor: 'rgba(54, 162, 235, 1)', // Колір межі
              borderWidth: 1
          }]
      },
      options: {
          scale: {
              angleLines: {
                  display: false // Вимкнення ліній шкали
              },
              ticks: {
                  beginAtZero: true, // Початок шкали з нуля
                  min: 0,
                  max: 100 // Максимальне значення шкали
              }
          }
      }
  });
};

// Додавання елементу script до тіла документа для підключення Chart.js
document.body.appendChild(script);
