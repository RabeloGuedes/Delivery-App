import { useContext } from 'react';
import MainContext from '../../context/MainContext';
import NavBar from '../../components/navbar/NavBar';
import OrderDetailsHeader from '../../components/order-details-header/OrderDetailsHeader';
import OrderDetailsItem from '../../components/order-details-item/OrderDetailsItem';

const itemsMockCicrano = [
  { id: 1, item: 'Haikyuu1', description: 'Anime', quantity: 1, price: 10, subtotal: 10 },
  { id: 2, item: 'Haikyuu2', description: 'Anime', quantity: 1, price: 10, subtotal: 10 },
  { id: 3, item: 'Haikyuu3', description: 'Anime', quantity: 1, price: 10, subtotal: 10 },
];
const itemsMockZe = [
  { id: 4, item: 'Haikyuu1', description: 'Anime', quantity: 1, price: 10, subtotal: 10 },
  { id: 5, item: 'Haikyuu2', description: 'Anime', quantity: 1, price: 10, subtotal: 10 },
  { id: 6, item: 'Haikyuu3', description: 'Anime', quantity: 1, price: 10, subtotal: 10 },
];

const populateOrderDetailsItem = (itemsMocks) => itemsMocks.map((order) => (
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
        { ...orders[1] }
      />
      { populateOrderDetailsItem(itemsMock) }
    </div>
  );
}
