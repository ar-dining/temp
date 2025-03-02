// Start the live camera feed (rear camera)
const video = document.getElementById('video');
navigator.mediaDevices.getUserMedia({
  video: { facingMode: 'environment' },
  audio: false
})
.then(stream => {
  video.srcObject = stream;
})
.catch(error => {
  console.error('Error accessing the camera:', error);
});