const currentDate = new Date();

const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];

const months = [
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
];

document.querySelectorAll(".header-hamburger").forEach(hamburger => {
    hamburger.querySelector('.header-hamburger__icon').addEventListener('click', event => {
        if (event.currentTarget.classList.contains('header-hamburger__icon_opened')) {
            hamburger.querySelector('.header-hamburger__popup').style.height = '100vh';
            document.body.style.overflow = 'hidden';

            setTimeout(() => {
                hamburger.querySelector('.header-hamburger__popup .header-hamburger-menu').style.opacity = '1';
            }, 750);

            setTimeout(() => {
                hamburger.querySelector('.header-hamburger__popup .header-hamburger-social').style.opacity = '1';
            }, 1000);

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            hamburger.querySelector('.header-hamburger__popup').style.removeProperty('height');
            hamburger.querySelector('.header-hamburger__popup .header-hamburger-menu').style.removeProperty('opacity');
            hamburger.querySelector('.header-hamburger__popup .header-hamburger-social').style.removeProperty('opacity');
            document.body.style.removeProperty('overflow');
        }
    });
});

document.querySelectorAll('.today__day').forEach(element => {
    element.textContent = currentDate.getDate();
});

document.querySelectorAll('.today__day-name').forEach(element => {
    element.textContent = days[currentDate.getDay()];
});

document.querySelectorAll('.today__month').forEach(element => {
    element.textContent = months[currentDate.getMonth()];
});

document.querySelectorAll('.today-touch').forEach(element => {
    element.textContent += ` ${days[currentDate.getDay()]}, ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
});

document.querySelectorAll('.holiday, .holiday-touch').forEach(holidayElement => {
    const images = holidayElement.querySelectorAll(".holiday__image");
    const descriptions = holidayElement.querySelectorAll(".holiday__description");
    const durations = holidayElement.querySelectorAll(".holiday__duration");
    const buttons = holidayElement.querySelectorAll("a.holiday__button");

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
                durations.forEach((duration, durationIndex) => elementHandler(duration, durationIndex, currentSlide + 1));
                buttons.forEach((button, buttonIndex) => elementHandler(button, buttonIndex, currentSlide + 1));
                holidayElement.setAttribute('data-slide', currentSlide + 1);
            } else if (event.currentTarget.classList.contains("holiday__button_previus") && currentSlide - 1 >= 1) {
                images.forEach((image, imageIndex) => elementHandler(image, imageIndex, currentSlide - 1));
                descriptions.forEach((description, descriptionIndex) => elementHandler(description, descriptionIndex, currentSlide - 1));
                durations.forEach((duration, durationIndex) => elementHandler(duration, durationIndex, currentSlide - 1));
                buttons.forEach((button, buttonIndex) => elementHandler(button, buttonIndex, currentSlide - 1));
                holidayElement.setAttribute('data-slide', currentSlide - 1);
            }
        });
    });
});