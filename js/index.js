// Your code goes here


//Event handlers
function skewElement(e){
  e.target.style = `transform: skewX(-25deg);
                    transition: transform 2s;`;
  setTimeout(() => e.target.style.transform = 'none', 1000)
};

function zoom(e){
  e.target.style = `transform: scale(1.2);
                    transition: transform 1s;`
  setTimeout(() => e.target.style.transform = 'none', 1000)
};

function rotateImg(e){
  console.log(e.keyCode)
  if (e.keyCode == 13){
    images.forEach((item) => {
      if (item.style.transform == 'rotate(180deg)'){
        item.style.transform = 'rotate(0deg)'
      } else {
        item.style.transition = 'transform 1s'
        item.style.transform = 'rotate(180deg)'
      }
    })
  }
};

function changeBg(element, color){
  element.style.backgroundColor = color;
};


//Element selectors
let buttons = document.querySelectorAll('.btn');
let funBus = document.querySelector('.intro img')
let images = document.querySelectorAll('img')
let body = document.querySelector('body')
let navLinks = document.querySelectorAll(".nav-link")



//Event listeners
funBus.addEventListener("mouseover", skewElement)

images.forEach((a) => a.addEventListener("dblclick", zoom))

body.addEventListener("keydown", rotateImg)

window.addEventListener('resize', () => changeBg(document.querySelector('.home'), 'pink'))

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", () => {
    changeBg(button, 'red')
  })
})

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
      console.log(link.style)
      link.style.transform = 'translate(20px, 20px)'
      link.style.transition = 'transform 1s'
  })
})

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
      console.log(link.style)
      link.style.transform = 'translate(0)'
  })
})

window.addEventListener("scroll", () => {
  console.log('scroll')
  body.style.backgroundColor = "yellow";
}, {once: true});




