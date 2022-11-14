import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import OrderDetailsHeader from '../../components/order-details-header/OrderDetailsHeader';
import OrderTable from '../../components/order-table/order-table';
import { getSaleById } from '../../services/APIs';
import StyledOrdersDetails from './StyledOrdersDetails';

export default function OrdersDetails() {
  const { id } = useParams();
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    async function getitems() {
      const { data } = await getSaleById(id);
      console.log(data);
      setCustomerData(data);
    }
    getitems();
  }, [id]);

  return (
    <>
      <NavBar />
      <StyledOrdersDetails>
        { (customerData?.sale?.length > 0)
            && (
              <>
                <OrderDetailsHeader { ...customerData } />
                <OrderTable { ...customerData } />
              </>
            )}
      </StyledOrdersDetails>
    </>
  );
}
