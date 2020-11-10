import React from 'react';
import PropTypes from 'prop-types';

class AddProductForm extends React.Component {

    nameRef = React.createRef();
    quantityRef = React.createRef();

    static propTypes = {
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,

        addProduct: PropTypes.func.isRequired
    }


    createProduct = event => {
        event.preventDefault();
        const product = {
            name: this.nameRef.current.value,
            quantity: parseFloat(this.quantityRef.current.value)
        };
        // If Item name or quantity is left blank
        if (!product.name || !product.quantity) return
        
        this.props.addProduct(product);
        event.currentTarget.reset();
    };


    render() {
        return (          
            <form onSubmit={this.createProduct}>
                <input 
                    type="text"
                    name="name"
                    ref={this.nameRef}
                    placeholder="Product Name"
                 />
                 <input 
                    type="number"
                    name="quantity"
                    ref={this.quantityRef}
                    placeholder="Quantity"
                    />
                    
                <button type="Submit">Add Item</button>
            </form>
        );
    }
}

export default AddProductForm;