import { useContext, useEffect } from 'react';
import NavBar from '../../components/navbar/NavBar';
import AdminTable from '../../components/admin-table/AdminTable';
import AdminForm from '../../components/admin-form/AdminForm';
import MainContext from '../../context/MainContext';
import StyledManage from './StyledManage';

import { getUsers } from '../../services/APIs';

export default function Manage() {
  const {
    users,
    setUsers,
  } = useContext(MainContext);

  useEffect(() => {
    async function getitems() {
      const { data } = await getUsers();
      setUsers(data);
    }
    getitems();
  }, [setUsers, users]);

  return (
    <>
      <NavBar />
      <StyledManage>
        <AdminForm />
        { (users?.length > 0)
          ? <AdminTable users={ users } setUsers={ setUsers } />
          : <p> Não há usuários cadastrados. </p> }
      </StyledManage>
    </>
  );
}
