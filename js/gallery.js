const video = document.querySelectorAll('.galleryVideo');
const image = document.querySelectorAll('.galleryImg');

video.forEach(play => play.addEventListener('click', () =>{
    play.classList.toggle('active');

    if(play.paused){
        play.play();
    }else{
        play.pause();
        play.currentTime = 0;
    }
}));

image.forEach(play => play.addEventListener('click', () =>{
    play.classList.toggle('active');
}));