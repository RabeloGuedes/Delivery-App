import styled from 'styled-components';

const StyledProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--light-text);
  position: relative;

  > button {
    cursor: pointer;
    width: 180px;
    padding: 15px 30px;
    position: fixed;
    bottom: 35px;
    right: 70px;
    border: none;
    border-radius: 5px;
    background-color: var(--primary-color);

    h3 {
      color: var(--light-text);
      font-size: 1.1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
    }
  }

  .products-container { 
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: var(${(props) => props.theme});
  }

  @media screen and (max-width: 400px) {
      > button {
        width: 100%;
        bottom: 0;
        left: 0;

        h3 {
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 5px;
        }
      }
      
    }
`;

export default StyledProducts;
