import PropTypes from 'prop-types';
import { Component } from 'react';
import { bindMethod } from '../../helpers';

const propTypes = {
  addProduct: PropTypes.func.isRequired
};

export class ProductForm extends Component {
  static propTypes = propTypes

  constructor() {
    super();
    bindMethod(this, 'onSubmit');
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.onSubmit}>
        <input name="name" type="text" placeholder="Name"/>
        <input name="price" type="number" placeholder="Price"/>
        <select name="status">
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea
          name="description"
          placeholder="Description"
          defaultValue="Extremely tasty and fresh. Just got from Norway land"
        />
        <input name="image" type="text" placeholder="Image"/>
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }

  onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const product = {
      id: Date.now(),
      name: data.get('name'),
      price: Number(data.get('price')),
      status: data.get('status'),
      description: data.get('description'),
      image: data.get('image')
    };

    this.props.addProduct(product);
  }
}
