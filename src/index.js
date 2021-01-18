import './style.css'

document.onselectstart = () => { // cancel selecting of images
    return false; 
  };

const $items = document.getElementsByClassName("carousel__item")
const $buttonLeft = document.getElementById("button_left")
const $buttonRight = document.getElementById("button_right")
const $carousel = document.getElementsByClassName("carousel__center")

let activeIndex = 0


const addClass = (element, index) => element[index].classList.add("show")
const removeClass = (element, index) => {element[index].classList.remove("show")
}  
const decrement = () => { 
    if (activeIndex != 0) {
        removeClass($items, activeIndex)
        activeIndex -= 1
        addClass($items, activeIndex)
    } else {
        removeClass($items, activeIndex)
        activeIndex = $items.length - 1
        addClass($items, activeIndex)
    }
}

const increment = () =>  {
    if (activeIndex != $items.length - 1) {
        removeClass($items, activeIndex)
        activeIndex += 1
        addClass($items, activeIndex)
    } else {
        removeClass($items, activeIndex)
        activeIndex = 0
        addClass($items, activeIndex)
    }
}

const mouseMove = (event) => {
    const start = event.clientX

        $carousel[0].onmouseup = (event) => {
            const end = event.clientX
            
            if (start - (end + 40) > 0) {
                increment()
            } else if (end - (start - 40) > 0 && end - start > 2) {
                decrement()
            }
        }   
}



$buttonLeft.addEventListener('click', decrement)
$buttonRight.addEventListener('click', increment)
$carousel[0].addEventListener('mousedown', mouseMove)

// -------------------- mobile 

const touchMove = (event) => {
    const start = event.changedTouches[0].clientX

    $carousel[0].ontouchend = (event) => {
        const end = event.changedTouches[0].clientX

        if (start - (end + 40) > 0) {
            increment()
        } else if (end - (start - 40) > 0 && end - start > 2) {
            decrement()
        }
    }
}

$carousel[0].addEventListener('touchstart', touchMove)
