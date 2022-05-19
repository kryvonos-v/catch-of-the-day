import { Component } from 'react';
import { AppHeader } from './app-header/app-header';
import { Order } from './order/order';
import { ProductInvetory } from './product-inventory/product-inventory';
import { bindMethod } from '../helpers';
import { ProductList } from './product-list/product-list';
import { store } from '../store/store';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fishes: [],
      order: store.getOrder(this.storeId)
    };

    bindMethod(this, 'addToOrder', 'removeFromOrder', 'addFish', 'removeFish', 'setFishes', 'updateFish');
  }

  get storeId() {
    return this.props.match.params.storeId;
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <AppHeader tagline="Fresh Seafood Market" />
          <ProductList products={this.state.fishes} addToOrder={this.addToOrder} />
        </div>
        <Order
          order={this.state.order}
          products={this.state.fishes}
          removeFromOrder={this.removeFromOrder}
        />
        <ProductInvetory
          products={this.state.fishes}
          addProduct={this.addFish}
          setProducts={this.setFishes}
          updateProduct={this.updateFish}
          removeProduct={this.removeFish}
        />
      </div>
    );
  }

  componentDidUpdate() {
    store.setOrder(this.storeId, this.state.order);
  }

  addToOrder(key) {
    const order = { ...this.state.order };
    order[key] = order[key] || 0;
    ++order[key];

    this.setState({ order });
  }

  removeFromOrder(key) {
    const order = { ...this.state.order };
    delete order[key];

    this.setState({ order });
  }

  addFish(fish) {
    const fishes = [...this.state.fishes, fish];
    this.setFishes(fishes);
  }

  removeFish(id) {
    const fishes = this.state.fishes.filter(item => item.id !== id);
    this.setFishes(fishes);
  }

  updateFish(fish) {
    const fishes = this.state.fishes.map(item => {
      return item.id === fish.id ? fish : item;
    });

    this.setFishes(fishes);
  }

  setFishes(fishes) {
    this.setState({ fishes });
  }
}
