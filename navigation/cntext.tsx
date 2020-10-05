import React from 'react';
export const AuthContext = React.createContext({
    signIn:(email:string,password:string)=>{
        console.log('signIN')
    },
    signOut:()=>{
        console.log('signOUT')
    },
})