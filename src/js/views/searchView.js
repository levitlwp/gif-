import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = '';
};

const renderImage = image => {
  const markup = `
    <figure class="image">
      <img src="${image.images.fixed_width_downsampled.url}" alt="" />
    </figure>
  `;
  // console.log(image);

  elements.searchRes.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = data => {
  data.forEach(renderImage);
};
