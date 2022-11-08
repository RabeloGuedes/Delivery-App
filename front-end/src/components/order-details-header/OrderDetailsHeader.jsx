import Proptypes from 'prop-types';
import { useState } from 'react';
import moment from 'moment/moment';
import { useLocation } from 'react-router-dom';
import { updateStatus } from '../../services/APIs';

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

  const [currentStatus, setCurrentStatus] = useState(status);

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
      text: `${currentStatus}`,
      shouldRender: role === 'seller',
    },
    {
      // index para cliente
      dataTestId: `${role}_order_details__element-order-details-label-delivery-status`,
      text: `${currentStatus}`,
      shouldRender: role === 'customer',
    },
    {
      // só para cliente
      dataTestId: `${role}_order_details__element-order-details-label-seller-name`,
      text: `${name}`,
      shouldRender: role === 'customer',
    },
  ];

  const statusName = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'];

  const verifyStatus = (currStatus) => {
    const currStatusIndex = statusName.indexOf(currStatus);
    setCurrentStatus(statusName[currStatusIndex + 1]);

    return statusName[currStatusIndex + 1];
  };

  const handleStatus = async () => {
    updateStatus(id, verifyStatus(currentStatus));
  };

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
      { role === 'customer' && (
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          onClick={ () => handleStatus() }
          disabled={ currentStatus !== 'Em Trânsito' }
        >
          MARCAR COMO ENTREGUE
        </button>
      )}
      { role === 'seller' && (
        <>
          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
            onClick={ () => handleStatus() }
            disabled={ currentStatus !== 'Pendente' }
          >
            { currentStatus }
          </button>
          <button
            type="button"
            data-testid="seller_order_details__button-dispatch-check"
            onClick={ () => handleStatus() }
            disabled={ currentStatus !== 'Preparando' }
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
