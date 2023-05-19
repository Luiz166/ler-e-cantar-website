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
        
    }
})
    

goTopBtn.addEventListener('click', () => {
    fullpage_api.moveTo('s1', 1);
})

new fullpage('#fullpage', {
    //options here
    paddingTop: '12rem',
    anchors: ['s1', 's2', 's3', 's4', 's5'],
    onLeave: function(origin, destination, direction, trigger){
        if(origin.index == 0 && direction =='down'){
            goTopBtn.style.display = 'block';
        }

        else if(destination.index == 0){
            goTopBtn.style.display = 'none';
        }
    }
});

addEventListener('click', '#cardPoema', function(){
    
  });