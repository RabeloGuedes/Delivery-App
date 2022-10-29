import { useContext } from 'react';
import login from '../../services/APIs';
import MainContext from '../../context/MainContext';

export default function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(MainContext);

  const toLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
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
        <button type="submit">Entrar</button>
      </form>
    </section>
  );
}
