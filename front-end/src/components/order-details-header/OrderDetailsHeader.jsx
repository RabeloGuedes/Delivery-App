import Proptypes from 'prop-types';
import moment from 'moment/moment';

moment.locale('pt-br');

export default function OrderDetailsHeader({
  id,
  // sellerId,
  totalPrice,
  saleDate,
  status,
  sellers: { name },
}) {
  return (
    <div>
      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { id }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { name }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { moment(saleDate).format('DD/MM/YYYY') }
      </p>
      <p
        data-testid="customer_order_details__element-order-total-price"
      >
        { totalPrice.replace('.', ',') }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { status }
      </p>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled
      >
        MARCAR COMO ENTREGUE
      </button>
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
