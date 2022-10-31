import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../../services/APIs';
import Input from '../../components/Input/Input';

const SIX = 6;

export default function Login() {
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  });
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    setIsLoginButtonDisabled(() => (
      !emailRegex.test(loginValues.email)
      || loginValues.password.length < SIX
    ));
  }, [loginValues]);

  const inputs = [
    {
      id: 1,
      className: 'login-input',
      type: 'email',
      placeholder: 'your@email.com',
      dataTestid: 'common_login__input-email',
      errorMessage: 'Email inválido',
      errorTestId: 'common_login__element-invalid-email',
      required: true,
    },
    {
      id: 2,
      className: 'login-input',
      type: 'password',
      placeholder: '******',
      dataTestid: 'common_login__input-password',
      errorMessage: 'Senha inválida',
      errorTestId: 'common_login__element-invalid-password',
      required: true,
    },
  ];

  const toLogin = async (e) => {
    e.preventDefault();
    try {
      await login(loginValues.email, loginValues.password);
      navigate('/customer/products');
    } catch (error) {
      console.log(error);
    }
  };

  const goToRegistration = () => {
    navigate('/registre');
  };

  const onChange = ({ target }) => {
    setLoginValues((prevState) => ({
      ...prevState,
      [target.type]: target.value,
    }));
  };

  return (
    <section>
      <form onSubmit={ (e) => toLogin(e) }>
        { inputs.map((input) => (
          <Input
            key={ input.id }
            { ...input }
            value={ loginValues[input.type] }
            onChange={ (e) => onChange(e) }
          />
        ))}
        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ isLoginButtonDisabled }
        >
          Entrar
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ goToRegistration }
        >
          Ainda não tenho conta
        </button>
      </form>
    </section>
  );
}
