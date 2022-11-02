import { galleryItems } from "./gallery-items.js";
import * as basicLightbox from "../node_modules/basiclightbox/src/scripts/main.js";
// Change code below this line

// Defining DOM elements

const gallery = document.querySelector(".gallery");

// creating gallery items and images
function createGallery() {
  for (const image in galleryItems) {
    // creating gallery elements
    const photo = document.createElement("img");
    const photoContainer = document.createElement("div");
    photoContainer.classList.add("gallery__item");

    // appending galleryItem to gallery and galleryImage to galleryItem
    gallery.appendChild(photoContainer);
    photoContainer.appendChild(photo);

    // setting classes and attributes to each photo
    photo.classList.add("gallery__image");
    photo.setAttribute(`src`, `${galleryItems[image].preview}`);
    photo.setAttribute("alt", `${galleryItems[image].description}`);
  }
}

// calling functions
createGallery();

// calling modal with original image's size
gallery.addEventListener(`click`, (event) => {
  if (event.target.tagName.toLowerCase() !== "img") {
    return;
  }
  console.log(event.target);
  const instance = basicLightbox.create(`
    <img src="https://pbs.twimg.com/media/FHvTRyeWUAI93hG.jpg" width="800" height="600">
`);

  instance.show();
});

console.log(galleryItems);
console.log(galleryItems.length);
