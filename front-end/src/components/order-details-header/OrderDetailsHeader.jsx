import Proptypes from 'prop-types';

export default function OrderDetailsHeader({
  orderId,
  // sellerName,
  delivetyStatus,
  orderDate,
  // index,
}) {
  return (
    <div>
      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { orderId }
      </p>
      {/* <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { selleName }
      </p> */}
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { orderDate }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
        // data-testid={ `customer_order_details__
        // element-order-details-label-delivery-status-${index}` }
      >
        { delivetyStatus }
      </p>
    </div>
  );
}

OrderDetailsHeader.propTypes = {
  id: Proptypes.number,
  name: Proptypes.string,
  date: Proptypes.string,
}.isRequired;
