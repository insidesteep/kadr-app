import React, { Component } from 'react';
import LogoBar from './LogoBar';
import TopPanel from './TopPanel'

class MainHeader extends Component{
    render() {
        const {isMinimize, isHovered, toggleClick} = this.props
        return (
            <div className = "main-header">
                    <LogoBar
                        toggleClick = {toggleClick}
                        isMinimize = {isMinimize}
                        isHovered = {isHovered}
                    />
                <div className = "navbar">
                    <TopPanel />
                </div>
            </div>
        )
    }
}

export default MainHeader