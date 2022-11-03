import Proptypes from 'prop-types';

export default function CardOrders({
  orderId,
  delivetyStatus,
  orderDate,
  orderPrice,
}) {
  return (
    <div>
      <p
        data-testid={ `customer_orders__element-order-id-${orderId}` }
      >
        { orderId }
      </p>
      <p
        data-testid={ `customer_orders__element-delivery-status-${orderId}` }
      >
        { delivetyStatus }
      </p>
      <p
        data-testid={ `customer_orders__element-order-date-${orderId}` }
      >
        { orderDate }
      </p>
      <p
        data-testid={ `customer_orders__element-card-price-${orderId}` }
      >
        { Number(orderPrice).toFixed(2).replace('.', ',') }
      </p>
    </div>
  );
}

CardOrders.propTypes = {
  orderId: Proptypes.number,
  delivetyStatus: Proptypes.string,
  orderDate: Proptypes.string,
  orderPrice: Proptypes.number,
}.isRequired;
