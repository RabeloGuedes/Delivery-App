import Proptypes from 'prop-types';
import moment from 'moment/moment';
import { useLocation } from 'react-router-dom';

moment.locale('pt-br');

export default function OrderDetailsHeader({
  id,
  // sellerId,
  totalPrice,
  saleDate,
  status,
  sellers: { name },
}) {
  const { pathname } = useLocation();
  const role = pathname.split('/')[1];
  console.log(role);

  const headerElements = [
    {
      dataTestId: `${role}_order_details__element-order-details-label-order-id`,
      text: `${id}`,
      shouldRender: true,
    },
    {
      dataTestId: `${role}_order_details__element-order-total-price`,
      text: `${Number(totalPrice).toFixed(2).replace('.', ',')}`,
      shouldRender: true,
    },
    {
      dataTestId: `${role}_order_details__element-order-details-label-order-date`,
      text: `${moment(saleDate).format('DD/MM/YYYY')}`,
      shouldRender: true,
    },
    {
      // index para cliente
      dataTestId: `${role}_order_details__element-order-details-label-delivery-status`,
      text: `${status}`,
      shouldRender: role === 'seller',
    },
    {
      // index para cliente
      dataTestId: `${role}_order_details
      __element-order-details-label-delivery-status-${id}`,
      text: `${status}`,
      shouldRender: role === 'customer',
    },
    {
      // só para cliente
      dataTestId: `${role}_order_details__element-order-seller-name`,
      text: `${name}`,
      shouldRender: role === 'customer',
    },
  ];

  return (
    <div>
      {
        headerElements.map(({ shouldRender, dataTestId, text }) => {
          if (shouldRender) {
            return (
              <p
                key={ dataTestId }
                data-testid={ dataTestId }
              >
                { text }
              </p>
            );
          }
          return null;
        })
      }
      {/* <p
        data-testid={ `${role}_order_details__element-order-details-label-order-id` }
      >
        { id }
      </p>
      { role === 'customer' && (
        // só para cliente
        <p
          data-testid={ `${role}_order_details__element-order-details-label-seller-name` }
        >
          { name }
        </p>
      )}
      <p
        data-testid={ `${role}_order_details__element-order-details-label-order-date` }
      >
        { moment(saleDate).format('DD/MM/YYYY') }
      </p>
      <p
        data-testid={ `${role}_order_details__element-order-total-price` }
      >
        { totalPrice.replace('.', ',') }
      </p>
      <p
        // index para cliente
        data-testid={ `${role}_order_details__element-order-details-label-delivery-status` }
      >
        { status }
      </p> */}
      { role === 'customer' && (
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
        >
          MARCAR COMO ENTREGUE
        </button>
      )}
      { role === 'seller' && (
        <>
          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            data-testid="seller_order_details__button-dispatch-check"
            disabled
          >
            SAIU PARA ENTREGA
          </button>
        </>
      )}
    </div>
  );
}

OrderDetailsHeader.propTypes = {
  id: Proptypes.number,
  name: Proptypes.string,
  saleDate: Proptypes.string,
  totalPrice: Proptypes.number,
  status: Proptypes.string,
}.isRequired;
