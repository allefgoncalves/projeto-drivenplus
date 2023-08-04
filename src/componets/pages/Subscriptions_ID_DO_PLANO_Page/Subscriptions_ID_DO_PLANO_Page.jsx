import Containerhome from "./../../Style/Containerhome";
import Dados from "./Dados";
import Card from "./Card";

import styled from 'styled-components';
import { useState, useContext, useEffect} from 'react';
import UseContext from './../../contexts/UseContext';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Subscriptions_ID_DO_PLANO_Page(){


    return(
        <Containerhome>
            <TopBar>
                <button></button>
            </TopBar>
            <Model>
                <img src="" alt="plus"/>
                <p>Driven Plus</p>
            </Model>
            <Dados />
            <Card />        
        </Containerhome>
    );
}

const TopBar =styled.div`
 background-color: green;
 width: 100%;
 margin-top: 0px;
 position: relative;
 top:0px;
 left: 0px;
    
`

const Model =styled.div`
    
`