import React, { useEffect, useState, useContext } from 'react';
import Proptypes from 'prop-types';
import Input from '../Input/Input';
import { registerNewUser, getUsers } from '../../services/APIs';
import MainContext from '../../context/MainContext';

const SIX = 6;
const TWELVE = 12;

export default function AdminForm() {
  const defaultValues = { name: '', email: '', password: '', role: 'customer' };
  const [inputsValues, setInputsValues] = useState(defaultValues);

  const [invalidRegisterValues, setInvalidRegisterValues] = useState(false);
  const [isRegisterButtonDisabled, setIsRegisterButtonDisabled] = useState(false);
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
    setInvalidRegisterValues(false);
  };

  const handleSubmit = async () => {
    const formInputs = document.querySelectorAll('input');
    formInputs.forEach((input) => {
      input.value = '';
    });
  };

  const createUser = async () => {
    try {
      await registerNewUser({ ...inputsValues });
      setInputsValues(defaultValues);
      const users = await getUsers();
      console.log(users);
      setUsers(users.data);
    } catch (error) {
      setInvalidRegisterValues(true);
    }
    handleSubmit();
  };

  useEffect(() => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    setIsRegisterButtonDisabled(() => (
      !emailRegex.test(inputsValues.email)
      || inputsValues.password.length < SIX
      || inputsValues.name.length < TWELVE
    ));
  }, [inputsValues]);

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
          <option value="customer">Customer</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Admin</option>
        </select>
        <button
          data-testid="admin_manage__button-register"
          type="button"
          disabled={ isRegisterButtonDisabled }
          onClick={ createUser }
        >
          CADASTRAR
        </button>
      </div>
      {
        invalidRegisterValues
          && (
            <span
              data-testid="common_register__element-invalid_register"
            >
              Invalid data!
            </span>
          )
      }
    </div>
  );
}

AdminForm.propTypes = {
  admin: Proptypes.arrayOf(Proptypes.object),
}.isRequired;
