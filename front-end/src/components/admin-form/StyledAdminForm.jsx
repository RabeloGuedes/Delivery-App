import styled from 'styled-components';

const StyledAdminForm = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 0.5px solid #00000029;
    box-shadow: 0 2px 2px #00000065;
    margin-right: 40px;
    background-color: #fff;
    padding: 20px;
    width: 100%;
  }

  button {
    background-color: var(--primary-color);
    border-radius: 5px;
    width: 25%;
    padding: 15px;
    color: var(--bg-light);
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    margin-left: 30px;
  }

  .InputsAdmin {
    width: 90%;
    padding: 10px;
  }

  select {
    padding: 10px;
    border: none;
    border-radius: 5px;
    outline: 1px solid var(--primary-color);
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #fff;
  }

`;

export default StyledAdminForm;
