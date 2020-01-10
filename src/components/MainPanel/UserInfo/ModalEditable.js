import React, { Component } from 'react'
import InputElementsList from './InputElementsList'

import { Modal, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { closeModal } from '../../../actions'

export class ModalEditable extends Component {
    
    handleClose = () => {
        const { closeModal } = this.props
        closeModal()
    }


    render() {
        const { data, isOpen } = this.props
        console.log(data)
        return (
            <Modal size = "mini" dimmer = "inverted" open = {isOpen} onClose = {this.handleClose}>
                <Modal.Header>Ma'lumotni o'zgartirish</Modal.Header>
                <Modal.Content image>
                    <InputElementsList/>
                </Modal.Content>
                <Modal.Actions>
                    <Button labelPosition = "left" icon='save' content='Saqlash' color = "green" />
                    <Button labelPosition = "right" icon='cancel' content='Bekor qilish' color = "red" />
                </Modal.Actions>
            </Modal>
        )
    }
}

export default connect(
    (state) => ({
        isOpen: state.modalState.isOpenModal,
        data: state.modalState.dataForModal
    }),
    {
        closeModal
    }
)(ModalEditable)