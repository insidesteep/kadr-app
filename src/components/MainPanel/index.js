import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PassportInfo from '../../Containers/PassportInfo'
import CommonInfo from './UserInfo/CommonInfo'
import VirtualTable from '../Kadr/VirtualTable'
import Bulimlar from '../../Containers/Bulimlar'
import Xodimlar from '../Kadr/Xodimlar'

class MainPanel extends Component {
    render(){
        return(
            <div className = "main-panel">
                <div className = "main-panel-container">
                    <Switch>
                        <Route exact path = '/common' component = {CommonInfo}/>
                        <Route exact path = '/passport' component = {PassportInfo}/>
                        <Route exact path = "/virtualtb" component = {VirtualTable}/>
                        <Route exact path = "/bulimlar" component = {Bulimlar}/>
                        <Route exact path = "/xodimlar" component = {Xodimlar}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default MainPanel