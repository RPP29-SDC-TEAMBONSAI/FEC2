/* eslint-disable react/prop-types */
import React from 'react';
import ProductForm from './ProductForm.jsx';
import { MdCheck } from 'react-icons/md';
import StarsGlobal from '../reviews/StarsGlobal.jsx';

class ProductInfo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      thumbnailClicked: [true, false, false, false, false, false, false, false, false, false, false]
    };
  }

  render () {
    let urlIdArray = [];

    if (this.props.images[0] !== undefined) {
      urlIdArray = this.props.styles.map((style) => {
        return { id: style.style_id, url: style.photos[0].thumbnail_url };
      });
    }

    const toggleBoolAtIndex = (array, index) => {
      for (let i = 0; i < array.length; i++) {
        if (i === index) {
          array[i] = true;
        } else {
          array[i] = false;
        }
      }
      return array;
    };

    const findMatchingStyleId = (id) => {
      const selectedStyle = this.props.styles.filter((style) => {
        return style.style_id === id;
      });
      return selectedStyle[0];
    };

    return (
      <div id="info">
        <div className="info">
          <StarsGlobal value={this.props.starValue} />
        </div>
        <div className="product_category info">
          {this.props.product.category}
        </div>
        <div className="product_name info">
          {this.props.product.name}
        </div>
        <div className="product_price info">
          {this.props.currentStyle.sale_price !== null ? <div><p className="sale_price">{this.props.currentStyle.sale_price}</p> <p className="original_price">{this.props.currentStyle.original_price}</p></div> : this.props.currentStyle.original_price }
        </div>
        <div className="product_style info">
          <b>STYLE{' > '}</b>{this.props.currentStyle.name}
        </div>
        <div className="product_styles_thumbnails info">
          {this.props.images[0]
            ? urlIdArray.map((element, key) => (<div key={key} onClick={() => {
              this.props.changeStyle(findMatchingStyleId(element.id), findMatchingStyleId(element.id).photos[0].url);
              this.setState({ thumbnailClicked: toggleBoolAtIndex(this.state.thumbnailClicked, key) });
            }} className="product_styles_thumbnail" style={{ backgroundImage: `url(${element.url})` }}>
            {this.state.thumbnailClicked[key] ? <MdCheck className="selected_style_check" /> : null}
          </div>))
            : null }
        </div>
        <ProductForm addToBag={this.props.addToBag} currentStyle={this.props.currentStyle} />
      </div>
    );
  }
}

export default ProductInfo;
