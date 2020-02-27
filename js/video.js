var vid;
var volume;
var volslide;
var ingray = false;



function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play()
	console.log("Playing Video");
	volume = document.querySelector('#volume')
	volume.innerHTML = video.volume * 100 + '%';
} 

function pauseVid() { 
	video.pause()
	console.log("Pausing Video");
} 

function decreaseSpeed() { 
	video.playbackRate -= (video.playbackRate * .2)
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate += (video.playbackRate * .25)
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if (video.currentTime < video.duration - 60) {
		video.currentTime = video.currentTime + 60;
	}
	else if (video.currentTime > video.duration - 60) {
		video.currentTime = 0;
		video.playbackRate = 1;
		video.play();
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
	if (video.muted==true) {
		video.muted = false;
		console.log("Unmuted");
		let bttn = document.querySelector('#mute')
		bttn.innerHTML = 'Mute'
	
	} else if  (video.muted==false) {
		video.muted = true;
		console.log("Muted");
		let bttn = document.querySelector('#mute')
		bttn.innerHTML = 'Unmute'
		
	}
}

function changeVolume() {
	volslide = document.querySelector('#volumeSlider')
	video.volume = volslide.value / 100;
	console.log("Volume is " + video.volume * 100);
	volume = document.querySelector('#volume')
	volume.innerHTML = video.volume * 100 + '%';
}
       

function gray() { 
	document.querySelector('#myVideo').classList.toggle('grayscale')
	ingray = true;
	console.log("In grayscale")
}

function color() {
	if (ingray=true) {
		document.querySelector('#myVideo').classList.toggle('grayscale')
		ingray=false;
	}
	else if (ingray=false) {
		console.log('already in color!')
	}
}



