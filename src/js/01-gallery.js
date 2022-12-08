// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

function createMarkupGallery (arr) {
    return arr
    .map(({preview, original, description}) => {
    return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    })
    .join("");
}; 

const marcupGalleryItems = createMarkupGallery(galleryItems);
galleryEl.innerHTML = marcupGalleryItems;

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

console.log(galleryItems);
