import React, { Component } from 'react'
import CardItem from './CardItem';
import CardEdit from './CardEdit';
import { Icon } from 'semantic-ui-react';

export class Card extends Component {
    state = {
        isEdit: false
    }

    getBody = () => {
        const { items } = this.props.data
        
        return items.map((item) => <CardItem key = {item.label} label = {item.label} info = {item.info} />) 
    }
    editFields = () => this.setState({ isEdit: true })

    cancelEdit = () => this.setState({ isEdit: false })

    render() {
        const { header } = this.props
        const { editable } = this.props
        const { isEdit } = this.state

        console.log(this.props.data)
        return isEdit ? <CardEdit  data = {this.props.data} cancelEdit = {this.cancelEdit} /> : (
            <div className = "card-body">
                { editable && <Icon name = 'edit' onClick = {this.editFields}/> }
                <div className = "card-secondary-header">
                    <h4>{header}</h4>
                </div>
                <div>
                    {this.props.children}
                    {/*this.getBody()*/}
                </div>
            </div>
        )
    }
}

export default Card