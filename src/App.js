import React from 'react';
import Inventory from './Inventory';
import sampleProducts from './sample-list';
import Products from './Products';

class App extends React.Component {

  state = {
    products: {}
  };

  updateProduct = (key, updatedProduct) => {
    const products = {...this.state.products};
    products[key] = updatedProduct;
    this.setState({products});
  }

  removeProduct = key => {
    const products = {...this.state.products};
      // products[key] = null;
      delete products[key];
      this.setState({products});
    }

    addProduct = product => {
      const products = {...this.state.products};
      products[`product${Date.now()}`] = product;
      this.setState({products});
    }

    loadSampleProducts = () => {
      this.setState({ products: sampleProducts });
    }

  // onFormSubmit = (product) => {
  //   this.setState({ products: [...this.state.products, product] });
  // }


  render() {
    
    return (
      <div className="container">
        <h2>Grocery List</h2>
        <p>Add Grocery Items to the List</p>

        <ul>
          {Object.keys(this.state.products).map(key => (
            <Products 
            key={key}
            index={key}
            details={this.state.products[key]}
          />
          ))}
          
        </ul>

      <Inventory
          product={this.state.products} 
          removeProduct={this.removeProduct}
          addProduct={this.addProduct} 
          updateProduct={this.updateProduct}
          loadSampleProducts={this.loadSampleProducts}
        />
        {/* <h3>Add New</h3> */}
        {/* <Form onFormSubmit={this.onFormSubmit} /> */}

      </div>
    )
  }
}

export default App;
