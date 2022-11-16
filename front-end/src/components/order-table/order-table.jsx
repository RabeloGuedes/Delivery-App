import React from 'react';
import Proptypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import StyledOrderTable from './StyledOrderTable';

export default function OrderTable({ sale }) {
  const { pathname } = useLocation();
  const role = pathname.split('/')[1];
  function geRows() {
    return (
      sale.map((itemSale, index) => (
        <tr key={ itemSale.id } className={ index % 2 === 0 ? 'Even' : 'Odd' }>
          <td
            data-testid={ `${role}_order_details
            __element-order-table-item-number-${index}` }
          >
            {index + 1}
          </td>
          <td
            data-testid={ `${role}_order_details
            __element-order-table-name-${index}` }
          >
            {itemSale.name}
          </td>
          <td
            data-testid={ `${role}_order_details
            __element-order-table-quantity-${index}` }
          >
            {itemSale.sales_products.quantity}
          </td>
          <td
            data-testid={ `${role}_order_details
            __element-order-table-unit-price-${index}` }
          >
            {`R$ ${(itemSale.price).replace('.', ',')}`}
          </td>
          <td
            data-testid={ `${role}_order_details
            __element-order-table-sub-total-${index}` }
          >
            { `R$ ${(itemSale.sales_products.quantity
                  * itemSale.price).toFixed(2).replace('.', ',')}` }
          </td>
        </tr>
      ))
    );
  }

  return (
    <StyledOrderTable>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
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
    </StyledOrderTable>
  );
}

OrderTable.propTypes = {
  sale: Proptypes.arrayOf(Proptypes.object),
}.isRequired;
