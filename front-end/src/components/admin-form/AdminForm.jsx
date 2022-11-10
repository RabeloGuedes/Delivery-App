import React, { useState, useContext } from 'react';
import Proptypes from 'prop-types';
import Input from '../Input/Input';
import { registerNewUser, getUsers } from '../../services/APIs';
import MainContext from '../../context/MainContext';

export default function AdminForm() {
  const [inputsValues, setInputsValues] = useState({});
  const { setUsers } = useContext(MainContext);

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'John Doe',
      dataTestid: 'admin_manage__input-name',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Johndoe@email.com',
      dataTestid: 'admin_manage__input-email',
      required: true,
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: '******',
      dataTestid: 'admin_manage__input-password',
      required: true,
    },
  ];

  const handleChange = ({ target }) => {
    setInputsValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const createUser = async () => {
    await registerNewUser({ ...inputsValues });
    setInputsValues({ name: '', email: '', password: '', role: '' });
    const users = await getUsers();
    console.log(users);
    setUsers(users.data);
  };

  return (
    <div className="register">
      <div>
        {
          inputs.map((input) => (
            <Input
              key={ input.id }
              onChange={ handleChange }
              value={ inputsValues[input.name] }
              { ...input }
            />
          ))
        }
        <select
          id="role"
          name="role"
          onChange={ handleChange }
          data-testid="admin_manage__select-role"
        >
          <option value="seller">Vendedor</option>
          <option value="administrator">Admin</option>
          <option value="customer">Customer</option>
        </select>
        <button
          data-testid="admin_manage__button-register"
          type="button"
          // disabled={ disabled }
          onClick={ createUser }
        >
          CADASTRAR
        </button>
      </div>
      {/* <div data-testid="admin_manage__element-invalid-register">
        {messageError ? (
          <p>Campos inválidos!</p>
        ) : null}
      </div> */}
    </div>
  );
}

AdminForm.propTypes = {
  admin: Proptypes.arrayOf(Proptypes.object),
}.isRequired;
