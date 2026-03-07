// typewriter effect --------------------------------------------------
const typeWriterWords = [
    "I'm a Front-end UI Designer",
    "I'm a Web Developer",
    "I create Discord Bots",
];
let twWordIndex = 0;
let twCharIndex = 0;
const typingSpan = document.querySelector('.typing-text span');

function typeNext() {
    if (twCharIndex < typeWriterWords[twWordIndex].length) {
        typingSpan.textContent += typeWriterWords[twWordIndex].charAt(twCharIndex);
        twCharIndex++;
        setTimeout(typeNext, 150);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (twCharIndex > 0) {
        typingSpan.textContent = typeWriterWords[twWordIndex].substring(0, twCharIndex-1);
        twCharIndex--;
        setTimeout(eraseText, 100);
    } else {
        twWordIndex = (twWordIndex + 1) % typeWriterWords.length;
        setTimeout(typeNext, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeNext();
});
