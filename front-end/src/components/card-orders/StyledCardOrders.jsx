import styled from 'styled-components';

const StyledCardOrders = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  /* flex-grow: 1; */
  flex-shrink: 1;
  border: 0.5px solid #00000029;
  box-shadow: 0 2px 2px #00000065;
  max-width: 400px;
  height: 100px;
  overflow: hidden;
  padding: 20px;
  gap: 10px;

  .order {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    /* width: 90px; */
    padding: 0 15px ;
    font-weight: bold;
  }

  .top {
    display: flex;
    font-weight: bold;
    gap: 10px;
  }

  .main {
    display: flex;
    flex: 4 1 auto;
    flex-direction: column;
    /* background-color: aliceblue; */
    padding: 5px;
  }

  .status { 
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--secondary-color);
    min-width: 100px;
    max-width: 100px;
    border-radius: 5px;
    margin: 4px 2px;
    padding: 0 16px ;
  }

  .top-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      border-radius: 5px;
      margin: 4px;
      padding: 4px 16px;
      background-color: var(--tertiary-color);
      color: var(--light-text);
    }
  }

  p {
    padding: 2px;
  }

`;

export default StyledCardOrders;
