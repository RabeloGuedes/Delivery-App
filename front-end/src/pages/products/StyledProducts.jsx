import styled from 'styled-components';

const StyledProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--light-text);
  position: relative;

  > button {
    cursor: pointer;
    width: 80px;
    padding: 15px;
    position: fixed;
    bottom: 15px;
    right: 10px;
    border: none;
    border-radius: 5px;
    background-color: var(--primary-color);

    h3 {
      color: var(--light-text)
    }
  }


  .products-container { 
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    /* padding: 10px; */
    gap: 10px;
    background-color: var(${(props) => props.theme});

    /* div:nth-child(1) {
      div {
        img {
          height: 200px;
          width: 80px;
        }
      }
      
    } */
  }
`;

export default StyledProducts;
