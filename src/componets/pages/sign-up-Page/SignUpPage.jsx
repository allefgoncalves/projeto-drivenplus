import Containerhome from "./../../Style/Containerhome";
import SignUp from './SignUp';
import logo from './../../../assets/logo-home.png';

import { styled } from 'styled-components';
import {Link} from "react-router-dom";

export default function SignUpPage(){
    return(
        <Containerhome>
            <img src={logo}/>
            <SignUp />
            <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
        </Containerhome>
    );
}
const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FF4791;
`