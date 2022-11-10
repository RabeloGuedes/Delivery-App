import { useState, useEffect } from 'react';
import NavBar from '../../components/navbar/NavBar';
import AdminTable from '../../components/admin-table/AdminTable';
import AdminForm from '../../components/admin-form/AdminForm';

import { getUsers } from '../../services/APIs';

export default function Manage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getitems() {
      const { data } = await getUsers();
      console.log(data);
      setUsers(data);
    }
    getitems();
  }, []);

  return (
    <div>
      <NavBar />
      <AdminForm setUsers={ setUsers } />
      { (users?.length > 0)
        ? <AdminTable users={ users } setUsers={ setUsers } />
        : <p> Não há usuários cadastrados. </p> }
    </div>
  );
}
