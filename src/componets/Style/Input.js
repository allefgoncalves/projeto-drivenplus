import { styled } from 'styled-components';

export const ContainerInput =styled.div`
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
`
 export const Input = styled.input`
  height: 45px;
  width: 283px;
  border: 1px solid #DBDBDB;
  background-color: #FFFFFF;
  color: black;
  font-family: 'Lexend Deca', sans-serif;
  padding: 0px 10px;
  margin-bottom: 10px;
  border-radius: 4px;

  ::placeholder {
    color: #BEBEBE;
    font-family: 'Lexend Deca', sans-serif;
  }
`

export const Button = styled.button`
  height: 45px;
  width: 310px;
  background-color: ${(props) => typeof props.active !== 'boolean' || props.active ? "#FF4791" : "#888"};
  color: #FFFFFF;
  font-family: 'Lexend Deca', sans-serif;
  padding: 14px;
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
