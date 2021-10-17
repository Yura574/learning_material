const slides = document.querySelectorAll(".mem")
const bullets = document.querySelectorAll('.bullet')
const bullet1 = document.getElementById('bullet1')
const bullet2 = document.getElementById('bullet2')
const bullet3 = document.getElementById('bullet3')
const bullet4 = document.getElementById('bullet4')

let activeSlide = 0;
let activeBullet = 0;
let num = 1;

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
    slides[activeSlide].classList.add('active')
    bullets.forEach(bullet => {
        bullet.classList.remove('active_bullet')
    })
    bullets[activeBullet].classList.add('active_bullet')
}

bullet1.addEventListener('click', function () {
    activeSlide = 0;
    activeBullet = 0;
    num = 1;

    setActiveSlide()
})
bullet2.addEventListener('click', function () {
    activeSlide = 1;
    activeBullet = 1;
    num = 2;

    setActiveSlide()
})
bullet3.addEventListener('click', function () {
    activeSlide = 2;
    activeBullet = 2;
    num = 3;

    setActiveSlide()
})
bullet4.addEventListener('click', function () {
    activeSlide = 3;
    activeBullet = 3;
    num = 4;

    setActiveSlide()
})

function right() {
    activeSlide++;
    activeBullet++;
    num++;
    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
        num = 1;
    }
    if (activeBullet > bullets.length - 1) {
        activeBullet = 0
    }
    // setInitialBg();
    setActiveSlide();
}

next.addEventListener('click', () => {
    right()

})

function left() {
    activeSlide--;
    activeBullet--;
    num--;
    if (activeSlide < 0) {
        activeSlide = 3;
        num = 4;
    }
    if (activeBullet < 0) {
        activeBullet = 3
    }
    // setInitialBg();
    setActiveSlide()
}

prev.addEventListener('click', () => {
    left()
})