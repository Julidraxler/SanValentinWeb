document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("message").innerText = "¡Sabía que dirías que sí! 💖";
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.top = Math.random() * window.innerHeight + "px";
    this.style.left = Math.random() * window.innerWidth + "px";
});
