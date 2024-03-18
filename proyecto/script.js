const timeline = document.querySelector('.timeline');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateTimeline();
});

nextButton.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, timeline.children.length - 1);
    updateTimeline();
});

function updateTimeline() {
    const offset = -(currentIndex * 100);
    timeline.style.transform = `translateX(${offset}%)`;
}
