import React, { Component } from 'react'
import "../App.scss"
import MainHeader from './MainHeader';
import SidePanel from './SidePanel';
import MainPanel from './MainPanel'
import PassportInfo from '../Containers/PassportInfo'
import TestAContiner from './Test/TestAContainer'

import { Switch, Route } from 'react-router-dom'

class App2 extends Component {
    state = {
        isMinimize: false,
        isHovered: false
    }
    toggleClick = () => {
        this.setState({ isMinimize: !this.state.isMinimize })
    }

    toggleHover = () => {
        const { isMinimize } = this.state
        return  isMinimize && this.setState({ isHovered: !this.state.isHovered })
    }

    render() {
        const { isMinimize, isHovered } = this.state
        return (
            <div className = {`app-wrapper ${isMinimize && 'sidebar_minimize'} ${isHovered && 'sidebar_minimize_hover'}`}>
                <MainHeader
                    toggleClick = {this.toggleClick} 
                    isMinimize = {isMinimize}
                    isHovered = {isHovered}
                />
                <SidePanel 
                    toggleHover = {this.toggleHover}
                />
                <MainPanel />
                <div className = "clearfix"></div>
            </div>
        )
    }
}

export default App2