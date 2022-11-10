import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  width: 100%;
  height: 50px;

  .nav-left, .nav-right {
    display: flex;
    align-items: center;
    height: 100%;  
  
    .nav-button {
      display: flex;
      align-items: center;
      background-color: var(--secondary-color);
      padding: 10px;
      height: 100%;

      a {
        color: var(--dark-text);
        font-weight: bold;
      }
    }

    h3 {
      display: flex;
      align-items: center;
      padding: 10px;
      color: var(--light-text);
      background-color: var(--tertiary-color);
      height: 100%;
    }
    

    button {
      border: none;
      display: flex;
      align-items: center;
      background-color: var(--quaternary-color);
      color: var(--light-text);
      padding: 10px;
      height: 100%;
      font-weight: bolder;
      font-size: 1em;
    }
  }
  
`;

export default StyledNavBar;
