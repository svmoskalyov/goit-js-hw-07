import { galleryItems } from './gallery-items.js';

const galleryBox = document.querySelector('.gallery');

makeGalleryMarkup(galleryItems);

function makeGalleryMarkup(element) {
  const markup = element
    .map(({ preview, original, description }) => {
      return /*html*/ `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}">
    </a>`;
    })
    .join('');

  galleryBox.insertAdjacentHTML('beforeend', markup);
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
