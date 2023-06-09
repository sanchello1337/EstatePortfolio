const viewport_width =Math.max(document.documentElement.clientWidth, window.innerWidth ||0);
document.querySelectorAll('.footer__item-title').forEach((el)=>{
    el.addEventListener('click',()=>{
        if(viewport_width < 767){
            let content = el.nextElementSibling
            if (content.style.maxHeight){
                document.querySelectorAll('.footer__links').forEach((el)=> el.style.maxHeight=null)
            }
            else{
                document.querySelectorAll('.footer__links').forEach((el)=> el.style.maxHeight=null)
                content.style.maxHeight= content.scrollHeight + 'px'
            }
        }
    })
})