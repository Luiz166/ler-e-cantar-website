const goTopBtn = document.querySelector('#goTopBtn');


//hiding button
window.addEventListener('scroll', () =>{
    if(window.scrollY < 600){
        goTopBtn.style.display = 'none';
    }
    else{
        goTopBtn.style.display = 'block';
    }
})
    


goTopBtn.addEventListener('click', () => {
    goTop();
})

const goTop = () => {
    if(window.scrollY >= 600){
        window.scrollTo({top: 0});
    }
}

new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    paddingTop: '12rem',
});