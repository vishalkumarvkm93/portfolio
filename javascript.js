document.addEventListener("DOMContentLoaded", function() {
const btns = document.getElementsByClassName("link")
const activeBox = document.querySelector(".active-box")
activeBox.style.width = window.getComputedStyle(btns[0]).width
Array.from(btns).forEach((element, index) => {
    console.log(element.style.width)
    element.addEventListener('click', ()=>{
        
        Array.from(btns).forEach((element) => {
            element.classList.remove('active')
        })
        activeBox.style.width = window.getComputedStyle(element).width
        console.log(parseInt(window.getComputedStyle(element).width))
        element.classList.add('active')
        const leftPositionValue = index * parseInt(window.getComputedStyle(element).width)
        activeBox.style.left = leftPositionValue+"px"

    })
});
});
