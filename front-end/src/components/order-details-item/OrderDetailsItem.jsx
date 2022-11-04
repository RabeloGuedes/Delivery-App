import Proptypes from 'prop-types';

export default function OrderDetailsItem({
  item,
  description,
  quantity,
  price,
  subtotal,
}) {
  return (
    <div>
      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { item }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { description }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { quantity }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { price }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { subtotal }
      </p>
    </div>
  );
}

OrderDetailsItem.propTypes = {
  id: Proptypes.number,
  name: Proptypes.string,
  date: Proptypes.string,
}.isRequired;
