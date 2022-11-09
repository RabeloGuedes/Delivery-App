import { useState } from 'react';
// import { useState, useEffect } from 'react';
import NavBar from '../../components/navbar/NavBar';
import AdminTable from '../../components/admin-table/AdminTable';
import AdminForm from '../../components/admin-form/AdminForm';

// import { getSaleById } from '../../services/APIs';

export default function Manage() {
  const [adminData] = useState([
    {
      id: 1,
      name: 'João',
      email: 'joao@gmail.com',
      type: 'vendedor',
    },
    {
      id: 3,
      name: 'João2',
      email: 'joao2@gmail.com',
      type: 'vendedor',
    },
    {
      id: 3,
      name: 'João3',
      email: 'joao3@gmail.com',
      type: 'cliente',
    },
  ]);

  // useEffect(() => {
  //   async function getitems() {
  //     const { data } = await getSaleById(id);
  //     console.log(data);
  //     setAdminData(data);
  //   }
  //   getitems();
  // }, [id]);

  return (
    <div>
      <NavBar />
      {console.log(adminData)}
      { (adminData?.length > 0)
        && (
          <>
            <AdminForm />
            <AdminTable users={ adminData } />
          </>
        )}
    </div>
  );
}
