// Check for browser compatibility
if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    document.getElementById("compatibility-warning").style.display = "block";
  }
  
  // Toggle video play/pause
  function toggleVideo() {
    const video = document.getElementById("ar-video");
    if (video.getAttribute("autoplay")) {
      video.removeAttribute("autoplay");
      video.pause();
      document.querySelector("a-text").setAttribute("value", "Play");
    } else {
      video.setAttribute("autoplay", true);
      video.play();
      document.querySelector("a-text").setAttribute("value", "Pause");
    }
  }