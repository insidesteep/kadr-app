import React, { Component } from 'react'
import InputElement from './InputElement'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'

export class InputElementsList extends Component {

    getList = () => {
        const { dataForInput } = this.props
        return Object.keys(dataForInput).map(key => (key === 'id') ? null : <InputElement key = {key} item = {dataForInput[key]}/>)
    }

    render() {
        return (
            <Form className = "input-elements-list__form">
                {this.getList()}
            </Form>
        )
    }
}

export default connect(
    (state) => ({
        dataForInput: state.modalState.dataForModal
    })
)(InputElementsList)
