import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from './../Components/Projects';
import Home from './../Components/Home';
function AppRouter() {
    return (
        <div>
            <Router>
                <Route exact path='/' component={Home}/>
                <Route exact path='/projects' component={Projects}/>
            </Router>
        </div>
    )
}

export default AppRouter
