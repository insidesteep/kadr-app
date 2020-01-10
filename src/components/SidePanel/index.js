import React, { Component } from 'react'
import UserPanel from './UserPanel';
import MenuAccordion from './MenuAccordion'

class SidePanel extends Component {

  render() {
    const { toggleHover } = this.props
    return (
      <div className = 'sidebar'
        onMouseEnter = {toggleHover}
        onMouseLeave = {toggleHover}
      >
        <UserPanel />
        <MenuAccordion />
      </div>
    )
  }
}


export default SidePanel