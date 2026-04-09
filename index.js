let bulb = document.getElementById("bulb");
let status = document.getElementById("status");
let powerOn = false;
let currentColor = "yellow"; // default color

function togglePower() {
    powerOn = !powerOn;

    if (powerOn) {
        status.textContent = "POWER ON";
        bulb.className = `bulb ${currentColor} on`; // fade in & glow
    } else {
        status.textContent = "POWER OFF";
        bulb.className = "bulb"; // fade out
    }
}

function setColor(color) {
    if (!powerOn) return; // ignore if off
    currentColor = color;

    // Add flicker effect on color change
    bulb.classList.remove("on");
    setTimeout(() => {
        bulb.className = `bulb ${color} on`; // fade in new color
    }, 100); // short delay to simulate flicker
}
