

const item = document.querySelectorAll("[data-animate]")

const animationScroll = () => {
    const windowTop = window.pageYOffset +window.innerHeight * 0.78;

    item.forEach( element => {
        if (windowTop > element.offsetTop){
            element.classList.add("animate");
        }else{
            element.classList.remove("animate");
        }
    })

}

animationScroll()

window.addEventListener("scroll", ()=> {
    animationScroll()
})


// --------------------MENU MOBILE------------------------
let unChecked = document.querySelectorAll('.unchecked')



function switchStatus() {
    unChecked.classList.add('checked');
    unChecked.classList.remove('unchecked')
}