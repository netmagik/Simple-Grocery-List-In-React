import React from 'react';

class Products extends React.Component {
    render() {
        const { name, quantity } = this.props.details;
        return (
           <li>
              <h3>{name} - {quantity}</h3>
           </li>
            
        );
    }
}

export default Products;