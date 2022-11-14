import styled from 'styled-components';

const StyledOrderTable = styled.div`
background-color: var(--light-text);

td:nth-child(1) {
  background-color: var(--primary-color);
  border-radius: 5px 0 0 5px;
  width: 5%;
}

td:nth-child(2) {
  width: 50%;
}

td:nth-child(3) {
  background-color: var(--secondary-color);
}

td:nth-child(4) {
  background-color: var(--primary-color);
  width: 15%;
}

td:nth-child(5) {
  background-color: var(--secondary-color);
  width: 15%;
}

button {
  width: 100%;
  background-color: var(--quaternary-color);
  cursor: pointer;
  border: none;
  border-radius: 0 5px 5px 0;
}

`;

export default StyledOrderTable;
