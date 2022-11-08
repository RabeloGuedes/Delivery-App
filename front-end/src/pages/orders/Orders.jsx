import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import CardOrders from '../../components/card-orders/CardOrders';
import { getOrdersByUserId, getOrdersBySellerId } from '../../services/APIs';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    async function getitems() {
      const role = pathname.split('/')[1];
      console.log('role', role);
      if (role === 'customer') {
        const { data } = await getOrdersByUserId();
        console.log('result', data);
        setOrders(data);
      } else {
        const { data } = await getOrdersBySellerId();
        console.log('result', data);
        setOrders(data);
      }
    }
    getitems();
  }, [pathname]);

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
