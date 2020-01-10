import React, { Component } from 'react'
import { Select } from 'semantic-ui-react';

export class CardEditItem extends Component {

    
    render() {
        const { label, type } = this.props
        return (
            <div className = "card-edit-label-group">
                <label>{label}</label>
                <div>
                    <Select placeholder = "Tanlang..." fluid/>
                </div>
            </div>
        )
    }
}

export default CardEditItem
