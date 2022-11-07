import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import Proptypes from 'prop-types';

moment.locale('pt-br');

moment().format('DD/MM/YYYY');

export default function CardOrders({
  id,
  status,
  saleDate,
  totalPrice,
}) {
  const navigate = useNavigate();
  return (
    <div
      className="card-orders"
    >
      <button
        type="button"
        data-testid={ `customer_orders__element-order-id-${id}` }
        onClick={ () => navigate(`/customer/orders/${id}`) }
      >
        { id }
      </button>
      <p
        data-testid={ `customer_orders__element-delivery-status-${id}` }
      >
        { status }
      </p>
      <p
        data-testid={ `customer_orders__element-order-date-${id}` }
      >
        { moment(saleDate).format('DD/MM/YYYY') }
      </p>
      <p
        data-testid={ `customer_orders__element-card-price-${id}` }
      >
        { Number(totalPrice).toFixed(2).replace('.', ',') }
      </p>
    </div>
  );
}

CardOrders.propTypes = {
  id: Proptypes.number,
  status: Proptypes.string,
  saleDate: Proptypes.string,
  totalPrice: Proptypes.number,
}.isRequired;
