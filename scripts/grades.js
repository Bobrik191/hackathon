document.getElementById('notification-icon').addEventListener('click', function() {
    document.getElementById('notification-popup').style.display = 'block';
    var recentNotifications = document.getElementById('recent-notifications');
    recentNotifications.innerHTML = ''; // Очищення списку
    var notifications = ['Notification 1', 'Notification 2', 'Notification 3'];
    notifications.forEach(function(notification) {
        var li = document.createElement('li');
        li.textContent = notification;
        recentNotifications.appendChild(li);
    });
});

document.getElementById('view-all-notifications-btn').addEventListener('click', function() {
    window.location.href = 'notifications.html';
});

document.addEventListener('DOMContentLoaded', function() {
    var grades = document.querySelectorAll('.grade');
  
    grades.forEach(function(grade) {
      var value = parseInt(grade.textContent);
      if (value < 60) {
        grade.classList.add('f-grade');
      } else if (value >= 60 && value < 75) {
        grade.classList.add('d-grade');
      } else if (value >= 75 && value < 85) {
        grade.classList.add('c-grade');
      } else if (value >= 85 && value < 95) {
        grade.classList.add('b-grade');
      } else if (value >= 95 && value < 100) {
        grade.classList.add('a-grade');
      } else {
        grade.classList.add('s-grade');
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var gradeCells = document.querySelectorAll(".grade");
    gradeCells.forEach(function(cell) {
      var grade = parseInt(cell.textContent.trim());
      var gradeBar = document.createElement("div");
      gradeBar.classList.add("grade-bar");
      var gradeFill = document.createElement("div");
      gradeFill.classList.add("grade-fill");
      gradeFill.style.width = grade + "%";
      gradeBar.appendChild(gradeFill);
      cell.innerHTML = grade;
      cell.appendChild(gradeBar);
    });
  });