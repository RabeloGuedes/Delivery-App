import styled from 'styled-components';

const StyledOrderTable = styled.div`
background-color: #fff;
width: 100%;
padding: 30px;

.Even {
  background-color: var(--row-table-dark);
}

.Odd {
  background-color: var(--row-table-light);
}

td:nth-child(1) {
  background-color: var(--primary-color);
  border-radius: 5px 0 0 5px;
  width: 5%;
  color: var(--light-text);
  font-weight: bold;
  height: 40px;
}

td:nth-child(2) {
  width: 50%;
  /* background-color: var(--light-text); */
  text-align: left;
  padding-left: 8px;
}

td:nth-child(3) {
  background-color: var(--secondary-color);
  color: var(--dark-text);
  background-color: var(--tertiary-color);
  color: var(--light-text);
  width: 10%;
  font-weight: bold;
}

td:nth-child(4) {
  background-color: var(--secondary-color);
  background-color: var(--tertiary-color);
  color: var(--light-text);
  width: 20%;
  font-weight: bold;
}

td:nth-child(5) {
  background-color: var(--primary-color);
  width: 20%;
  border-radius: 0 5px 5px 0;
  color: var(--light-text);
  font-weight: bold;
}

table {
  background-color: #fff;
  width: 90%;
  text-align: center;
  /* height: 100px; */
  /* margin: 2px; */
  width: 100%;
}

`;

export default StyledOrderTable;
