import React, { useContext } from 'react'
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import { AuthContext } from '../auth/context/AuthContext';
import { Login } from '../auth/pages/Login';
import { RoutesforHeroes } from '../heroes/routes/RoutesforHeroes';
import { PrivateRoutes } from './PrivateRoute';
import { PublicRoutes } from './PublicRoute';


export const AppRouter = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<PublicRoutes>
                    <Login />
                </PublicRoutes>} />
                <Route path="/*" element={<PrivateRoutes>
                    <RoutesforHeroes></RoutesforHeroes>
                </PrivateRoutes>} />
            </Routes>
        </BrowserRouter>
    )
}
