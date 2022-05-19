import PropTypes from 'prop-types';
import { Component } from 'react';
import { formatPrice } from '../../helpers';
import { models } from '../../models/models';
import { OrderList } from '../order-list/order-list';

const propTypes = {
  order: models.Order.isRequired,
  products: models.ProductList.isRequired,
  removeFromOrder: PropTypes.func.isRequired
};

export class Order extends Component {
  static propTypes = propTypes

  render() {
    const { products, order } = this.props;
    const paymentRequest = createPaymentRequest(products, order);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <OrderList
          items={paymentRequest.items}
          removeFromOrder={this.props.removeFromOrder}
        />
        <div className="total">
          Total: <strong>{formatPrice(paymentRequest.total)}</strong>
        </div>
      </div>
    );
  }
}

function createPaymentRequest(products, order) {
  const items = Object.keys(order)
    .map(id => {
      const product = products.find(item => item.id === Number(id));
      if (!product) return;
        
      const count = order[id];
      const isAvailable = product.status === 'available';

      return {
        product,
        count,
        amount: isAvailable * count * product.price
      };
    })
    .filter(item => item);

  const total = items.reduce((prev, curr) => prev + curr.amount, 0);

  return { items, total };
}
