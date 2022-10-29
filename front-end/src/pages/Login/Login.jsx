import { useState } from 'react';
import login from '../../services/APIs';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toLogin = async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    setEmail(emailInput.value);
    setPassword(passwordInput.value);
    console.log(email, 'email');
    console.log(password, 'senha');
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
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            placeholder="******"
            autoComplete="off"
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </section>
  );
}
