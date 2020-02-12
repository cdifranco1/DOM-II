// Your code goes here


//Event handlers
function skewElement(e){
  e.target.style = `transform: skewX(-50deg);
                    transition: transform 1s;`;
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
let bus = document.querySelector('.intro img')
let images = document.querySelectorAll('img')
let body = document.querySelector('body')
let navLinks = document.querySelectorAll(".nav-link")
let logo = document.querySelector(".logo-heading")
let midImages = document.querySelectorAll(".content-section img")
let paragraphs = document.querySelectorAll("p")




//Event listeners
logo.addEventListener("mouseover", skewElement)

bus.addEventListener("dblclick", zoom)

body.addEventListener("keydown", rotateImg)

window.addEventListener('resize', () => changeBg(document.querySelector('.home'), 'pink'))

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    changeBg(button, 'red')
  })
})

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
      link.style.transform = 'translate(20px, 20px)'
      link.style.transition = 'transform 1s'
  })
})

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
      link.style.transform = 'translate(0)'
  })
})

window.addEventListener("scroll", () => {
  images.forEach((item) => {
    item.style.opacity = '1.0';
    item.style.transition = 'opacity 1s';
  })
}, {once: true});


midImages.forEach((img) => img.addEventListener("click", () => {
  img.style.transform = "translate(-30px)"
  img.style.transition = "transform 1s"
}))


window.addEventListener("load", () => {
  images.forEach((item) => {
    item.style.opacity = '.2';
  }) 
})

body.addEventListener("keydown", (e) => {
  paragraphs.forEach((p) => {
    if (e.keyCode == 85){
      p.style.fontVariant = 'small-caps';
    }
  })
});

//Stop propagation

let introP = document.querySelector('.intro p')
let intro = document.querySelector('.intro')
introP.addEventListener("click", (e) => {
  changeBg(introP, 'red')
  e.stopPropagation();
})
intro.addEventListener("click", () => changeBg(intro, 'orange'))

//Prevent default

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  })
});