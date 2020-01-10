import React, { Component } from 'react'
import CardEditItem from './CardEditItem';
import { Button } from 'semantic-ui-react';

export class CardEdit extends Component {

    getBody = () => {
        const { items } = this.props.data
        console.log("wwww", this.props.data)
        return items.map((item) => <CardEditItem key = {item.label} label = {item.label} type = {item.type} />) 
    }

    render() {
        const { header } = this.props.data
        const { cancelEdit } = this.props
        return (
            <div className = "card-body">
                <div className = "card-edit-secondary-header">
                    { header === "empty" ? <h4>&nbsp;</h4> : <h4>{header}</h4>}
                </div>
                <div>
                    {this.getBody()}
                </div>
                <Button color = "green">Saqlash</Button>
                <Button color = "red" onClick = {cancelEdit}>Bekor qilish</Button>
            </div>
        )
    }
}

export default CardEdit
