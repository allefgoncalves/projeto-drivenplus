import styled from 'styled-components';
import { useState, useContext, useEffect} from 'react';
import UseContext from './../../contexts/UseContext';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Icon } from '@iconify/react';

export default function Dados(){


    return(
    <DadosContainer>
        <div>
        <Icon icon="fluent:clipboard-task-list-rtl-20-regular" color="#FF4791" width="20" height="20" />
            <p>Benefícios:</p>
        </div>
        <div>
            <p>1. Brindes exclusivos</p>
            <p>2. Materiais bônus de web</p>
        </div>
        <div>
            <div>
                <Icon icon="fa-solid:money-bill-wave" color="#FF4791" width="15" height="12" />
                <p>preço:</p>
            </div>
            <p>R$ 39,99 cobrados mensalmente</p>
        </div>
    </DadosContainer>
    );
}

const DadosContainer =styled.div`
    div{
        color: white;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
        background-color: red;
    }
    background-color: blue;
`