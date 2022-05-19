import { Component } from 'react';
import PropTypes from 'prop-types';
import { ProductItem } from '../product-item/product-item';
import { models } from '../../models/models';

const propTypes = {
  products: models.ProductList.isRequired,
  addToOrder: PropTypes.func.isRequired
};

export class ProductList extends Component {
  static propTypes = propTypes;

  render() {
    return (
      <ul className="fishes">
        {this.props.products.map(item => (
          <ProductItem
            key={item.id}
            product={item}
            addToOrder={this.props.addToOrder}
          />
        ))}
      </ul>
    );
  }
}
