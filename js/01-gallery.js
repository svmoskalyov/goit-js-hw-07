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


function onImgClick(event) {
    event.preventDefault();
    // console.log(event.target.closest('.gallery__link'));
    // console.log(event.target);
    const imgLargeLink = event.target.dataset.source;
    console.log("🚀 ~ onImgClick ~ imgLargeLink", imgLargeLink)
    // console.log(event.target.dataset.source);
    // console.log(event.target.nodeName);
    // console.log(event.target.);
   



}


// const instance = basicLightbox.create(
//   `
//     <div class="modal">
//         <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
//         <input placeholder="Type something">
//         <a>Close</a>
//     </div>
// `,
//   {
//     onShow: instance => {
//       instance.element().querySelector('a').onclick = instance.close;
//     },
//   }
// );

// instance.show();


// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>

// const instance = basicLightbox.create(`
//     <div class="modal">
//   <img src="assets/images/image.png" width="420" height="320">
//     </div>

// `);

// instance.show();

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();

// const instance = basicLightbox.create(
//   `
//     <div class="modal">
//         <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
//         <input placeholder="Type something">
//         <a>Close</a>
//     </div>
// `,
//   {
//     onShow: instance => {
//       instance.element().querySelector('a').onclick = instance.close;
//     },
//   }
// );

// instance.show();
