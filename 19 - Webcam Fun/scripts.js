const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo(){
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(localMediaStream=>{
            console.log(localMediaStream);
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        })
        .catch(err =>{
            console.log(`Oh noo!`,err);
        })
}

function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.height = height;
    canvas.width = width;

    return setInterval(() => {
        ctx.drawImage(video,0,0,width,height);
        const pixels = ctx.getImageData(0,0,width,height);

        pixels =redEffect (pixels);
        ctx.putImageData(pixels,0,0);
    }, 16);

}

function takePhoto(){
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg'); 
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'nicePicture');
    link.textContent = 'Dowanload Image'; 
    link.innerHTML = `<img src="${data}" alt="nice picture"/>`
    strip.insertBefore(link, strip.firstChild); 
}

function redEffect(pixels){
    for(let i = 0; i < pixels.data.length; i+=4){
        pixels.data[i] = pixels.data[i]+ 100;
        pixels.data[i+1] = pixels.data[i+1] - 50;
        pixels.data[i+2] = pixels[i+2].data * 0.5; 
    }

    return pixels;
}

function rgbSplit(pixels){
    for(let i = 0; i < pixels.data.length; i+=4){
        pixels.data[i+150] = pixels.data[i]+ 100;
        pixels.data[i-150] = pixels.data[i+1] - 50;
        pixels.data[i+100 ] = pixels[i+2].data * 0.5; 
    }

    return pixels;
}

getVideo();
video.addEventListener('canplay',  paintToCanvas);