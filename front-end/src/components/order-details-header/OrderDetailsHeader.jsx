import Proptypes from 'prop-types';

export default function OrderDetailsHeader({
  id,
  sellerId,
  totalPrice,
  saleDate,
  status,
}) {
  return (
    <div>
      <p
        data-testid={ `customer_order_details
        __element-order-details-label-order-id` }
      >
        { id }
      </p>
      <p
        data-testid={ `customer_order_details
        __element-order-details-label-seller-name` }
      >
        { sellerId }
      </p>
      <p
        data-testid={ `customer_order_details
        __element-order-details-label-order-date` }
      >
        { saleDate }
      </p>
      <p
        data-testid="customer_order_details__element-order-total-price"
      >
        { totalPrice }
      </p>
      <p
        data-testid={ `customer_order_details
        __element-order-details-label-delivery-status-${id}` }
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
  sellerId: Proptypes.number,
  saleDate: Proptypes.string,
  totalPrice: Proptypes.number,
  status: Proptypes.string,
}.isRequired;
