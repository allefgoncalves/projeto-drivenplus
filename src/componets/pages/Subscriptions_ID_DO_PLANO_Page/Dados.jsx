import styled from 'styled-components';
import { useState, useContext, useEffect} from 'react';
import UseContext from "../../contexts/UseContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { Icon } from '@iconify/react';

export default function Dados(){
    const { token, setPlano, plano } = useContext(UseContext);
    const id = useParams();
    const [aux, setaux]= useState([]);

    
    const modoOff =[{
        id: 1,
        name: "Driven Plus",
        image: "https://svgshare.com/i/dSP.svg",
        price: "39.99",
        perks: [
            {
                id: 1,
                membershipId: 1,
                title: "Solicitar brindes",
                link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                id: 2,
                membershipId: 1,
                title: "Materiais bônus de web",
                link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            }
        ]
}];


    useEffect(() => {
        //console.log(id);
        /*const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/ID_DO_PLANO`; //modo on
        
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const promise = axios.get(URL, config);
        promise.then(resp =>{ 
            props.setPlano(resp.data);
              
            console.log(resp.data);
        });
        promise.catch(erro => console.log(erro));*/

        setPlano(modoOff);//modo off
        setaux(modoOff[0].perks);
        console.log(modoOff[0]);
        console.log(aux);
    
      }, []);
  

    return(
    <DadosContainer>
        <Div1>
            <Icon icon="fluent:clipboard-task-list-rtl-20-regular" color="#FF4791" width="20" height="20" />
            <p>Benefícios:</p>
        </Div1>
        <div>{aux.map(beneficio=>(
        <p key={beneficio.id}>{beneficio.id} - {beneficio.title}</p>
        ))}
        </div>
        <div>
            <Div1>
                <Icon icon="fa-solid:money-bill-wave" color="#FF4791" width="15" height="12" />
                <p> preço:</p>
            </Div1>
            <p>R${modoOff[0].price} cobrados mensalmente</p>
        </div>
    </DadosContainer>
    );
}

const DadosContainer =styled.div`
    width: 305px;

    div{
        color: white;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
    }
 
`
const Div1 =styled.div`
    display: flex;
    align-items: center;
    p{
        margin-left: 5px;
    }

`
