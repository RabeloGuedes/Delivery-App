import React from 'react';
import Proptypes from 'prop-types';

export default function OrderTable({ sale }) {
  console.log(sale);
  function geRows() {
    return (
      sale.map((itemSale, index) => (
        <tr key={ itemSale.id } className={ index % 2 === 0 ? 'Even' : 'Odd' }>
          <td
            data-testid={ `customer_order_details
            __element-order-table-item-number-${index}` }
          >
            {index + 1}
          </td>
          <td
            data-testid={ `customer_order_details
            __element-order-table-name-${index}` }
          >
            {itemSale.name}
          </td>
          <td
            data-testid={ `customer_order_details
            __element-order-table-quantity-${index}` }
          >
            {itemSale.sales_products.quantity}
          </td>
          <td
            data-testid={ `customer_order_details
            __element-order-table-unit-price-${index}` }
          >
            {(itemSale.price).replace('.', ',')}
          </td>
          <td
            data-testid={ `customer_order_details
            __element-order-table-sub-total-${index}` }
          >
            {(itemSale.sales_products.quantity
                  * itemSale.price).toFixed(2).replace('.', ',')}
          </td>
        </tr>
      ))
    );
  }

  return (
    <div className="OrderTable">
      {/* <table border="1"> */}
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantitade</th>
            <th>Valor Unitário</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          { sale && (
            geRows()
          )}
        </tbody>
      </table>
    </div>
  );
}

OrderTable.propTypes = {
  sale: Proptypes.arrayOf(Proptypes.object),
}.isRequired;
