import React from 'react';
export const AuthContext = React.createContext({
    signIn:()=>{
        console.log('signIN')
    },
    signOut:()=>{
        console.log('signOUT')
    },
})