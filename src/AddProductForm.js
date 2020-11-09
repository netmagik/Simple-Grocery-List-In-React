import React from 'react';

class AddProductForm extends React.Component {
    nameRef = React.createRef();
    quantityRef = React.createRef();


    createProduct = event => {
        event.preventDefault();
        const product = {
            name: this.nameRef.current.value,
            quantity: parseFloat(this.quantityRef.current.value)
        };
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