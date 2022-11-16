import styled from 'styled-components';

const StyledAdminTable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #00000029;
  box-shadow: 0 2px 2px #00000065;
  margin-right: 40px;
  background-color: #fff;
  padding: 20px;
  width: 100%;

  .Even {
  background-color: var(--row-table-dark);
  }

  .Odd {
    background-color: var(--row-table-light);
  }

  table {
    background-color: #fff;
    width: 90%;
    text-align: center;

    th {
      padding-bottom: 5px;
    }

    td:nth-child(1) {
    background-color: var(--primary-color);
    border-radius: 5px 0 0 5px;
    width: 5%;
    height: 40px;
    color: var(--light-text);
      font-weight: bold;
    }

    td:nth-child(2) {
      width: 50%;
    }

    td:nth-child(3) {
      background-color: var(--tertiary-color);
      color: var(--light-text);
      font-weight: bold;
    }

    td:nth-child(4) {
      background-color: var(--primary-color);
      color: var(--light-text);
      font-weight: bold;
      width: 15%;
    }

    button {
      width: 100%;
      padding: 5px;
      background-color: var(--quaternary-color);
      color: var(--light-text);
      font-weight: bold;
      cursor: pointer;
      border: none;
      border-radius: 0 5px 5px 0;
    }
  }

`;

export default StyledAdminTable;
