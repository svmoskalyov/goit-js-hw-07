import { galleryItems } from './gallery-items.js';

const galleryBox = document.querySelector('.gallery');

galleryBox.addEventListener('click', onImgClick);

makeGalleryMarkup(galleryItems);

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

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const imgLargeLink = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imgLargeLink}">
  `);
  instance.show();

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}
