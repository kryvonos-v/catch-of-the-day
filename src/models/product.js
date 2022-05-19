import PropTypes, { number, string } from 'prop-types';

export const ProductStatus = PropTypes.oneOf(['available', 'unavailable']);

export const Product = PropTypes.shape({
  id: number.isRequired,
  name: string.isRequired,
  image: string.isRequired,
  description: string.isRequired,
  price: number.isRequired,
  status: ProductStatus.isRequired
});

export const ProductList = PropTypes.arrayOf(Product);
