const video = document.querySelectorAll('.galleryVideo');
const image = document.querySelectorAll('.galleryImg');

video.forEach(play => play.addEventListener('click', () =>{
    play.classList.toggle('active');

    if(play.classList.contains('active')){
        play.play();
    }
    else if(play.currentTime == play.duration){ //isso vai pausar e voltar o video ao começo, quando ele ja estiver finalizado
        play.pause();
        play.currentTime = 0;
    }
    else{ //vai pausar o video no mesmo instante em que foi pausado
        play.pause();
        play.currentTime = play.currentTime();
    }
}));

image.forEach(play => play.addEventListener('click', () =>{
    play.classList.toggle('active');
}));