let element=document.querySelector('.contactBtn')
let element2=document.querySelector('.pricing-btn')
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
addtxt()
addtxt2()
element.addEventListener('mouseenter',movebtn)
element.addEventListener('mouseleave',movebtn)
element2.addEventListener('mouseenter',addtxt2)
element2.addEventListener('mouseleave',addtxt2)