import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ImageGallery.css';
import ImageBox from '../imageBox/ImageBox.js';
import Rating from '../common/Rating.js';
import {
  COLUMNS,
  TRANSITION,
  SCROLLBAR_WIDTH
} from '../../constants/gallery.js';

export default class Gallery extends React.Component {
  componentDidMount = () => {
    window.addEventListener('resize', this.resize);
    this.refreshBoxes(false);
  }

  componentWillReceiveProps(nextProps){
    this.refreshBoxes();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  resize = () => {
    this.refreshBoxes(false);
  };

  refreshBoxes = (isAnimated = true) => {
    const gallery = document.getElementsByClassName('gallery')[0];
    const boxes = document.getElementsByClassName('imageBox');
    const boxesLength = boxes.length;
    const images = this.props.images;
    const sortedImages = this.sortByRate(images.slice());

    const galleryWidth = gallery.scrollHeight ? gallery.clientWidth
      : gallery.clientWidth - SCROLLBAR_WIDTH;

    const boxesWidth = galleryWidth / COLUMNS;
    gallery.style.height =  Math.ceil(boxesLength / COLUMNS) * boxesWidth + 'px';

    images.forEach((image, index)=>{
      const position = sortedImages.findIndex(sortedImage => sortedImage.id === image.id);
      this.setStylesForBox(boxes[index], boxesWidth, position);
      if (isAnimated) {
        boxes[index].style.transition = TRANSITION;
        boxes[index].addEventListener('transitionend',
          () => this.removeTransition(boxes, true));
      }
    })
  };

  setStylesForBox = (box, boxWidth, position) => {
    box.style.width = boxWidth + 'px';
    box.style.top = Math.floor(position / COLUMNS) * boxWidth + 'px';
    box.style.left = Math.floor(position % COLUMNS) * boxWidth + 'px';
  };

  removeTransition = (boxes) => {
    for(let i = 0; i < boxes.length; i++){
      boxes[i].style.removeProperty('transition');
    }
  };

  sortByRate = (items) => {
    if(items.length > 0){
      return items.sort((a, b) => {
        if ( a.rate >= b.rate ) {
          return -1;
        } else {
          return 1;
        }
      });
    }
  };

  render(){
    return (
      <div className='gallery'>
        {this.props.images.map((item, index) =>
          <ImageBox key={index} background={item.url}>
            <Rating
              value={item.rate}
              changeRate={(value) => this.props.actions.changeRate(index, value)}/>
          </ImageBox>
        )}
      </div>
    )
  }
}

Gallery.propTypes = {
  actions: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired
};
