import styled from 'styled-components';

const StyledDetailsHeader = styled.div`
  display: flex;
  /* justify-content: space-around; */
  /* align-items: center; */
  background-color: var(--light-text);
  /* flex-grow: 1; */
  flex-shrink: 1;
  border: 0.5px solid #00000029;
  box-shadow: 0 2px 2px #00000065;
  /* max-width: 400px; */
  /* height: 100px; */
  gap: 10px;
  padding: 8px;
  overflow: hidden;
  font-weight: bold;
  /* position: relative; */

  .order {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    /* width: 90px; */
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
    justify-content: center;
    padding: 5px;
    font-weight: normal;
  }

  .status { 
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: yellowgreen;
    min-width: 100px;
    border-radius: 5px;
    margin: 4px 2px;
    padding: 0 16px ;
  }

  .date {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    margin: 4px;
    padding: 4px 16px;
    background-color: var(--light-text);
    background-color: aliceblue; 
  }

  button {
    border-radius: 5px;
    border: none;
    padding: 4px 16px;
    background-color: var(--primary-color);
    color: var(--light-text);
    font-weight: bold;
    /* opacity: 0.3; */
  }

  button:disabled {
    /* background-color: var(--primary-color); */
    /* background : #00000049; */
    /* background : #9BC1BC; */
    opacity: 0.3;
  }


`;

export default StyledDetailsHeader;
