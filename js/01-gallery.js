import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');
console.log('🚀 ~ galleryBox', galleryBox);

galleryBox.addEventListener('click', onImgClick);

function makeGalleryMarkup(element) {
  const markup = element
    .map(({ preview, original, description }) => {
      return /*html*/ `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
    </a>
    </div>`;
    })
    .join('');

  galleryBox.insertAdjacentHTML('beforeend', markup);
}

makeGalleryMarkup(galleryItems);
