import Containerhome from "./../../Style/Containerhome";
import Dados from "./Dados";
import Card from "./Card";

import styled from 'styled-components';
import { useState, useContext, useEffect} from 'react';
import UseContext from './../../contexts/UseContext';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

export default function Subscriptions_ID_DO_PLANO_Page(){
    const { plano, setPlano } = useContext(UseContext);
    console.log(plano)


    return(
        <Containerhome>
            <TopBar>
                <button></button>
            </TopBar>
            <Model>
                <img src={plano.image} />
                <p>{plano.name}</p>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: white;
    font-family: Roboto;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;

    img{
        width: 139px;
        height: 95px;
        margin-bottom: 0px;
    }
`