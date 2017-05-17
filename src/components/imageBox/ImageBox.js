import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ImageBox.css';

export default class ImageBox extends React.Component {
  render() {
    const style = {
      'backgroundImage': `url(${this.props.background})`
    };
    return (
      <div className='imageBox'>
        <div className='imageBox-wrapper'>
          <div className='imageBox-content' style={style}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

ImageBox.propTypes = {
  children: PropTypes.element
};
