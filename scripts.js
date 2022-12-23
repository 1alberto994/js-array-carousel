const img=["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"];
const carosello=document.querySelector(".carousel");
let current=0;
for(let i =0;i<img.length;i++){
    carosello.innerHTML+=`div class= "slide"> img src="${img[i]}" > </div>`;
}
const slides=document.querySelectorAll("current")
const preArrow=document.querySelector(".left")
const arrow=document.querySelector(".right")
const nextArrow=addEventListener('click',
    function(){
        slides[current].classList.remove('.current')
        current=currentPlus +1
        slides(current).classList.add('.current')
    }
)