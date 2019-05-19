

var songs = ["./mp3/theysaid.mp3","./mp3/gene.mp3"];

var cover = ["./img/cover1.jpg","./img/next_cover1.jpg"]

var currentSong = 0;

var song = new Audio();

// auto playy 

window.onload = playSong();

function playSong() {

     song.src = songs[currentSong];
     song.play();
     
}

function playOrPauseSong(){

     if(song.paused) {

          song.play();
          $("#play ion-icon").attr("name","pause");

     }
     else{
          
          song.pause();
          $("#play ion-icon").attr("name","play");
     
     }
}



// next button 


function next(){

     currentSong++;
     if (currentSong >= 2 ) {
          currentSong = 0;
     }
     playSong();

     $("#play ion-icon").attr("name", "pause");

     


}





