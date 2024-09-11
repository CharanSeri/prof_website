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

function handleCardClick(e) {
    redirectToGit(e.id)
}

function redirectToGit(e) {

    switch (e) {
        case "localWebiste":
            console.log("Local website")
            window.location.href="https://github.com/CharanSeri/slattRoofingwebsite"
            break;
        case "enerpikClient":
            console.log("Local enerpikClient")
            break;
        case "huluClone":
            console.log("Local huluClone")
            window.location.href="https://github.com/CharanSeri/hulu_Clone"
            break;
        case "spotifyClone":
            console.log("Local spotifyClone")
            window.location.href="https://github.com/CharanSeri/spotify-Clone"
            break;
        case "chromeExtension":
            console.log("Local chromeExtension")
            break;
        case "giftIdea":
            console.log("Local giftIdea")
            window.location.href="https://github.com/CharanSeri/Fire-Giftr";
            break;
        case "towerDefence":
            console.log("Local towerDefence")
            window.location.href="https://github.com/CharanSeri/tower-Defence"
            break;
        default:
            "No link"
    }

}

const cards = document.querySelectorAll(".card")
cards.forEach((el) => el.addEventListener("click", () => handleCardClick(el)))
