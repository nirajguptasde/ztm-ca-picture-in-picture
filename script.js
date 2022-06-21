const videoElement = document.getElementById('video');
const button = document.getElementById('button');



// prompt to select the media stream

async function selectMediaStream(){
  try {
    // do this 
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (err) {
    console.log('Woops, error here:', err);
  }
}  

button.addEventListener('click', async () => {
  // disable the button
  button.disabled = true;
  // start pINp
  await videoElement.requestPictureInPicture();
  // reset button 
  button.disabled = false;
});

//On load
selectMediaStream();