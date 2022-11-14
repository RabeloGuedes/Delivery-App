import { useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment/moment';
import Proptypes from 'prop-types';
import StyledCardOrders from './StyledCardOrders';
import addZeroes from '../../utils/utils';

moment.locale('pt-br');

moment().format('DD/MM/YYYY');

export default function CardOrders({
  id,
  status,
  saleDate,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const role = pathname.split('/')[1];
  const FOUR = 4;

  // function addZeroes(num, len) {
  //   let numberWithZeroes = String(num);
  //   let counter = numberWithZeroes.length;

  //   while (counter < len) {
  //     numberWithZeroes = `0${numberWithZeroes}`;
  //     counter += 1;
  //   }
  //   return numberWithZeroes;
  // }

  return (
    <StyledCardOrders
      type="button"
      className="card-orders"
      onClick={ () => navigate(`/${role}/orders/${id}`) }
    >
      <div className="order">
        pedido
        <p
          data-testid={ `${role}_orders__element-order-id-${id}` }
        >
          { addZeroes(id, FOUR) }
        </p>
      </div>
      <div className="main">
        <div className="top">
          <div className="status">
            <p
              data-testid={ `${role}_orders__element-delivery-status-${id}` }
            >
              { status }
            </p>
          </div>
          <div className="top-right">
            <p
              data-testid={ `${role}_orders__element-order-date-${id}` }
            >
              { moment(saleDate).format('DD/MM/YYYY') }
            </p>
            <p
              data-testid={ `${role}_orders__element-card-price-${id}` }
            >
              { Number(totalPrice).toFixed(2).replace('.', ',') }
            </p>
          </div>
        </div>
        {
          role === 'seller'
          && (
            <p data-tesid={ `seller_orders__element-card-address-${id}` }>
              { `${deliveryAddress}, ${deliveryNumber}` }
            </p>)
        }
      </div>
    </StyledCardOrders>
  );
}

CardOrders.propTypes = {
  id: Proptypes.number,
  status: Proptypes.string,
  saleDate: Proptypes.string,
  totalPrice: Proptypes.number,
}.isRequired;
