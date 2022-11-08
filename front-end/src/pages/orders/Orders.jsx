import { useEffect, useState } from 'react';
import NavBar from '../../components/navbar/NavBar';
import CardOrders from '../../components/card-orders/CardOrders';
import { getOrdersByUserId } from '../../services/APIs';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getitems() {
      const { data } = await getOrdersByUserId();
      console.log('result', data);
      setOrders(data);
    }
    getitems();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="card-orders-container">
        {
          orders.map((item, index) => (
            <CardOrders
              { ...item }
              key={ item.id }
              index={ index }
            />
          ))
        }
      </div>
    </div>
  );
}
