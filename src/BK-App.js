import React from 'react';
import Form from './Form';
import Table from './Table';

class App extends React.Component {

  state = {
    products:[],
  };

  removeProduct = (index) => {
    const {products} = this.state;
    
    this.setState({
      products: products.filter((product, i) => {
      return i !==index
    })
    });
  }

  onFormSubmit = (product) => {
    this.setState({ products: [...this.state.products, product] });
  }


  render() {

    const { products } = this.state;
    
    return (
      <div className="container">
        <h2>Grocery List</h2>
        <p>Add Grocery Items to the List</p>
      <Table 
          productData={products} 
          removeProduct={this.removeProduct} />
        <h3>Add New</h3>
        <Form onFormSubmit={this.onFormSubmit} />

      </div>
    )
  }
}

export default App;
