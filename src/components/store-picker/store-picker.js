import { Component } from 'react';
import { getFunName } from '../../helpers';

export class StorePicker extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.onSubmit}>
        <h2>Please Enter a Store</h2>
        <input
          name="name"
          type="text"
          placeholder="Store Name"
          required
          defaultValue={getFunName()}
        />
        <button type="submit">Visit store →</button>
      </form>
    );
  }

  onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const storeName = form.elements.name.value;
    this.props.history.push(`/store/${storeName}`);
  }
}
