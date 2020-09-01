import React from 'react'
import styled from 'styled-components'

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

class Form extends React.Component {
    initialState = {
        product: '',
        quantity: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state)
        this.setState(this.initialState)
        
        event.currentTarget.reset();
    }

    render() {
        const {product, quantity} = this.state;

        return (
            <Formstyle>           
            <form onSubmit={this.onFormSubmit}>
                <input 
                    type="text"
                    name="product"
                    id="product"
                    value={product}
                    placeholder="Product Name"
                    onChange={this.handleChange}
                 />
                 <input 
                    type="number"
                    name="quantity"
                    value={quantity}
                    placeholder="Quantity"
                    onChange={this.handleChange}
                    />
                <button type="Submit">Add Item</button>
            </form>
            </Formstyle>
        )
    }
}

export default Form;