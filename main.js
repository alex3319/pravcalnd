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
    const imageElement = holidayElement.querySelector(".holiday__image");
    const titleElement = holidayElement.querySelector(".holiday__description h2");
    const descriptionElement = holidayElement.querySelector(".holiday__description p");

    holidayElement.querySelectorAll('.holiday__button').forEach(holidayButton => {
        holidayButton.addEventListener('click', event => {
            if (event.currentTarget.classList.contains("holiday__button_next") ||
                event.currentTarget.classList.contains("holiday__button_previus")
            ) {
                imageElement.classList.remove('animation_slide-in-left');
                titleElement.classList.remove('animation_slide-in-left');
                descriptionElement.classList.remove('animation_slide-in-left');

                void event.currentTarget.offsetWidth;

                imageElement.classList.add('animation_slide-in-left');
                titleElement.classList.add('animation_slide-in-left');
                descriptionElement.classList.add('animation_slide-in-left');
            }

            if (event.currentTarget.classList.contains("holiday__button_next")) {
                imageElement.setAttribute('src', '/assets/images/3.jpg');
                titleElement.textContent = 'Рождество Христово';
                descriptionElement.textContent = 'Один из важнейших христианских праздников и государственный праздник в более чем 100 странах мира. В православии Рождество Христово празднуется 7 января';
            } else if (event.currentTarget.classList.contains("holiday__button_previus")) {
                imageElement.setAttribute('src', '/assets/images/1.jpg');
                titleElement.textContent = 'Покров Святой Богородицы';
                descriptionElement.textContent = 'В традиции русского православия праздник отмечается 1 (14) октября; в греческом православии празднуется 1 и 28 октября по новому стиль.';
            }
        });
    });
});