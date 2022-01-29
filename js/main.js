
/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}



/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("fairy-tail__item");
    
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";    
}

/*---AUTOPLAY---FIRST SLIDER---*/
var timeInterval = 3000,
    automate = true,
    timerID = null;

if (automate) {
   timerID = setInterval(function() {
    let slides = document.getElementsByClassName("fairy-tail__item");
    slideIndex++;
    showSlides();
    if (slideIndex == slides.length) {
        slideIndex = 0;
    }
   }, timeInterval);
}


/*---------------------------------------------------------*/
/*----SECOND SLIDER----*/
/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex2 = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides2(slideIndex2);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide2() {
    showSlides2(slideIndex2 += 1);
}

function previousSlide2() {
/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
    showSlides2(slideIndex2 -= 1);  
}

/* Устанавливаем текущий слайд: */
function currentSlide2(m) {
    showSlides2(slideIndex2 = m);
}



/* Функция перелистывания: */
function showSlides2(m) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides2 = document.getElementsByClassName("our-trip__slider-item");
    
    /* Проверяем количество слайдов: */
    if (m > slides2.length) {
      slideIndex2 = 1
    }
    if (m < 1) {
        slideIndex2 = slides2.length
    }
  
    /* Проходим по каждому слайду в цикле for: */
    for (let slide2 of slides2) {
        slide2.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides2[slideIndex2 - 1].style.display = "block";    
}


/*---AUTOPLAY---SECOND SLIDER---*/
var timeInterval2 = 3000,
    automate2 = true,
    timerID2 = null;

if (automate2) {
   timerID2 = setInterval(function() {
    let slides2 = document.getElementsByClassName("our-trip__slider-item");
    slideIndex2++;
    showSlides2();
    if (slideIndex2 == slides2.length) {
        slideIndex2 = 0;
    }
   }, timeInterval2);
}