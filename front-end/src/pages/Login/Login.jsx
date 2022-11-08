import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, isTheUserAuthenticated } from '../../services/APIs';
import Input from '../../components/Input/Input';
import MainContext from '../../context/MainContext';

const SIX = 6;

export default function Login() {
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  });
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const { setUser } = useContext(MainContext);

  const navigate = useNavigate();

  useEffect(() => {
    const emailRegex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const getRole = async () => {
      const role = await isTheUserAuthenticated();
      if (role !== null) {
        navigate(`/${role?.data}/products`);
      }
    };
    getRole();
    setIsLoginButtonDisabled(() => (
      !emailRegex.test(loginValues.email)
      || loginValues.password.length < SIX
    ));
  }, [loginValues, navigate]);

  const inputs = [
    {
      id: 1,
      className: 'login-input',
      type: 'email',
      placeholder: 'your@email.com',
      dataTestid: 'common_login__input-email',
      required: true,
    },
    {
      id: 2,
      className: 'login-input',
      type: 'password',
      placeholder: '******',
      dataTestid: 'common_login__input-password',
      required: true,
    },
  ];

  const toLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(loginValues.email, loginValues.password);
      setUser(data.name);
      localStorage.setItem('user', JSON.stringify({ ...data }));
      if (data.role === 'customer') {
        navigate('/customer/products');
      } else if (data.role === 'seller') {
        navigate('/seller/orders');
      } else {
        navigate('/admin/manage');
      }
    } catch ({ message }) {
      if (message.includes('404')) {
        setInvalidEmail(true);
      }
    }
  };

  const goToRegistration = () => {
    navigate('/register');
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
        {
          invalidEmail
            && (
              <span data-testid="common_login__element-invalid-email">
                Incorrect Email or Password!
              </span>
            )
        }
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
