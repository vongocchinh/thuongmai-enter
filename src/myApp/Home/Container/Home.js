import React from 'react';
import HomeComponent from './../Components/Home';
import { useEffect } from 'react';

const Home =( )=>{
    useEffect(() => {
        window.scrollTo({top:0,behavior:"auto"})
    }, )
    return (
        <>
        <HomeComponent/>
        </>
    )
}


export default Home;