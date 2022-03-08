const arrowsConatiner = document.querySelector('.arrows-downward')
const arrows = document.querySelectorAll('.arrows-downward img')
const navbar = document.querySelector('.navbar')
const header = document.querySelector('header')
const btnScrollToTop = document.querySelector('.scroll-to-top')
const flipCards = document.querySelectorAll('.flip-card')
const btnSend = document.getElementById('btn-send')
const sections = document.querySelectorAll('section')
const servicesLnk = document.getElementById('services')
const aboutLnk = document.getElementById('about')
const whyUsLnk = document.getElementById('why-us')
const contactLnks = document.querySelectorAll('.contact-btn')

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let windowSize = sections[0].clientHeight


if (urlParams.has('success') || urlParams.has('error')) {
    window.scrollTo(0, windowSize * sections.length);
    if (urlParams.has('success')) {
        btnSend.innerHTML = "SUCCESS"
        btnSend.style.backgroundImage = 'linear-gradient(124deg, rgba(148,250,62,1) 10%, rgba(104,250,62,1) 20%, rgba(69,249,62,1) 31%, rgba(68,249,80,1) 40%, rgba(66,248,130,1) 50%, rgba(60,246,250,1) 77%)'
        btnSend.style.cursor = "default"
        btnSend.disabled = true
    } else {
        btnSend.innerHTML = "ERROR, Try again"
        btnSend.style.backgroundImage = 'linear-gradient(124deg, rgba(0,0,0,1) 10%, rgba(83,22,22,1) 28%, rgba(248,66,66,1) 48%, rgba(60,246,250,1) 75%)'
    }
    
}

servicesLnk.addEventListener('click', () => {
    window.scrollTo({
        top: sections[1].offsetTop,
        behavior: "smooth"
    });
})

aboutLnk.addEventListener('click', () => {
    window.scrollTo({
        top: sections[2].offsetTop,
        behavior: "smooth"
    });
})

whyUsLnk.addEventListener('click', () => {
    window.scrollTo({
        top: sections[3].offsetTop,
        behavior: "smooth"
    });
})

contactLnks.forEach(lnk => {
    lnk.addEventListener('click', () => {
        window.scrollTo({
            top: sections[4].offsetTop,
            behavior: "smooth"
        });
    })
})


let arrowsInterval
let arrowCounter = 2


setTimeout(() => {
    arrowsInterval = setInterval(arrowTransition, 400)
}, 3000)



function arrowTransition() {
    if (arrowCounter < 0) {
        clearInterval(arrowsInterval)
        return
    }
    let imgWidth = arrows[arrowCounter].width 
    arrows[arrowCounter].classList.add('active')
    arrows[arrowCounter].style.transform = `translateY(${(imgWidth * arrowCounter) + (imgWidth * 2)}px)`
    arrowCounter--
}


arrowsConatiner.addEventListener('click', () => {
    window.scroll({
        top: windowSize,
        behavior: 'smooth'
    });
})


window.addEventListener('scroll', () => {
    if (window.pageYOffset >= windowSize) {
    } else {
    }
});

window.addEventListener('resize', () => {
    windowSize = document.querySelectorAll('section')[0].clientHeight
})

window.addEventListener("scroll", function(){
    if(window.pageYOffset >= windowSize/2){
        btnScrollToTop.classList.add("active")
    }else{
        btnScrollToTop.classList.remove("active")
    }
});

btnScrollToTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

flipCards.forEach(card => {
    card.addEventListener('click', () => {
        card.children[0].classList.toggle("rotate")
    })
})