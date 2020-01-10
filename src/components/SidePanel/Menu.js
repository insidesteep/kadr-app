import React, { Component } from 'react'
import MenuItems from './MenuItems'
import { NavLink } from 'react-router-dom'


class Menu extends Component{

    getBody = () => {
        const { itemsCollection } = this.props
        console.log(this.props)
        return itemsCollection.map((item) => {
            return(
                <NavLink activeClassName = "menu-item-li-active" to = {item.to} key={item.id} className = "menu-item-li">
                    <MenuItems title = {item.title}/>
                </NavLink>
            )
        })
    }

    render() {
        return (
            <ul className = "menu">
                {this.getBody()}
            </ul>
        )
    }
}

export default Menu