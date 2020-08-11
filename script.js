const shareBtn = document.getElementById("share");
const bubble = document.getElementById("bubble");
const shareSvg = document.getElementById("share-svg");

shareBtn.addEventListener("click", () => {
  shareBtn.classList.toggle("show");
  shareSvg.classList.toggle("show");
  bubble.classList.toggle("show");
});
