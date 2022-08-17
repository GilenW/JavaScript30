//get our element
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


//build out functions

function togglePlay(){
	//another way to write this function
	// const method = video.paused ? 'play' : 'pause';
	// video[method]();
	if(video.paused){
		video.play();
	}
	else{
		video.pause();
	}
}

function updateButton(){
	const icon = this.paused ? '▶️' : '⏯';
	toggle.textContent = icon;
}

function skip(){
	console.log(this.dataset);
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
	video[this.name] = this.value;
	console.log(this.name);
	console.log(this.value);
}

function handleProgress(){
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
	//console.log(this);
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
	//console.log(e)
}
//hook up the event listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(item => {
	item.addEventListener('click', skip);
})
ranges.forEach(element => {
	element.addEventListener('change', handleRangeUpdate);
})
ranges.forEach(element => {
	element.addEventListener('mousemove', handleRangeUpdate);
})

let mousedown = false;
progress.addEventListener('click', scrub);

//another way to write this 
//progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousemove', () => {
	if(mousedown){
		scrub();
	}
});
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


