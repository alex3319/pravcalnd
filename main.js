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

document.querySelectorAll('.holiday').forEach(holidayElement => {
    const images = holidayElement.querySelectorAll(".holiday__image");
    const descriptions = holidayElement.querySelectorAll(".holiday__description");

    const elementHandler = (element, elementIndex, slideIndex) => {
        console.log(element, elementIndex, slideIndex - 1);

        if (elementIndex === slideIndex - 1) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    };

    holidayElement.querySelectorAll('.holiday__button').forEach(holidayButton => {
        holidayButton.addEventListener('click', event => {
            const currentSlide = parseInt(holidayElement.getAttribute('data-slide'));

            if (event.currentTarget.classList.contains("holiday__button_next") && currentSlide + 1 <= images.length) {
                images.forEach((image, imageIndex) => elementHandler(image, imageIndex, currentSlide + 1));
                descriptions.forEach((description, descriptionIndex) => elementHandler(description, descriptionIndex, currentSlide + 1));
                holidayElement.setAttribute('data-slide', currentSlide + 1);
            } else if (event.currentTarget.classList.contains("holiday__button_previus") && currentSlide - 1 >= 1) {
                images.forEach((image, imageIndex) => elementHandler(image, imageIndex, currentSlide - 1));
                descriptions.forEach((description, descriptionIndex) => elementHandler(description, descriptionIndex, currentSlide - 1));
                holidayElement.setAttribute('data-slide', currentSlide - 1);
            }
        });
    });
});