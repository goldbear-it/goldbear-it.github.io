function createStar() {
    const space = document.getElementById('space');
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * window.innerHeight}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.animation = `moveStar ${Math.random() * 5 + 5}s linear infinite`;
    space.appendChild(star);

    setTimeout(() => star.remove(), 5000);
}

function initStars() {
    for (let i = 0; i < 100; i++) {
        createStar();
    }

    setInterval(createStar, 100);
}

document.addEventListener('DOMContentLoaded', initStars);

// Add keyframes for animation in style element
const styleEl = document.createElement('style');
document.head.appendChild(styleEl);
styleEl.sheet.insertRule(`
@keyframes moveStar {
    0% {
        transform: translateX(0px);
        opacity: 1;
    }
    100% {
        transform: translateX(${window.innerWidth}px) scale(2);
        opacity: 0;
    }
}`, 0);
