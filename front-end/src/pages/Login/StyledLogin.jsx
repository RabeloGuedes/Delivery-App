import styled from "styled-components";

const StyledLogin = styled.section`
  width: 100%;
  height: 100vh;
  background-color: var(--bg-light);
  display: flex;
  justify-content: center;
  align-items: center;

  > form {
    width: 80%;
    max-width: 450px;
    height: 450px;
    background-color: var(--light-text);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border: 0.5px solid var(--primary-color);

    > h2 {
      font-size: 2rem;
      color: var(--dark-text);
    }

    > span {
      color: #c51f1f;
    }

    .login-button {
      width: 70%;
      padding: 10px;
      border: none;
      border-radius: 5px;
      color: var(--light-text);
      background-color: ${(props) => props.loginButtonColor};
      cursor: ${(props) => props.loginButtonCursor};
    }

    .register-button {
      cursor: pointer;
      width: 70%;
      padding: 10px;
      border: 1px solid var(--primary-color);
      background-color: transparent;
      border-radius: 5px;
      color: var(--primary-color);
    }
  }
`;

export default StyledLogin;
