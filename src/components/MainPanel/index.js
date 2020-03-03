import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PassportInfo from '../../Containers/PassportInfo'
import CommonInfo from './UserInfo/CommonInfo'
import Xodimlar from '../../Containers/Xodimlar'
import AccessControl from '../Kadr/AccessControl'
import Bulimlar from '../Kadr/Bulimlar'
import Fakultetlar from '../Kadr/Fakultetlar'
import Kafedralar from '../Kadr/Kafedralar'
import Laborantlar from '../Kadr/Laborantlar'
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
                        <Route exact path = "/bulimlar-shtat" component = {Bulimlar}/>
                        <Route exact path = "/fakultetlar-shtat" component = {Fakultetlar}/>
                        <Route exact path = "/kafedralar-shtat" component = {Kafedralar}/>
                        <Route exact path = "/laborantlar-shtat" component = {Laborantlar}/>
                        <Route exact path = "/access-control" component = {AccessControl}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default MainPanel