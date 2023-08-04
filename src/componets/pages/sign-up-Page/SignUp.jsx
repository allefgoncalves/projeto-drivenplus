import { useNavigate} from "react-router-dom";
import { useState } from 'react';
import { Input, Button, ContainerInput } from '../../Style/Input';
import axios from 'axios';

export default function SignUp(){
    const [form, setForm] = useState({name:"", email:"",cpf:"", password:""});
    const navigate = useNavigate();
    function login(e){
    
        e.preventDefault();
    
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up';
        const promise = axios.post(URL, form);
    
        promise.then( resp => {
          console.log(resp.data);
          navigate("/");
        });

        promise.catch( erro => {
            console.log(erro);
            alert(`${erro.response.data.message}`);
        });
      }
    
    
    return(
        <ContainerInput>
            <form onSubmit={login}>
                <Input
                    type="text"
                    placeholder="Nome"
                    required
                    onChange={ e => setForm({...form, name:e.target.value}) }
                    value={form.name}
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                    required
                    onChange={ e => setForm({...form, email:e.target.value})}
                    value={form.email}
                />
                <Input
                    type="text"
                    placeholder="cpf"
                    required
                    onChange={ e =>setForm({...form, cpf:e.target.value})}
                    value={form.cpf}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    required
                    onChange={ e => setForm({...form, password:e.target.value})}
                    value={form.password}
                />
                <Button type="submit">Cadastrar</Button>
            </form>
        </ContainerInput>
    );
}