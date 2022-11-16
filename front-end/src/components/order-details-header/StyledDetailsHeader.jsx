import styled from 'styled-components';

const StyledDetailsHeader = styled.div`
  display: flex;
  flex-shrink: 1;
  border: 0.5px solid #00000029;
  box-shadow: 0 2px 2px #00000065;
  gap: 10px;
  padding: 8px;
  overflow: hidden;
  font-weight: bold;
  width: 90%;
  margin-top: 30px;
  padding: 25px 30px;
  background-color: #fff;

  

  .order {
    display: flex;
    width: 10%;
    /* flex: 1 1 auto; */
    flex-direction: column;
    justify-content: center;
    padding: 0 15px ;
  }

  .price {
    /* position: absolute; */
    /* bottom: 0; */
    /* right: 0; */
  }

  .top {
    display: flex;
    font-weight: bold;
  }

  .seller {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    justify-content: flex-start;
    padding: 5px;
    font-weight: normal;
    width: 39%;
    /* width: 300px; */
  }

  .status { 
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: var(--primary-color);
    color: var(--light-text);
    width: 10%;
    height: 40px;
    justify-content: center;
  }

  .date {
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: var(--tertiary-color);
    color: var(--light-text);
    width: 10%;
    justify-content: center;
  }
  
  button {
    border-radius: 5px;
    border: none;
    padding: 4px 16px;
    /* background-color: var(--primary-color); */
    background-color: var(--secondary-color);
    color: var(--dark-text);
    font-weight: bold;
    cursor: pointer;
    /* opacity: 0.3; */
  }

  button:disabled {
    opacity: 0.3;
  }


`;

export default StyledDetailsHeader;
