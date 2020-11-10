import React from 'react';
import Inventory from './Inventory';
import sampleProducts from './sample-list';
import Products from './Products';

class App extends React.Component {

  state = {
    products: {}
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem('products')
    console.log(localStorage)
    if (localStorageRef) {
      this.setState({products: JSON.parse(localStorageRef)})
    }
  }

  componentDidUpdate() {
    console.log('It Updated!')
    console.log(this.state.products);
    localStorage.setItem('products', JSON.stringify(this.state.products));
  }

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
      this.setState({ products: {...this.state.products, ...sampleProducts},
      });
    }

  render() {
    
    return (
      <div className="container">
        <div className="flex-row">
          <div className="flex-large">
            <h2>Grocery List</h2>
            {Object.keys(this.state.products).length > 0 ? ( 
            <ul>
              {Object.keys(this.state.products).map(key => (
                <Products 
                key={key}
                index={key}
                details={this.state.products[key]}
              />
              ))} 
            </ul>
            ) : (
              <p>The list has 0 items. <br />
              Add Grocery Item or Load Sample Products.</p>
            )}
          </div>
          
          <div className="flex-large">
            <Inventory
                product={this.state.products} 
                removeProduct={this.removeProduct}
                addProduct={this.addProduct} 
                updateProduct={this.updateProduct}
                loadSampleProducts={this.loadSampleProducts}
              />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
