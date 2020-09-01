import React from 'react';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';

class List extends React.Component {
    render() {
        return (
           <div>
               {Object.keys(this.props.product).map(key => 
                <EditProductForm
                key={key}
                index={key}
                product={this.props.product[key]}
                removeProduct={this.props.removeProduct}
                updateProduct={this.props.updateProduct}
                />
                )}
                <AddProductForm addProduct={this.props.addProduct} />
                <button onClick={this.props.loadSampleList}>Load Sample List</button>
           </div>
            
        );
    }
}

export default List;