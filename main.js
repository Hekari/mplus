const element=document.querySelector('.contactBtn')
const element2=document.querySelector('.pricing-btn')
const logo=document.querySelector('.navbar-brand')
const about=document.querySelectorAll('.card')
const addtxt = () => {
    element.textContent='Skontaktuj się!'
}
const movebtn = () => {
    element.classList.toggle('moveBtn')
}
const addtxt2 = () => {
    element2.textContent='Katalog'
    element2.classList.toggle('moveBtn')
    
}
const Animations = () => {
    if(window.scrollY<=0){
        logo.classList.toggle('animate__animated')
        logo.classList.toggle('animate__fadeIn')
    }
}
addtxt()
addtxt2()
element.addEventListener('mouseenter',movebtn)
element.addEventListener('mouseleave',movebtn)
element2.addEventListener('mouseenter',addtxt2)
element2.addEventListener('mouseleave',addtxt2)
logo.addEventListener('mouseenter',Animations)