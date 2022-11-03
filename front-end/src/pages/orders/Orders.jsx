import { useState, useEffect } from 'react';
import NavBar from '../../components/navbar/NavBar';
import CardOrders from '../../components/card-orders/CardOrders';
import { getAllOrders } from '../../services/APIs';

export default function Orders() {
  const [orders, setOrders] = useState([
    { orderId: 1, delivetyStatus: 'Entregue', orderDate: '01/01/2021', orderPrice: 10 },
    { orderId: 2, delivetyStatus: 'Entregue', orderDate: '01/02/2021', orderPrice: 10 },
    { orderId: 3, delivetyStatus: 'Entregue', orderDate: '01/04/2021', orderPrice: 10 },
  ]);

  useEffect(() => {
    async function getitems() {
      const { data } = await getAllOrders();
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
              key={ item.orderId }
              index={ index }
            />
          ))
        }
      </div>
    </div>
  );
}
