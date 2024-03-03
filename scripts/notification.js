document
    .getElementById("notification-icon")
    .addEventListener("click", function () {
      document.getElementById("notification-popup").style.display = "block";
      var recentNotifications = document.getElementById(
        "recent-notifications"
      );
      recentNotifications.innerHTML = ""; 
      var notifications = [
        "Notification 1",
        "Notification 2",
        "Notification 3",
      ];
      notifications.forEach(function (notification) {
        var li = document.createElement("li");
        li.textContent = notification;
        recentNotifications.appendChild(li);
      });
    });

document
  .getElementById("view-all-notifications-btn")
  .addEventListener("click", function () {
    window.location.href = "notifications.html";
  });

  document.getElementById("notification-icon").addEventListener("click", function () {
    var notificationIcon = document.getElementById("notification-icon");
    var iconRect = notificationIcon.getBoundingClientRect();

    var notificationPopup = document.getElementById("notification-popup");

    notificationPopup.style.display = "block";
    notificationPopup.style.position = "absolute";
    notificationPopup.style.top = iconRect.bottom + "px";
    notificationPopup.style.left = iconRect.left + "px";
  });
  
    document.getElementById("close-notification-btn").addEventListener("click", function () {
      document.getElementById("notification-popup").style.display = "none";
    });