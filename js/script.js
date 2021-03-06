const burgerMenu = document.querySelector(".header__btn")
const menuList = document.querySelector(".mobileList")


burgerMenu.addEventListener('click', (e)=>{
   e.preventDefault()
   menuList.classList.toggle('active')

})