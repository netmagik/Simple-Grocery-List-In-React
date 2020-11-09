import React from 'react'

const TableBody = (props) => {
    const rows = props.productData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.product}</td>
                <td>{row.quantity}</td>
                <td>
                    <button onClick={() => props.removeProduct(index)}>Delete</button>
                </td>
            </tr>
        )
    })
        return<tbody>{rows}</tbody>
}

    const Table = (props) => {
        const {productData, removeProduct} = props
        
        return (
            <table>
                <TableBody productData={productData} removeProduct={removeProduct} />
            </table>
        )
    }
    

export default Table;