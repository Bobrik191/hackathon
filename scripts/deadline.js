var futureDeadlines = [
    {date: '2024-03-10', title: 'Дедлайн проекту', description: 'Завершити проект до кінця тижня'},
    {date: '2024-03-15', title: 'Подача звіту', description: 'Подати звіт до відділу з контролю'},
    {date: '2024-03-20', title: 'Зустріч з клієнтом', description: 'Зустрітися з клієнтом для обговорення нового проекту'},
    {date: '2024-03-20', title: 'Зустріч з клієнтом', description: 'Зустрітися з клієнтом для обговорення нового проекту'},
    {date: '2024-03-20', title: 'Зустріч з клієнтом', description: 'Зустрітися з клієнтом для обговорення нового проекту'}
];

var deadlinesContainer = document.getElementById('deadlines');

futureDeadlines.forEach(function(deadline) {
    var deadlineElement = document.createElement('div');
    deadlineElement.classList.add('deadline');
    deadlineElement.innerHTML = '<h4>' + deadline.title + '</h4>' +
                                 '<p><strong>Дата:</strong> ' + deadline.date + '</p>' +
                                 '<p><strong>Опис:</strong> ' + deadline.description + '</p>';
    deadlinesContainer.appendChild(deadlineElement);
});