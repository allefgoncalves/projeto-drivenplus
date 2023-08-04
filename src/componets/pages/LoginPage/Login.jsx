import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect} from 'react';
import { Input, Button, ContainerInput } from '../../Style/Input';
import axios from 'axios';
import UseContext from "../../contexts/UseContext";


export default function LoginPage(){
    
    const navigate = useNavigate();
    const [user, setUser] = useState({email:"", password:""});
    const { setToken, setImgUser} = useContext(UseContext);

    function verifica(y){
        if(y==null){    //verificar se ja tem conta
            navigate('/subscriptions');
        }else{
            navigate('/home');  
        }
    }

    useEffect(() => {
        let x = localStorage.getItem("token");
        let y = localStorage.getItem("membership");
        console.log(x);
        if(x !=undefined){
            console.log(x);
            setToken(x);
            verifica(y);
        }
    }, []);

    function login(e){
    
        e.preventDefault();
    
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/login';
    
        const promise = axios.post(URL, user);
        promise.then( resp => {
            console.log(resp.data);
            setToken(resp.data.token);
            localStorage.setItem("token", resp.data.token);
            localStorage.setItem("membership", resp.data.membership);
            setImgUser(resp.data.image);
            verifica(y); 
        });
        promise.catch( erro =>{
            alert(erro.response.data.message);
            console.log(erro);
        });
      }
    
    return(
        <ContainerInput>
            <form onSubmit={login}>
                <Input
                    type="email"
                    placeholder="E-mail"
                    required
                    onChange={ e => setUser({...user, email:e.target.value})}
                    value={user.email}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    required
                    onChange={ e => setUser({...user, password:e.target.value})}
                    value={user.password}
                />
                <Button type="submit">Entrar</Button>
                <Button type="reset">cancelar</Button>
            </form>
        </ContainerInput>
    );
}
