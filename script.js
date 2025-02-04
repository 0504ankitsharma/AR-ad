function toggleVideo() {
    const video = document.getElementById("ar-video");
    if (video.getAttribute("autoplay")) {
      video.removeAttribute("autoplay");
      video.pause();
    } else {
      video.setAttribute("autoplay", true);
      video.play();
    }
  }