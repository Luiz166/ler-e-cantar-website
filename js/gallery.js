const video = document.querySelectorAll('.galleryVideo');
const image = document.querySelectorAll('.galleryImg');

video.forEach(play => play.addEventListener('click', () =>{
    play.classList.toggle('active');

    if(play.classList.contains('active')){
        play.play();
    }
    else if(play.currentTime == play.duration){
        play.pause();
        play.currentTime = 0;
    }
    else{
        play.pause();
        play.currentTime = play.currentTime();
    }
}));

image.forEach(play => play.addEventListener('click', () =>{
    play.classList.toggle('active');
}));