import { useContext } from 'react';
import Proptypes from 'prop-types';
import { deleteUser } from '../../services/APIs';
import MainContext from '../../context/MainContext';

export default function AdminTable() {
  const { users, setUsers } = useContext(MainContext);
  function geRows() {
    return (
      users.map((user, index) => (
        <tr key={ index } className={ index % 2 === 0 ? 'Even' : 'Odd' }>
          <td
            data-testid={ `admin_manage__element-user-table-item-number-${index}` }
          >
            {index + 1}
          </td>
          <td
            data-testid={ `admin_manage__element-user-table-name-${index}` }
          >
            {user.name}
          </td>
          <td
            data-testid={ `admin_manage__element-user-table-email-${index}` }
          >
            {user.email}
          </td>
          <td
            data-testid={ `admin_manage__element-user-table-role-${index}` }
          >
            {user.type}
          </td>
          <td>
            <button
              type="button"
              data-testid={ `admin_manage__element-user-table-remove-${index}` }
              onClick={ async () => {
                await deleteUser(user.id);
                setUsers(users.filter(({ id }) => user.id !== id));
              } }
            >
              EXCLUIR
            </button>
          </td>
        </tr>
      ))
    );
  }

  return (
    <div className="OrderTable">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          { users && (
            geRows()
          )}
        </tbody>
      </table>
    </div>
  );
}

AdminTable.propTypes = {
  admin: Proptypes.arrayOf(Proptypes.object),
}.isRequired;
