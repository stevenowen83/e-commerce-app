import React, { Component } from 'react';

import store from './store';

class ProductDetail extends Component {
  state = {
    product: [],
  };

  componentDidMount() {
    this.setState({
      product: store.getState().products.filter(product => {
        return product.id === Number(this.props.match.params.id);
      }),
    });
  }

  addProduct(product) {
    store.dispatch({
      type: 'ADD_PRODUCT',
      product: product,
    });
  }

  addWish(product) {
    store.dispatch({
      type: 'ADD_WISH',
      product: product,
    });
  }

  renderProduct() {
    return this.state.product.map((prod, idx) => {
      return (
        <div key={idx} className="ui raised very padded container segment">
          <img
            className="ui centered image"
            alt={prod.title}
            src={prod.img}
            style={{ maxHeight: '300px' }}
          />
          <h2 className="ui centered header segment">{prod.title}</h2>
          <div className="ui center aligned container">
            {prod.category.toUpperCase()}
          </div>
          <div className="ui centered segment">
            <div style={{ fontWeight: 'bold' }}>Description: </div>
            <span>{prod.description} </span>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontWeight: 'bold' }}>Price: </span>
                <span>${prod.price}</span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>Rating: </span>
                <span style={{ fontWeight: 'bold' }}>{prod.rating}</span>
              </div>
            </div>
          </div>
          <div
            className="ui center aligned container"
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <button onClick={() => this.addProduct(prod)}>
              <i className="cart icon" />
              Add To Cart
            </button>
            <button onClick={() => this.addWish(prod)}>
              <i className="heart icon" />
              Add To Wish List
            </button>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderProduct()}</div>;
  }
}

export default ProductDetail;
