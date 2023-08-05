import SignUpPage from './componets/pages/sign-up-Page/SignUpPage';
import LoginPage from './componets/pages/LoginPage/LoginPage';
import Subscriptions from './componets/pages/SubscriptionsPage/SubscriptionsPage';
import Subscriptions_ID_DO_PLANO from './componets/pages/Subscriptions_ID_DO_PLANO_Page/Subscriptions_ID_DO_PLANO_Page';
import Home from './componets/pages/HomePage/Homepage';
import User_ID_DO_PLANO from './componets/pages/UserPlanoPage/UserPlanoPage';
import User_ID_DO_PLANO_Update from './componets/pages/UserPlanoPage/UserPlanoPage';

import styled from 'styled-components';
import { useState } from 'react';
import UseContext from './componets/contexts/UseContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [token, setToken] = useState("");
  const [plano, setPlano]= useState("");
   
  return (
    <ContainerMain>
      <UseContext.Provider value={{token, setToken, plano, setPlano}}> 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path={`/sign-up`} element={<SignUpPage />}></Route>
            {/*<Route path={`/subscriptions/:ID_DO_PLANO`} element={<Subscriptions_ID_DO_PLANO />}></Route>*/}
            <Route path={`/subscriptions/:ID_DO_PLANO`} element={<Subscriptions_ID_DO_PLANO />}></Route> {/*//copia para teste*/}
            <Route path={`/subscriptions`} element={<Subscriptions/>}></Route>
            <Route path={`/home`} element={<Home/>}></Route>
            <Route path={`/users/ID_DO_PLANO`} element={<User_ID_DO_PLANO/>}></Route>
            <Route path={`/users/ID_DO_PLANO/update`} element={<User_ID_DO_PLANO_Update/>}></Route>
          </Routes>
        </BrowserRouter>
      </UseContext.Provider>
    </ContainerMain>
  )
}

const ContainerMain = styled.div`
  width: 375px;
  margin: 0px auto;
  background-color: #0E0E13;
`
