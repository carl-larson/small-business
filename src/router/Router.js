import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from '../containers/Home'
import Login from '../components/Login'
import Business from '../containers/Business'
import AddBusiness from '../containers/AddBusiness'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["username"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
}

const Router = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/business/:id' component={Business} />
            <ProtectedRoute path='/addbusiness' component={AddBusiness}/>
        </Switch>
    )
}

export default Router