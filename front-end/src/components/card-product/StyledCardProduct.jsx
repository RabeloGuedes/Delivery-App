import styled from 'styled-components';

const StyledCardProduct = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction : column;
  align-items: center;
  background-color: #fff;
  flex: 1 1 auto;
  border: 0.5px solid #00000029;
  box-shadow: 0 2px 2px #00000065;
  position: relative;
  max-width: 200px;


  > p {
    position: absolute;
    top: 5px;
    left: 5px;
    padding: 5px;
    background-color: var(--light-text);
    border-radius: 5px;
    font-weight: bold;
  }
  
  .footer {
    gap: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: var(--bg-light);
    width: 100%;

    > p {
      line-break: auto;
      text-align: center;
      font-size: 0.9em;
      margin: 4px 0;
    }
  }


  .buttons-container {
    display: flex;
    margin-bottom: 4px;

    button {
      padding: 5px;
      border: none;
      background-color: var(--primary-color);
      color: var(--light-text);
      width: 25px;
      font-weight: bolder;
    }

    .left {
      border-radius: 5px 0 0 5px;
    }
    .right {
       border-radius: 0 5px 5px 0;
    }


    input {
      width: 50px;
      border : none;
      text-align: center; 
      border: 1px solid;
      border-color: var(--primary-color);
    }

    input[type=number]::-webkit-inner-spin-button { 
      -webkit-appearance: none;
    }

    input[type=number] { 
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }

  .img-container {
    display: flex;
    justify-content: center;
  }

  img {
    max-width: 200px;
    min-width: 150px;
    height: 200px;
    background-color: var(--bg-light);
  }
  /* @media screen and (min-width: 400px) {
    background-color: black;
  } */
`;

export default StyledCardProduct;
