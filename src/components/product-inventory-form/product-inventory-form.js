import { func } from 'prop-types';
import { Component } from 'react';
import { bindMethod } from '../../helpers';
import { createCast } from './product-value-cast';
import { models } from '../../models/models';

const propTypes = {
  product: models.Product.isRequired,
  updateProduct: func.isRequired,
  removeProduct: func.isRequired
};

const cast = createCast({
  price: Number
});

export class ProductInventoryForm extends Component {
  static propTypes = propTypes;

  constructor() {
    super();
    bindMethod(this, 'removeProduct', 'onChange');
  }

  render() {
    const { name, price, status, description, image } = this.props.product;

    return (
      <form className="fish-edit">
        <input
          value={name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.onChange}
        />
        <input
          value={price}
          name="price"
          type="number"
          placeholder="Price"
          onChange={this.onChange}
        />

        <select
          value={status}
          name="status"
          onChange={this.onChange}
        >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea
          value={description}
          name="description"
          placeholder="Description"
          onChange={this.onChange}
        />
        <input
          value={image}
          name="image"
          type="text"
          placeholder="Image"
          onChange={this.onChange}
        />
        <button type="button" onClick={this.removeProduct}>Remove Fish</button>
      </form>
    );
  }

  removeProduct() {
    this.props.removeProduct(this.props.product.id);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.props.updateProduct({
      ...this.props.product,
      [name]: cast(name, value)
    });
  }
}
