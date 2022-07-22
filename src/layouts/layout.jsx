import React from "react";
import {Header} from "./header/header";
import {Footer} from "./footer/footer";
import '../styles/style.scss'
export const Layout = ({children})=> {
    return (
        <React.Fragment>
            <div className='main'>

                <Header/>
                {children}


            </div>

        </React.Fragment>

    );
}