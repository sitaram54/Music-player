window.onload = (e) => {

  let fl = document.getElementById('files')
  var audio = document.getElementById('audio');
  var progress = document.getElementById('progress');
  var img = document.getElementById('imgs');
  var img2 = document.getElementById('song_img');
  var home = document.getElementById('home')
  
  
  audio.src = '/Rawat/0.mp3';

  // let currenttime = document.getElementsByClassName('currenttime');
  // var tm = document.getElementById('tracktime')

  // var toteltime = document.getElementsByClassName('toteltime');

  let times_and_bar = document.getElementById('times_and_bar');


  let ctime = document.getElementById('ctime');
  let dtime = document.getElementById('dtime')
  var playbtn = document.getElementById('playbtn');
  var nextbtn = document.getElementById('nextbtn');
  var backbtn = document.getElementById('backbtn');
  let titels = document.getElementById('titels');






  var songindex = 0;
  var songs = [
    { name: "1", },
    { name: "2", },
    { name: "3", },
    { name: "4", },
    { name: "5", },
    { name: "6", },
    { name: "7", },
    { name: "8", },
    { name: "9", },
    { name: "10", },
    { name: "11", },
    { name: "12", },
    { name: "13", },
    { name: "14", },
    { name: "15", },
    { name: "16", },
    { name: "17", },
    { name: "18", },
    { name: "19", },
    { name: "20", },
    { name: "21", },
    { name: "22", },
    { name: "23", },
    { name: "24", },
    { name: "25", },
    { name: "26", },
    { name: "27", },
    { name: "28", },
    { name: "29", },
    { name: "30", },


 ]

  var isplaying = false;
  var audioplay = () => {
    isplaying = true;
    audio.play();

  }
  var audiopause = () => {
    isplaying = false;
    audio.pause();
  }
  playbtn.addEventListener('click', () => {
    if (isplaying) {
      playbtn.style.backgroundImage = 'url(1.png)'
      img.removeAttribute('class')
      audiopause()
    } else {
      playbtn.style.backgroundImage = 'url(2.png)'
      img.setAttribute('class', 'imgs')
      audioplay()
    }
  })

  var Loadsong = (songs) => {
    audio.src = "/Rawat/" + songindex + ".mp3";
    let titel = songindex + '.Mp3';
    titels.textContent = titel;


  }
  var nextsong = () => {

    songindex = (songindex + 1) % songs.length;
    Loadsong(songs[songindex]);
    audioplay();
  }
  nextbtn.addEventListener('click', nextsong);

  var backsong = () => {

    songindex = (songindex - 1 + songs.length) % songs.length;
    Loadsong(songs[songindex]);
    audioplay();
  }
  backbtn.addEventListener('click', backsong)


  audio.addEventListener('timeupdate', (event) => {
    const { currentTime, duration } = event.srcElement;

    let progress_bar = (currentTime / duration) * 100;
    progress.style.width = progress_bar + '%';


    //     volumeControl.max =  duration *100 /duration ;
    // volumeControl.value = progress_bar;


    let cm_timr = Math.floor(currentTime / 60);
    let cs_timr = Math.floor(currentTime % 60);
    if (cs_timr < 10) {
      cs_timr = '0' + cs_timr;
      // console.log(cs_timr)
    }


    let ctimes = cm_timr + ':' + cs_timr;



    let dm_timr = Math.floor(duration / 60);
    let ds_timr = Math.floor(duration % 60);
    if (duration) {
      var dtimes = dm_timr + ':' + ds_timr;
    }
    dtime.textContent = dtimes;
    ctime.textContent = ctimes;

  });

  times_and_bar.addEventListener('click', (event) => {

    const { duration } = audio

    let progress = (event.offsetX / event.srcElement.clientWidth) * duration;
    audio.currentTime = progress;
    console.log(e);
  })









  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  const cv = document.querySelector('canvas')
  const atx = new window.AudioContext();
  const ctx = cv.getContext('2d');

  // play btn in cod 

  const analyser = atx.createAnalyser();
  const source = atx.createMediaElementSource(audio);
  cv.height = window.innerHeight;
  cv.width = window.innerWidth;
  source.connect(analyser);
  source.connect(atx.destination);
  analyser.fftSize = 512;
  const bufferLength = analyser.frequencyBinCount;
  let dataArray = new Uint8Array(bufferLength);
  const bw = cv.width / bufferLength;
  let bh;
  let x;
  let s;

  function animaye() {
    s=0;
    x = 0;
    ctx.clearRect(0, 0, cv.width, cv.height);

    analyser.getByteFrequencyData(dataArray)
    requestAnimationFrame(animaye)
    for (var i = 0; i < bufferLength; i++) {
      bh = dataArray[i];
      s= i*i++;
      var sx = 20;
      var sx = 20;
      const red = i * bufferLength / i*s;
      const green = i * 2 + frameElement *s;
      const blue = i / 2 + 7;
      const cl = 'rgb(' + red + ',' + green + ',' + blue + ')';
      
      ctx.save();
      ctx.translate(150 , 150)
      ctx.rotate(i *4*3 / bufferLength *i)
      ctx.fillStyle = cl;
      ctx.fillRect(10, 50, bw, bh)
      // ctx.fillRect(90, 120, bw , -bh)
      ctx.fill();
      ctx.restore();
      
      const c2 = 'rgb(' + red*i + ',' + green+55+i + ',' + blue+bufferLength + ')';
      ctx.save();
      ctx.translate(150 , 150)
      ctx.rotate(i *4*3 / bufferLength *s+i++)
      ctx.fillStyle = c2;
      ctx.fillRect(10, 10, -bw, -bh)
      // ctx.fillRect(90, 120, bw , -bh)
      ctx.fill();
      ctx.restore();
      

      x += bw;
      
console.log(audio.volume)
    

}

}

  animaye();







  //   times_and_bar.addEventListener('touchmove', (event) => {

  //         event.preventDefault()
  //         let touch = event.changedTouches[0];
  //         let touchX = parseInt(touch.clientX);
  //         let touchY = parseInt(touch.clientY);

  //   const { duration } = audio

  //   let progress = ( touchX /  times_and_bar.offsetLeft /event.srcElement.clientWidth*15 ) * duration /2   ;
  //   audio.currentTime = progress;
  // })

}




