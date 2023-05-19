const goTopBtn = document.querySelector('#goTopBtn');
cardPoema = document.querySelector('#cardPoema');
cardMusica = document.querySelector('#cardMusica');
cardDanca = document.querySelector('#cardDanca');
cardTeatro = document.querySelector('#cardTeatro');


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
    fullpage_api.moveTo('s1', 1);
})

new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    paddingTop: '12rem',
    anchors: ['s1', 's2', 's3', 's4', 's5']
});

addEventListener('click', '#cardPoema', function(){
    
  });