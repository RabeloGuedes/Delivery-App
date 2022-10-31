import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../../services/APIs';
import MainContext from '../../context/MainContext';

export default function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(MainContext);
 
  const navigate = useNavigate();

  const toLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/customer/products');
    } catch (error) {
      console.log(error);
    }
  };

  const goToRegistration = () => {
    navigate('/registre');
  };

  return (
    <section>
      <form onSubmit={ (e) => toLogin(e) }>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            autoComplete="off"
            onChange={ ({ target }) => setEmail(target.value) }
            value={ email }
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            placeholder="**"
            autoComplete="off"
            onChange={ ({ target }) => setPassword(target.value) }
            value={ password }
            data-testid="common_login__input-password"
          />
        </label>
        <button
          type="submit"
          data-testid="common_login__button-login"
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
