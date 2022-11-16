import styled from 'styled-components';

const StyledCheckout = styled.section`
  background-color: var(--light-text);

  h2 {
    font-size: 1.2rem;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 100px;
  }

  > div {
    margin-left: 100px;
    margin-right: 50px;

    h3 {
    padding: 20px;
    background-color: var(--primary-color);
    border-radius: 5px;
    width: 15%;
    color: var(--bg-light);
    margin-top: 20px;
    text-align: center;
    }
  }

  > .card-container {
    border: 0.5px solid #00000029;
    box-shadow: 0 2px 2px #00000065;
    margin-right: 40px;
    background-color: #fff;
    padding: 20px;
    margin-right: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      width: 100%;
    }

    table {
      background-color: #fff;
      width: 90%;
      text-align: center;
      height: 100px;
    }
  }

  form {
    border: 0.5px solid #00000029;
    box-shadow: 0 2px 2px #00000065;
    margin-right: 40px;
    background-color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    .labels-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      
      > label {
        display: flex;
        flex-direction: column;
        gap: 15px;
        flex: 1 1 auto;
        margin: 0 20px;
      }

      > label:nth-child(2) {
        flex: 3 1 auto;
      }
    }

    select {
      padding: 12px;
      border: none;
      border-radius: 5px;
      outline: 1px solid var(--primary-color);
      margin-top: 5px;
      margin-bottom: 5px;
      background-color: #fff;
    }

    input {
      padding: 12px;
      border: none;
      border-radius: 5px;
      outline: 1px solid var(--primary-color);
      margin-top: 5px;
      margin-bottom: 5px;
    }

    input[type=number]::-webkit-inner-spin-button { 
      -webkit-appearance: none;
    }

    input[type=number] { 
      -moz-appearance: textfield;
      appearance: textfield;
    }

    button {
      /* background-color: var(--primary-color); */
      background-color: var(--secondary-color);
      border-radius: 5px;
      width: 25%;
      padding: 15px;
      color: var(--bg-dark);
      font-size: 1.2rem;
      font-weight: bold;
      border: none;
      cursor: pointer;
    }
  }
`;

export default StyledCheckout;
