const navbar=document.querySelector('nav')
const hero=document.querySelector('#HeroBig')
const navlink=document.querySelectorAll('.nav-link')
const navbrand=document.querySelector('.nav-brand')
const addBg = () => {
    if(window.scrollY>100){
        navbar.classList.add('addBg')
        navlink.forEach(nav=>{nav.style.color="white"
        nav.addEventListener('mouseenter',()=>{nav.style.color='#ffba08'})
        nav.addEventListener('mouseleave',()=>{nav.style.color='white'})
        if(navbar.classList.contains(addBg)){
            navbrand.style.color='white'
        }
    })
    }else if(window.scrollY<100){
        navbar.classList.remove('addBg')
        navbar.style.transition='.3s'
        navlink.forEach(nav=>{nav.style.color="black"
        nav.addEventListener('mouseenter',()=>{nav.style.color="#ffba0"})
        nav.addEventListener('mouseleave',()=>{nav.style.color='black'})
    })
    }
}
// document.addEventListener('DOMContentLoaded',addBg)
window.addEventListener('scroll',addBg)
