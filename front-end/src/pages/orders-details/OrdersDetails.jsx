import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import OrderDetailsHeader from '../../components/order-details-header/OrderDetailsHeader';
import OrderDetailsItem from '../../components/order-details-item/OrderDetailsItem';
import { getSaleById } from '../../services/APIs';

export default function OrdersDetails() {
  const { id } = useParams();
  const [customerOrder, setCustomerOrder] = useState([]);
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    async function getitems() {
      const { data } = await getSaleById(id);
      setCustomerOrder(data.sale);
      setCustomerData(data);
    }
    getitems();
  }, [id]);

  return (
    <div>
      <NavBar />
      { (customerOrder.length > 0)
        && (
          <>
            <OrderDetailsHeader { ...customerData } />
            <OrderDetailsItem { ...customerData } />
          </>
        )}
    </div>
  );
}
