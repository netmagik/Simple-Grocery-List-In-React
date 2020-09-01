import React from 'react';

class Products extends React.Component {
    render() {
        const { name, quantity } = this.props.details;

        return (
           <li>
              <h4>{name} - {quantity}</h4> 
           </li>
            
        );
    }
}

export default Products;