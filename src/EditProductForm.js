import React from 'react';

class EditProductForm extends React.Component {


    handleChange = (event) => {
        console.log(event.currentTarget.value);
        const updatedProduct = {
            ...this.props.product,
            [event.currentTarget.name]: event.currentTarget.value
        };

        this.props.updateProduct(this.props.index, updatedProduct);
    };



    render() {
        return (
            <div>
                <input 
                type="text" 
                name="name" 
                onChange={this.handleChange} 
                value={this.props.product.name} 
                />
                <input
                type="number" 
                name="quantity" 
                onChange={this.handleChange} 
                value={this.props.product.quantity} 
                />
                 <button onClick={() => this.props.removeProduct(this.props.index) }>
                Remove Product
                </button>
            </div>
        );
    }
}

export default EditProductForm;