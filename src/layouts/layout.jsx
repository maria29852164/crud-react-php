import React from "react";
import {Header} from "./header/header";
import {Footer} from "./footer/footer";
import '../styles/style.scss'
export const Layout = ({children})=> {
    return (
        <div className='main'>

            <Header/>
            {children}
            <Footer/>

        </div>
    );
}