import { useNavigate } from 'react-router-dom';
import Proptypes from 'prop-types';

export default function CardOrders({
  orderId,
  delivetyStatus,
  orderDate,
  orderPrice,
}) {
  const navigate = useNavigate();
  return (
    <div
      className="card-orders"
    >
      <button
        type="button"
        data-testid={ `customer_orders__element-order-id-${orderId}` }
        onClick={ () => navigate(`/customer/orders/${orderId}`) }
      >
        { orderId }
      </button>
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
