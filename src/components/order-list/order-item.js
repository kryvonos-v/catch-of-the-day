import { Component, Fragment } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { formatPrice } from '../../helpers';

export class OrderItem extends Component {
  render() {
    const deleteButton = (
      <button onClick={this.removeFromOrder}>×</button>
    );

    return (
      <li className="order">
        {this.props.item.amount
          ? (
            <Fragment>
              <div>
                <TransitionGroup component="span" className="count">
                  <CSSTransition
                    key={this.props.item.count}
                    classNames="count"
                    timeout={{ enter: 500, exit: 500 }}
                  >
                    <span>{this.props.item.count}</span>
                  </CSSTransition>
                </TransitionGroup>
                lbs {this.props.item.product.name} {deleteButton}
              </div>
              <span className="price">{formatPrice(this.props.item.amount)}</span>
            </Fragment>
          )
          : `${this.props.item.product.name} has just sold out!`
        }
      </li>
    );
  }

  removeFromOrder = () => {
    this.props.removeFromOrder(this.props.item.product.id);
  }
}