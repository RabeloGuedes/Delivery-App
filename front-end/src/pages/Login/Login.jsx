export default function Login() {
  const login = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <form onSubmit={ (e) => login(e) }>
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
