const burgerMenu = document.querySelector(".header__btn")
const menuList = document.querySelector(".mobileList")

if(burgerMenu)burgerMenu.addEventListener('click', (e)=>{
   e.preventDefault()
   menuList.classList.toggle('active')
})

document.addEventListener('mousedown', function(e){
   if(e.target.closest('.mobileList') === null && e.target.closest('.header__btn') === null ){
      menuList.classList.remove('active')
   }
});

const viewMore = document.querySelectorAll(".view__more, .products")
const popupClose = document.querySelector(".popup__close")
const popup = document.querySelector(".popup")
const body = document.querySelector("body")

if(viewMore)viewMore.forEach((view)=>{
   view.addEventListener('click', (e)=>{
      e.preventDefault()
      popup.classList.add('active')
      body.classList.add('lock')
   }) 
})

if(popupClose)popupClose.addEventListener('click', (e)=>{
   e.preventDefault()
   popup.classList.remove('active')
   body.classList.remove('lock')
})

document.addEventListener('mousedown', function(e){
    if(e.target.closest('.popup') === null){
      popup.classList.remove('active')
      body.classList.remove('lock')
    }
});