import Containerhome from "./../../Style/Containerhome";
import logoAmarelo from './../../../assets/logo-plano-amarelo.png';
import logoBranco from './../../../assets/logo-plano-branco.png';
import logoVerde from './../../../assets/logo-plano-Verde.png';

import styled from 'styled-components';
import { useState, useContext, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import UseContext from './../../contexts/UseContext';

export default function SubscriptionsPage(){
    const navigate = useNavigate();
    const [planos, setPlanos] = useState(null);
    const { token } = useContext(UseContext);

    useEffect(()=>{ 
        const config = {
            headers: { Authorization: `Bearer ${token}` }
          }
        const url = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships';     
        const promise = axios.get(url, config);
       
        promise.then(resposta => {
            setPlanos(resposta.data);
            console.log(resposta.data);
        });
    
        promise.catch( erro =>{
            alert(erro.response.data.message);
            console.log(erro);
        });

      },[]);



    return(
        <Containerhome>
            <Div>
                Escolha seu Plano
            </Div>
            <Button
                onClick={()=>navigate(`/subscriptions/${planos[0].id}`)}
            >
                <img src={planos!=null?planos[0].image:logoBranco} alt="plus" />
                <p>{planos!=null?planos[0].price:"teste"}</p>
            </Button>
            <Button
                onClick={()=>navigate(`/subscriptions/${planos[1].id}`)}
            >
                <img src={planos!=null?planos[1].image:logoAmarelo} alt="plus" />
                <p>{planos!=null?planos[1].price:"teste"}</p>
            </Button>
            <Button
                onClick={()=>navigate(`/subscriptions/${planos[2].id}`)}
            >
                <img src={planos!=null?planos[2].image:logoVerde} alt="plus" />
                <p>{planos!=null?planos[2].price:"teste"}</p>
            </Button>
        </Containerhome>
    );
}

const Div = styled.div`
    width: 290px;
    height: 40px;
    color: #FFFFFF;

    font-family: Roboto;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
`

const Button = styled.button`
    width: 291px;
    height: 180px;
    display: flex;
    align-items: center;
    padding: 15px;
    border: 3px solid #7E7E7E;
    border-radius: 10px;
    margin: 5px;
    background-color: #0E0E13;
    color: #FFFFFF;

    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    p{
        width: 50%;
    }
    img{
        width: 139px;
        height: 95px;
    }
    
`