import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
class MenuItems extends Component{
    render() {
        const { title } = this.props
        return <div><Icon name = "circle"/>{title}</div>
    }
}

export default MenuItems