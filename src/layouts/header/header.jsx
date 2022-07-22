import React from "react";
import {Link} from 'react-router-dom'
import './header.scss'

const links = [
    {name: "Item",path:"/items"},
];
export const Header = ()=> {
    return (
        <div className='header'>
            <nav className='menu'>
                <ul className='list-menu'>
                    {
                        links.map(link=> <Link className='item' key={link.path}  to={link.path}>{link.name} </Link> )
                    }

                </ul>
            </nav>
        </div>
    );
}