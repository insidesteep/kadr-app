import React, { Component } from 'react'

export class CardItem extends Component {
    render() {
        const {label} = this.props
        return (
            <div className = "card-label-group">
                <label>{label}</label>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default CardItem