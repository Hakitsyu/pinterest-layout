const cardsElement = document.querySelector(".cards");
const cardsCount = 60;
const imagesFolder = "assets/images/";
const images = ["image_1.jpg", "image_2.jpg", "image_3.png", "image_4.jpg", "image_5.jpg", "image_6.jpg", "image_7.jpg", "image_8.jpg", "image_9.jpg", "image_10.png", "image_11.jpg", "image_12.jpg", "image_13.jpg"];

const createCard = (imgSrc) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const anchor = document.createElement("a");

    div.className = "card";
    img.src = imgSrc;
    anchor.className = "button";
    anchor.innerHTML = "Open";  
    anchor.href = imgSrc;

    div.appendChild(img);
    div.appendChild(anchor);
    return div;
}

for (let i = 0; i < cardsCount; i++) {
    const image = images[Math.floor(Math.random() * (images.length - 1))];
    cardsElement.appendChild(createCard(imagesFolder + image));
}