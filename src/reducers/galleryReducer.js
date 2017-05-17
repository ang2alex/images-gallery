import {CHANGE_RATE} from '../actions/galleryActions.js';

import {IMAGES} from '../constants/gallery.js';

let images = [];
for (let i = 0; i < IMAGES.length; i++) {
  images.push({
    ...IMAGES[i],
    url: `${process.env.PUBLIC_URL}${IMAGES[i].url}`
  });
}

const initialState = {
  images
}

export default function galleryReducer(state = initialState, action){
  switch(action.type){
    case CHANGE_RATE:
      const images = state.images.slice();
      images[action.index].rate = action.value;
      return {
        ...state,
        images
      };
    default:
      return state;
  }
}
