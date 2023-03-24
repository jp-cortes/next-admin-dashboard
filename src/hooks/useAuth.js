import React, { useState, useContext, createContext } from "react";
import axios from 'axios';
import Cookie from 'js-cookie';
import endPoints from "services/api";
import { useRouter } from "next/router";

const AuthContext = createContext()

export function ProviderAuth({ children }) {
    const auth = useProviderAuth();
    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth = () => {
    return useContext(AuthContext)
}

function useProviderAuth() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const logIn = async (email, password) => {
        const options ={
            headers: {
                accept: '*/*',
                'Content-Type': 'application/json',
            }
        }
//post the login info user & password
//the answer of the server will be access_token
const { data:access_token } = await axios.post(endPoints.auth.login, {email, password }, options);
if(access_token) {
    const token = access_token.access_token;
    //save a cookie for the token provide  by the server
    Cookie.set('token', token, { expires: 5 });
    //auth the user token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const { data: user } = await axios.get(endPoints.auth.profile);
    // console.log(user);
    setUser(user);
}

}

const logout = () => {
    Cookie.remove('token');
    setUser(null);
    delete axios.defaults.headers.Authorization;

    router.push('/login');
}


    return {
        user,
        logIn,
        logout,
        error, 
        setError,
    }
}