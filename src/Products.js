import React from 'react';

const Products = props => {
    const { name, quantity } = props.details;
    return (
           <li>
              <h3>{name} - {quantity}</h3>
           </li>
    );
}

export default Products;