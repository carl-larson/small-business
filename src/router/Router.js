import React from 'react'
import { Switch, Route } from 'react-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Business from '../components/Business'


// Start Router function here //
const Router = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/business/:id' component={Business} />
        </Switch>
    )
}

export default Router