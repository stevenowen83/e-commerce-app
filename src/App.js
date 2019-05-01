import React, { Component } from 'react';

class App extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products')
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ products: myJson });
      });
  }

  renderProducts() {
    return this.state.products.map((product, idx) => (
      <div className="ui raised link card" key={idx}>
        <div className="ui centered small image">
          <img alt={product.title} src={product.img} />
        </div>
        <div className="content">
          <div className="center aligned header">{product.title}</div>
          <div className="meta">{product.category.toUpperCase()}</div>
          <div className="center aligned description">
            {product.description}
          </div>
        </div>
        <div className="extra content">
          <span className="right floated star">
            <i className="star icon" />
            Favorite
          </span>
          <span className="floated star">
            <i className="cart icon" />
            Add To Cart
          </span>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div className="ui inverted large menu">
          <span className="item">Electronic Store</span>
          <div className="right item">
            <i className="large floated left cart icon" />
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search icon" />
            </div>
          </div>
        </div>
        <div className="ui centered cards">{this.renderProducts()}</div>
      </div>
    );
  }
}

export default App;