import { Input, Button } from '../../Style/Input';

import styled from 'styled-components';
import React, { useState, useContext, useEffect} from 'react';
import UseContext from './../../contexts/UseContext';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Modal from 'react-modal';

export default function Card(){
    const [form, setForm] = useState({membershipId:"", cardName:"",cardNumber:"", securityNumber:"", expirationDate:""});
    const { token } = useContext(UseContext);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    Modal.setAppElement('#root');

    function abrirModal() {
        setIsOpen(true);
    }

    function fecharModal() {
        setIsOpen(false);
    }

    function enviar(){
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions';
        const promise = axios.post(URL, form, config);
        e.preventDefault();
        promise.then( resp => {
            console.log(resp.data);
            navigate('/');
        });
  
        promise.catch( erro => {
              console.log(erro);
              alert(`${erro.response.data.message}`);
        });
        fecharModal;
    }

    function plano(e){
        abrirModal;
    } 

    return(
        <Card_Dados>
             <form onSubmit={plano}>
             <Input
                    type="text"
                    placeholder="Nome impresso no cartão"
                    required
                    onChange={ e => setForm({...form, cardName:e.target.value}) }
                    value={form.cardName}
                />
                <Input
                    type="text"
                    placeholder="digitos do cartão"
                    required
                    onChange={ e => setForm({...form, cardNumber:e.target.value}) }
                    value={form.cardNumber}
                />
                <div>
                    <InputPequeno
                        type="text"
                        placeholder="CVC"
                        required
                        onChange={ e => setForm({...form, securityNumber:e.target.value}) }
                        value={form.securityNumber}
                    />
                    <InputPequeno
                        type="text"
                        placeholder="validade"
                        required
                        onChange={ e => setForm({...form, expirationDate:e.target.value}) }
                        value={form.expirationDate}
                    />
                </div>
                <Button type="submit">Cadastrar</Button>
            </form>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={fecharModal}
                contentLabel="Modal de exemplo"
            >
                <div>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</div>
                <Botoes>
                    <button onClick={fecharModal}>não</button>
                    <button onClick={enviar}>sim</button>
                </Botoes>
            </Modal>
        </Card_Dados>
    );
}

const Card_Dados =styled.div`
    background-color: yellow;

`

const InputPequeno =styled.div`

`

const Botoes =styled.div`
    button{
        font-family: Roboto;
        font-size: 18px;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;
    }
`