import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'basiclightbox'

// Change code below this line

// console.log(galleryItems);
const containerGAllery=document.querySelector('.gallery');//ingresar el selector
const photosMark = createGalleryItem(galleryItems);

function createGalleryItem(element){
    return element 
    .map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}"
                data-source"${original}" 
                alt="${description}"
                />
            </a>
        </div>`
    })
    .join('')
    
}
containerGAllery.insertAdjacentHTML('beforeend',photosMark);
containerGAllery.onclick = () => {
	basicLightbox.create(`
		<img width="1400" height="900" src="${galleryItems.original}">
	`).show()
}


// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

// document.querySelector('.gallery a').onclick = () => {
// 	basicLightbox.create(`
// 		<img width="1400" height="900" src="${preview}">//funciona con una url
// 	`).show()
// }