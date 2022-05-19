import { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { OrderItem } from './order-item';
import { models } from '../../models/models';

const propTypes = {
  items: models.OrderList.isRequired,
  removeFromOrder: PropTypes.func.isRequired
};

export class OrderList extends Component {
  static propTypes = propTypes
  
  render() {
    return (
      <TransitionGroup component="ul" className="order">
        {this.props.items.map(item => (
          <CSSTransition
            key={item.product.id}
            classNames="order"
            timeout={{ enter: 500, exit: 500 }}
          >
            <OrderItem
              item={item}
              removeFromOrder={this.props.removeFromOrder}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}
