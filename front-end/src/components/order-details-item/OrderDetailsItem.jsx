import Proptypes from 'prop-types';

export default function OrderDetailsItem({ sale }) {
  // console.log(sale);
  return (
    <div>
      { sale && (
        sale.map((itemSale, index) => (
          <div key={ itemSale.id }>
            <p
              data-testid="customer_order_details__element-order-details-label-order-id"
            >
              {/* <p>Item</p> */}
              { index + 1 }
            </p>
            <p
              data-testid={ `customer
              _order_details__element-order-details-label-seller-name` }
            >
              {/* <p>descrição</p> */}
              { itemSale.name }
            </p>
            <p
              data-testid="customer_order_details__element-order-details-label-order-date"
            >
              {/* <p>Quantidade</p> */}
              { itemSale.SalesProducts.quantity }
            </p>
            <p
              data-testid="customer_order_details__element-order-details-label-order-date"
            >
              {/* <p>Valor Unitário</p> */}
              { itemSale.price }
            </p>
            <p
              data-testid="customer_order_details__element-order-details-label-order-date"
            >
              {/* <p>Subtotal</p> */}
              { (itemSale.SalesProducts.quantity
                * itemSale.price).toFixed(2).replace('.', ',') }
            </p>
          </div>
        )))}
    </div>
  );
}

OrderDetailsItem.propTypes = {
  sale: Proptypes.arrayOf(Proptypes.object),
}.isRequired;
