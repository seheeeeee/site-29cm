window.addEventListener('scroll',()=>{
    let scrollY = window.scrollY;
    let headWrap = document.querySelector('.headWrap');
    if(scrollY > 30){
        headWrap.classList.add('scrollActive');
    }else{
        headWrap.classList.remove('scrollActive');
    }
})