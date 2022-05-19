import { Component } from 'react';
import { func } from 'prop-types';
import { ProductForm } from '../product-form/product-form';
import { ProductInventoryForm } from '../product-inventory-form/product-inventory-form';
import sampleFishes from '../../sample-fishes';
import { models } from '../../models/models';

const propTypes = {
  products: models.ProductList.isRequired,
  addProduct: func.isRequired,
  updateProduct: func.isRequired,
  removeProduct: func.isRequired,
  setProducts: func.isRequired
}

export class ProductInvetory extends Component {
  static propTypes = propTypes;

  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>

        {this.props.products.map(item => (
          <ProductInventoryForm
            key={item.id}
            product={item}
            updateProduct={this.props.updateProduct}
            removeProduct={this.props.removeProduct}
          />
        ))}
        <ProductForm addProduct={this.props.addProduct} />
        <button onClick={this.loadSamples}>Load Samples Fishes</button>
      </div>
    );
  }

  loadSamples = () => {
    this.props.setProducts(sampleFishes);
  }
}
