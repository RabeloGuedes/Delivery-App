import styled from 'styled-components';

const StyledInput = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  width: 70%;

  > h4 {
    margin-left: 15px;
    font-weight: 400;
  }

  > input {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 5px;
    outline: 1px solid var(--primary-color)
  }
`;

export default StyledInput;
