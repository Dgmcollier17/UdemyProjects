const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt the user to select media stream. Pass to video element & play.
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
    console.log("whoops, error here:", error);
  }
}

button.addEventListener("click", async () => {
  // Disable button
  button.disabled = true;
  // start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled - false;
});
// ON Load
selectMediaStream();
