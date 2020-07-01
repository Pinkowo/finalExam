import React, { createContext,useEffect,useState,useContext } from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({children}) =>{
    const [isLogin,setIsLogin] = useState(false);
    const store = {
        isLoginState:[isLogin,setIsLogin],
    };
    return(
        <StoreContext.Provider value = {store}>
            {children}
        </StoreContext.Provider>
    );
};