import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { create } from '../../services/APIs';

const SIX = 6;
const TWELVE = 12;

export default function Register() {
  const [registerValues, setRegisterValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [invalidRegisterValues, setInvalidRegisterValues] = useState(false);
  const [isRegisterButtonDisabled, setIsRegisterButtonDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    setIsRegisterButtonDisabled(() => (
      !emailRegex.test(registerValues.email)
      || registerValues.password.length < SIX
      || registerValues.name.length < TWELVE
    ));
  }, [registerValues]);

  const onChange = ({ target }) => {
    setRegisterValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
    setInvalidRegisterValues(false);
  };

  const toRegister = async (e) => {
    e.preventDefault();
    try {
      await create({ ...registerValues });
      navigate('/customer/products');
    } catch (error) {
      console.log(error);
      setInvalidRegisterValues(true);
    }
  };

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'John Doe',
      dataTestid: 'common_register__input-name',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Johndoe@email.com',
      dataTestid: 'common_register__input-email',
      required: true,
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: '******',
      dataTestid: 'common_register__input-password',
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
          data-testid="common_register__button-register"
          disabled={ isRegisterButtonDisabled }
        >
          CADASTRAR
        </button>
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
      </form>
    </section>
  );
}
