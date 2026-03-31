// Generate stars
const starsContainer = document.getElementById('starsContainer');
if (starsContainer) {
    for(let i = 0; i < 180; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        let size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 5 + 's';
        star.style.animationDuration = Math.random() * 3 + 2 + 's';
        starsContainer.appendChild(star);
    }
    
    // shooting star occasionally
    setInterval(() => {
        let shooting = document.createElement('div');
        shooting.classList.add('shooting-star');
        shooting.style.top = Math.random() * 40 + '%';
        shooting.style.left = '-100px';
        starsContainer.appendChild(shooting);
        setTimeout(() => { if(shooting) shooting.remove(); }, 4000);
    }, 12000);
}

// create occasional sparkles on mouse move
function createSparkle(x, y) {
    let spark = document.createElement('div');
    spark.classList.add('sparkle');
    spark.style.left = x + 'px';
    spark.style.top = y + 'px';
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 1000);
}

document.addEventListener('mousemove', (e) => {
    if(Math.random() < 0.08) {
        createSparkle(e.clientX, e.clientY);
    }
});

// click sparkle shower
document.addEventListener('click', (e) => {
    for(let i = 0; i < 6; i++) {
        setTimeout(() => {
            createSparkle(e.clientX + (Math.random() - 0.5) * 30, e.clientY + (Math.random() - 0.5) * 30);
        }, i * 50);
    }
});
