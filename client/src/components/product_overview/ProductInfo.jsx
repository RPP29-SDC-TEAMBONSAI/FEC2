/* eslint-disable react/prop-types */
import React from 'react';
import ProductForm from './ProductForm.jsx';

class ProductInfo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    // console.log('🥑', this.props.images);
    const array = [];
    if (this.props.images[0] !== undefined) {
      this.props.images.forEach((image) => {
        // console.log('🥩', image[0].thumbnail_url);
        array.push(image[0].thumbnail_url);
      });
      console.log('🥩', array);
    }
    return (
      <div id="info">
        <div className="info">
          Stars Component
        </div>
        <div className="product_category info">
          {this.props.product.category}
        </div>
        <div className="product_name info">
          {this.props.product.name}
        </div>
        <div className="product_price info">
          {this.props.currentStyle.original_price}
        </div>
        <div className="product_style info">
          <b>STYLE{' > '}</b>{this.props.currentStyle.name}
        </div>
        <div className="product_styles_thumbnails info">
          {this.props.images[0] ? array.map((url, key) => (<div key={key} className="product_styles_thumbnail" style={{ backgroundImage: `url(${url})` }}></div>)) : null }
        </div>
        <ProductForm />
      </div>
    );
  }
}

export default ProductInfo;
