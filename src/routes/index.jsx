import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import {App} from "../components/app.jsx";

import {Home} from "../components/home/home.jsx";

import {Layout} from "../layouts/layout";
import {Items} from "../components/items/items";


export const AppRouter= ()=> {
    return (
        <BrowserRouter>

            <Layout>
            <Switch>
                <Route exact path='/' component={App}></Route>
                <Route exact path='/home' component={Home}></Route>
                <Route exact path='/items' component={Items}></Route>



            </Switch>
            </Layout>






        </BrowserRouter>
    );
}