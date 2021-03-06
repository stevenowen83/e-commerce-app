import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import CartList from './CartList';
import WishList from './WishList';
import Checkout from './Checkout';
import Footer from './Footer';

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
    fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products')
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        store.dispatch({ type: 'SET_PRODUCT', products: myJson });
      });
  }
  render() {
    return (
      <Router>
        <Header />
        <div className="ui centered cards" style={{ marginBottom: '50px' }}>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/products/:id" component={ProductDetail} />
            <Route path="/cartList" component={CartList} />
            <Route path="/wishList" component={WishList} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
