import Login from './Login';
import Containerhome from '../../Style/Containerhome';
import logo from './../../../assets/logo-home.png';

import {Link} from "react-router-dom";
import styled from 'styled-components';

export default function HomePage(){
    
    return(
        <Containerhome>
            <img src={logo} />
            <Login />
            <StyledLink to="/sign-up">Não tem uma conta? Cadastre-se!</StyledLink>
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