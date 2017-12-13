window.onscroll = function() {
  let scroll = document.body.scrollTop;
  document.body.style.backgroundPosition = "0 " + (-scroll/5) + "%";
}