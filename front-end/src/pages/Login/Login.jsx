import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import login from '../../services/APIs';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigation();

  const toLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      console.log(user);
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
            placeholder="******"
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
          data-testid="common_login__button-login"
          onClick={ goToRegistration }
        >
          Ainda não tenho conta
        </button>
      </form>
    </section>
  );
}
