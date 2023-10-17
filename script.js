var typed = new Typed(".multiple-text", {
    strings: ["Geography Teacher", "Gamer", "Muslim", "Bingung ngisi apa lagi"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 0,
    loop: true,
});

const mainContainer = document.querySelector(".main-container");
    imagePreviews = mainContainer.querySelectorAll(".image-preview");
    images = mainContainer.querySelectorAll(".image-preview img");
    videos = mainContainer.querySelectorAll("video");

window.onload = () => {
    mainContainer.onmouseenter = () => {
        images.forEach((image) => {
            image.style.opacity = 0.5;
        });
    };

    mainContainer.onmouseleave = () => {
        images.forEach((image) => {
            image.style.opacity = 1;
        });
    };
    document.addEventListener("DOMContentLoaded", function() {
        let tl = gsap.timeline();
        // ... kode lainnya
    });
    

    tl.to(imagePreviews, {
        duration: 1,
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
        stagger: 0.1,
    });

    imagePreviews.forEach((image, index) => {
        image.onmouseenter = () => {
            videos[index].style.display = "block";
            videos[index].play();
        };
        image.onmouseleave = () => {
            videos[index].pause();
        };
    });
};
