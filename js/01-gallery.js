import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Defining DOM elements
const gallery = document.querySelector(".gallery");

// creating gallery items and images
function createGallery() {
  for (const image in galleryItems) {
    // creating gallery elements
    const galleryItem = document.createElement("div");
    const galleryLink = document.createElement("a");
    const galleryImage = document.createElement("img");

    galleryItem.classList.add("gallery__item");

    // creating gallery items relations
    gallery.appendChild(galleryItem);
    galleryItem.appendChild(galleryLink);
    galleryLink.appendChild(galleryImage);

    // setting classes and attributes to each photo
    galleryItem.classList.add("gallery__item");

    galleryLink.classList.add("gallery__link");
    //galleryLink.setAttribute(`href`, `${galleryItems[image].original}`);

    galleryImage.classList.add(`gallery__image`);
    galleryImage.setAttribute(`src`, `${galleryItems[image].preview}`);
    galleryImage.setAttribute(`data-source`, `${galleryItems[image].original}`);
    galleryImage.setAttribute(`alt`, `${galleryItems[image].description}`);
  }
}

// calling functions
createGallery();

// create modal window with basicLightBox
var instance = basicLightbox.create(`<img src="null">`);

// calling modal with original image's size
gallery.addEventListener(`click`, (event) => {
  if (event.target.tagName.toLowerCase() !== "img") {
    return;
  }
  let targetImage = event.target.getAttribute("data-source");

  instance = basicLightbox.create(`<img src="${targetImage}">`);
  // show modal
  instance.show();
});

// closing gallery with "Esc" key
document.addEventListener("keydown", (event) => {
  if (event.code == "Escape" && instance.visible()) {
    instance.close();
  }
});
