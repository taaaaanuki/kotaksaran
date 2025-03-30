const text = "Smaration";
const titleElement = document.querySelector(".judul");
let index = 0;

function type() {
    if (index < text.length) {
        titleElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 150); // Adjust typing speed here for smoother effect
    }
}

type();
