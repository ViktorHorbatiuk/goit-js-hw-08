import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const containerOfGallery = document.querySelector('.gallery');
const markupOfGallery = galleryItems
  .map(item => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
            />
        </a>
        </li>`;
  })
  .join('');

containerOfGallery.insertAdjacentHTML('beforeend', markupOfGallery);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
