import { useContext } from 'react';
import MainContext from '../../context/MainContext';
import NavBar from '../../components/navbar/NavBar';
import OrderDetailsHeader from '../../components/order-details-header/OrderDetailsHeader';
import OrderDetailsItem from '../../components/order-details-item/OrderDetailsItem';

const itemsMocks = [
  [
    { id: 1, item: 'Hkyuu1', description: 'Anime', quantity: 1, price: 10, subtotal: 10 },
    { id: 2, item: 'Hkyuu2', description: 'Anime', quantity: 1, price: 10, subtotal: 10 },
    { id: 3, item: 'Hkyuu3', description: 'Anime', quantity: 1, price: 10, subtotal: 10 },
  ],
  [
    { id: 4, item: 'Hkyuu1', description: 'Anime', quantity: 1, price: 10, subtotal: 10 },
    { id: 5, item: 'Hkyuu2', description: 'Anime', quantity: 1, price: 10, subtotal: 10 },
    { id: 6, item: 'Hkyuu3', description: 'Anime', quantity: 1, price: 10, subtotal: 10 },
  ],
];

const populateOrderDetailsItem = (orders) => orders.map((order) => (
  <div
    key={ order.id }
  >
    <OrderDetailsItem
      { ...order }
    />
  </div>
));

export default function OrdersDetails() {
  const {
    orders,
  } = useContext(MainContext);

  return (
    <div>
      <NavBar />
      <OrderDetailsHeader
        { ...orders[1][1] }
      />
      { populateOrderDetailsItem(itemsMocks[1]) }
    </div>
  );
}
