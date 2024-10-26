const section = document.querySelectorAll('section')
const txtbox = document.querySelectorAll('.box')
const ul=document.querySelector('ul')
const li = document.querySelectorAll('ul>li')
const line = document.querySelectorAll('ul>li>div')
// console.log(line);
 let st = window.scrollY

window.addEventListener('scroll', ()=>{
    let st = window.scrollY
    console.log(st);
    if(st > 400&& st < 1000){
        txtbox[0].classList.add('left')
    }else if(st >1050 && st<1650){
        txtbox[1].classList.add('left')
    }else if(st >1650 && st<2050){
        txtbox[2].classList.add('left')
    }else if(st >2050 && st<2650){
        txtbox[3].classList.add('left')
    }

    if(st>590){
        ul.classList.add('ul')
    }else{
        ul.classList.remove('ul')
    }

})