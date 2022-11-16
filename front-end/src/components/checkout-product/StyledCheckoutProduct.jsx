import styled from 'styled-components';

const StyledCheckoutProduct = styled.tr`
  background-color: var(--light-text);

.Even {
  background-color: var(--row-table-dark);
}

.Odd {
  background-color: var(--row-table-light);
}

  td:nth-child(1) {
    background-color: var(--primary-color);
    /* background-color: var(--tertiary-color); */
    border-radius: 5px 0 0 5px;
    width: 8%;
    color: var(--light-text);
    font-weight: bold;
    height: 40px;
  }
  
  td:nth-child(2) {
    width: 50%;
    text-align: left;
    padding-left: 8px;
  }

  td:nth-child(3) {
    background-color: var(--secondary-color);
    background-color: var(--tertiary-color);
    color: var(--dark-text);
    color: var(--light-text);
    font-weight: bold;
  }

  td:nth-child(4) {
    background-color: var(--secondary-color);
    background-color: var(--tertiary-color);
    color: var(--light-text);
    width: 15%;
    /* color: var(--dark-text); */
    font-weight: bold;
  }
  
  td:nth-child(5) {
    background-color: var(--primary-color);
    color: var(--light-text);
    width: 15%;
    color: var(--light-text);
    font-weight: bold;
  }

  button {
    width: 100%;
    padding: 2px;
    background-color: var(--quaternary-color);
    cursor: pointer;
    border: none;
    border-radius: 0 5px 5px 0;
    color: var(--light-text);
    font-weight: bold;
    padding: 5px;
  }

`;

export default StyledCheckoutProduct;
