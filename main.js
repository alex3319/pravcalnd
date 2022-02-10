const currentDate = new Date();

document.querySelectorAll('.today__day').forEach(element => {
	element.textContent = currentDate.getDate();
});

document.querySelectorAll('.today__day-name').forEach(element => {
	element.textContent = [
		'Воскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота'
	][currentDate.getDay()];
});

document.querySelectorAll('.today__month').forEach(element => {
	element.textContent = [
		'Января',
		'Февраля',
		'Мара',
		'Апреля',
		'Мая',
		'Июня',
		'Июля',
		'Августа',
		'Сентября',
		'Октября',
		'Ноября',
		'Декабря'
	][currentDate.getMonth()];
});