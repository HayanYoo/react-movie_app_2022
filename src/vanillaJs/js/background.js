const images = [
    "autumn-landscape-mountains-nature-lake-hd-wallpaper-preview.jpg",
    "flower-summer-flowering-shrub-hibiscus-hd-wallpaper-preview.jpg",
    "sea-reflection-boat-yacht-iceberg-hd-wallpaper-preview.jpg",
    "tonton-revolver-artwork-hd-wallpaper-preview.jpg",
    "white-the-sky-asphalt-clouds-snow-hd-wallpaper-preview.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);