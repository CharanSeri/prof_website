document.getElementById("cardsContainer").onmousemove = e => {
    for (const card of document.querySelectorAll(".card")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const certificateContainers = document.querySelectorAll('.certificateDivHidden');
certificateContainers.forEach((el) =>
    observer.observe(el)
)