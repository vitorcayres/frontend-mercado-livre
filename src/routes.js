import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Index from './views/Index'
import Items from './views/Items'
import DetailsItems from './views/DetailsItems'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Index} /> 
            <Route path="/items" exact={true} component={Items} />
            <Route path="/items/:id" exact={true} component={DetailsItems} />            
        </Switch>         
    </ BrowserRouter>
);

export default Routes;