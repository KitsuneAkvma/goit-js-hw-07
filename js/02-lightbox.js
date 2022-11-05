import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Defining DOM elements

const gallery = document.querySelector(".gallery");

// creating gallery items and images
function createGallery() {
  for (const image in galleryItems) {
    // creating gallery elements
    const photo = document.createElement("img");
    const photoContainer = document.createElement("li");
    const galleryItem = document.createElement("a");

    galleryItem.classList.add("gallery__item");

    // appending galleryItem to gallery and galleryImage to galleryItem
    gallery.appendChild(photoContainer);
    photoContainer.appendChild(galleryItem);
    galleryItem.appendChild(photo);

    // setting classes and attributes to each photo
    photo.classList.add("gallery__image");
    photo.setAttribute(`src`, `${galleryItems[image].preview}`);
    photo.setAttribute("alt", `${galleryItems[image].description}`);
    galleryItem.setAttribute(`href`, `${galleryItems[image].original}`);
  }
}

// calling functions
createGallery();

// calling modal with original image's size
gallery.addEventListener(`click`, (event) => {
  if (event.target.tagName.toLowerCase() !== "img") {
    return;
  }
  const imageSrc = event.target.child.getAttribute("src"); // get image src
  // find object in 'galleryItems' array by preview's src, then get that object's 'original' value
  const originalImage = event.target.getAttribute("href");

  // create modal window with basicLightBox
  var lightbox = new SimpleLightbox(event.currentTarget, {});
  // show modal
  lightbox.show();
});

console.log(galleryItems);
