// Variabel
let musicPlayer = document.querySelector('.Music-Player');
let music = document.getElementById('music');
let conBtn = document.getElementById('conBtn');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let isplaying = false;
let counter = 0;

// Function
let setData = (counterNum) => {
    let album = document.getElementById('album');
    let musicName = document.getElementById('musicName');
    let artistName = document.getElementById('singerName');
    album.setAttribute('src',data[counterNum].songImgPath);
    album.setAttribute('title',data[counterNum].songName);
    album.setAttribute('alt',data[counterNum].songName);
    music.setAttribute('src',data[counterNum].songPath);
    musicName.innerText = data[counterNum].songName;
    artistName.innerText = data[counterNum].singerName;
    musicPlayer.classList.add('active');
    isplaying = true;
    console.log(isplaying);
    music.play();
}


let playMusic = () => {
    music.play();
    if(isplaying != true){
        music.play();
        musicPlayer.classList.add('active');
        isplaying = true;
    }
    else if(isplaying == true){
        music.pause();
        musicPlayer.classList.remove('active');
        isplaying = false;
    }
}


let nextMusic = () => {
    counter +=1;
    if(counter >= data.length){
        counter = 0;
    }
    setData(counter);
}

let prevMusic = () => {
    counter -=1;
    if(counter <= 0){
        counter = data.length-1;
    }
    setData(counter);
    console.log(counter);
}

// EventListner
conBtn.addEventListener('click', playMusic);
next.addEventListener('click', nextMusic);
prev.addEventListener('click', prevMusic);