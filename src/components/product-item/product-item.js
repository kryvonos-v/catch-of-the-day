import PropTypes from 'prop-types';
import { Component } from 'react';
import { formatPrice } from '../../helpers';
import { models } from '../../models/models';

const propTypes = {
  product: models.Product.isRequired,
  addToOrder: PropTypes.func.isRequired
};

export class ProductItem extends Component {
  static propTypes = propTypes;

  render() {
    const { name, description, price, status, image } = this.props.product;
    const isAvailable = (status === 'available');
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{description}</p>
        {isAvailable
          ? <button onClick={this.addToCart}>Add To Cart</button>
          : <button disabled>Sold Out</button>
        }
      </li>
    );
  }
  
  addToCart = () => {
    this.props.addToOrder(this.props.product.id);
  };
}
