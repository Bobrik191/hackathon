// Створення нового елементу script для підключення Chart.js
var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js';

// Додавання обробника події завантаження скрипта
script.onload = function() {
  // Дані для графіка
  var subjects = ['Математика', 'Фізика', 'Хімія', 'Біологія', 'Історія'];
  var averageGrades = [85, 78, 90, 70, 82]; // Середній бал за кожним предметом

  // Створення стовпчастого графіка
  var ctx = document.getElementById('barChart').getContext('2d');
  var myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: subjects,
          datasets: [{
              label: 'Оцінка',
              data: averageGrades,
              backgroundColor: 'rgba(54, 162, 235, 0.5)', // Колір стовпців
              borderColor: 'rgba(54, 162, 235, 1)', // Колір меж стовпців
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true // Початок шкали Y з нуля
                  }
              }]
          }
      }
  });
};

// Додавання елементу script до тіла документа для підключення Chart.js
document.body.appendChild(script);
