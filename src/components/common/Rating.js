import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Rating.css';

export default class Rating extends React.Component {
  increaseValue = () => {
    this.props.changeRate(this.props.value + 1);
  };

  reduceValue = (e) => {
    e.preventDefault();
    this.props.changeRate(this.props.value - 1);
  };

  render() {
    return (
      <div className='rating' onClick={this.increaseValue} onContextMenu={this.reduceValue}>
        <i className='like'/>
        {this.props.value}
      </div>
    )};
};

Rating.propTypes = {
  value: PropTypes.number.isRequired
};
