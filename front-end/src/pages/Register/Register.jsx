import { useState } from 'react';
import Input from '../../components/Input/Input';
import { create } from '../../services/APIs';

export default function Register() {
  const [registerValues, setRegisterValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChange = ({ target }) => {
    setRegisterValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const toRegister = async (e) => {
    e.preventDefault();
    try {
      console.log(await create(registerValues));
    } catch (error) {
      console.log(error);
    }
  };

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'John Doe',
      dataTestId: 'common_register__input-name',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Johndoe@email.com',
      dataTestId: 'common_register__input-email',
      required: true,
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: '******',
      dataTestId: 'common_register__input-password',
      required: true,
    },
  ];

  return (
    <section>
      <form onSubmit={ (e) => toRegister(e) }>
        {
          inputs.map((input) => (
            <Input
              key={ input.id }
              { ...input }
              value={ registerValues[input.name] }
              onChange={ onChange }
            />
          ))
        }
        <button
          type="submit"
        >
          CADASTRAR
        </button>
      </form>
    </section>
  );
}
