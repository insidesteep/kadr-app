import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

class LogoBar extends Component{
    
    render(){
        const { isMinimize, isHovered, toggleClick } = this.props
        console.log(isHovered)
        return(    
            <div className = "logo-header">
                <div>
                    <Icon name = "react" size = "big" style = {isMinimize && !isHovered ? {opacity: 0 } : {}}/> 
                    <Icon name = {isMinimize ? "ellipsis vertical" : "bars" } className = "logo-header-menu" onClick = {toggleClick}/>
                </div>
            </div>
        )
    }
}

export default LogoBar