var audio = document.getElementById('audio');
var times_and_bar = document.getElementsByClassName('times_and_bar');
var currenttime = document.getElementsByClassName('currenttime');
var toteltime = document.getElementsByClassName('toteltime');
var playbtn = document.getElementById('playbtn');
var nextbtn = document.getElementById('nextbtn');
var backbtn = document.getElementById('backbtn');
var songindex = 0;
var songs = [
 { name: "1", },
 { name:"2" ,},
 { name:"3" ,},
 { name:"4" ,},
 { name:"5" ,},
 { name:"6" ,},
 { name:"7" ,},
 { name :"8", },
 { name :"9", },
 { name :"10", },
 { name :"11", },
 { name :"12", },
 { name :"13", },
 { name :"14", },
 { name :"15", },
 { name :"16", },
 { name: "17" ,},
 { name :"18" ,},
 { name :"19" ,},
 { name :"20" ,},
 { name :"21" ,},
 { name :"22" ,},
 { name :"23" ,},
 { name :"24" ,},
 { name :"25" ,},
 { name :"26" ,},
 { name :"27" ,},
 { name :"28" ,},
 { name :"29" ,},
 { name :"30" ,},

 
 ]
 
var isplaying = false;
var audioplay = ()=>{
 isplaying =true;
 audio.play();

}
var audiopause = () => {
 isplaying = false;
 audio.pause();
}
playbtn.addEventListener('click' , () =>{
 if (isplaying){
 audiopause()
 }else{
  audioplay()
 }
} )

var Loadsong = (songs)=>{
  audio.src = "Song/"+songindex+".mp3";
     

 }
  var nextsong  = () => {
   
   songindex = (songindex+1) %  songs.length;
   Loadsong(songs[songindex]);
   audioplay();
  }
 nextbtn.addEventListener('click', nextsong );
 
var backsong  = () => {
   
   songindex = (songindex-1+songs.length) % songs.length;
   Loadsong(songs[songindex]);
   audioplay();
  }
 backbtn.addEventListener('click', backsong )
audio.addEventListener('timeupdate', (event) =>{
const {currentTime,duration } = event.srcElement;
console.log(currentTime)
currenttime.innerText = "currentTime"; 
 
});