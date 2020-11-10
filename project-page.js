window.onload = main;

/** Functions to be initiated on window load */
function main() {
    addEventListeners();
    declareLoadAnimationElements();
}

function addEventListeners() {
    window.addEventListener("scroll", declareLoadAnimationElements)
}

function declareLoadAnimationElements() {
    const projectIntroText = document.querySelector(".project-intro-text");
    initiateLoadAnimation(projectIntroText);
    const projectIntroImage = document.querySelector(".project-intro-image");
    initiateLoadAnimation(projectIntroImage);
    
    const projectImages = document.querySelectorAll(".image-container img")
    for (i = 0; i < projectImages.length; i++) {
        initiateLoadAnimation(projectImages[i]);
        console.log(projectImages[i].offsetTop)
    }
}

function initiateLoadAnimation(element) {
    const viewportHeight = Number(window.pageYOffset) + Number(window.innerHeight);
    console.log(element)

    if (element.offsetTop <= viewportHeight) {
        element.style.opacity = "1";
        element.style.margin = "1.5rem 0";
    }
}