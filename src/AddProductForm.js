import React from 'react';
import styled from 'styled-components';


const Formstyle = styled.div`

form {
    display: flex;
    flex-wrap: wrap;
}

input {
    width: 50%;
    margin-right: 20px;
}
    `;


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
            <Formstyle>           
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
            
            </Formstyle>
        );
    }
}

export default AddProductForm;