import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PassportInfo from '../../Containers/PassportInfo'
import CommonInfo from './UserInfo/CommonInfo'
import Xodimlar from '../Kadr/Xodimlar'
import 'antd/dist/antd.css'

class MainPanel extends Component {
    render(){
        return(
            <div className = "main-panel">
                <div className = "main-panel-container">
                    <Switch>
                        <Route exact path = '/common' component = {CommonInfo}/>
                        <Route exact path = '/passport' component = {PassportInfo}/>
                        <Route exact path = "/xodimlar" component = {Xodimlar}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default MainPanel