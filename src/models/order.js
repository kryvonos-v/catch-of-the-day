import PropTypes, { number } from 'prop-types'
import { Product } from './product';

export const Order = PropTypes.objectOf(number);

export const OrderItem = PropTypes.shape({
  product: Product,
  count: number,
  amount: number
});

export const OrderList = PropTypes.arrayOf(OrderItem);
