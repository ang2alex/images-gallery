import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Gallery from '../components/imageGallery/ImageGallery.js';

import * as galleryActions from '../actions/galleryActions.js';

const GalleryContainer = ({gallery, actions}) => (
  <div>
    <Gallery images={gallery.images} actions={actions}/>
  </div>
);

const mapStateToProps = (state, routeProps) => ({
  gallery: state.gallery
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(galleryActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryContainer)

GalleryContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  gallery: PropTypes.object.isRequired
};
