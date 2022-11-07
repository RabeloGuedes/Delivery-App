import { useEffect, useState } from 'react';
// import { useContext } from 'react';
import NavBar from '../../components/navbar/NavBar';
import CardOrders from '../../components/card-orders/CardOrders';
// import { getAllOrders } from '../../services/APIs';
// import MainContext from '../../context/MainContext';

export default function Orders() {
  // const {
  //   orders,
  //   // setOrders,
  // } = useContext(MainContext);
  const [orders, setOrders] = useState([]);

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
