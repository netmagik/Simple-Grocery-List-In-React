import React from 'react';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';

class Inventory extends React.Component {

    render() {
        return (
            <div>
                <h2>Inventory</h2>

                <AddProductForm addProduct={this.props.addProduct}/>
                <button onClick={this.props.loadSampleProducts}>Load Sample Products</button>
                
                {Object.keys(this.props.product).map(key =>
                    <EditProductForm
                        key={key}
                        index={key}
                        product={this.props.product[key]}
                        updateProduct={this.props.updateProduct}
                        removeProduct={this.props.removeProduct}
                        />
                )}
            </div>
        )
    }
}

export default Inventory;