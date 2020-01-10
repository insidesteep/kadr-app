import React, { Component } from 'react'
import { Modal, Button, Icon, Image, Header } from 'semantic-ui-react'
import { closeFavoriteModal, selectBook } from '../../actions'

import { connect } from 'react-redux'

export class FavoriteModal extends Component {

    onClose = () => {
        const { closeFavoriteModal } = this.props
        closeFavoriteModal(false)
    }

    render() {
        const { isOpen, selectedBook } = this.props
        console.log(selectedBook)
        return (
            <Modal open = {isOpen}>
            <Modal.Header><Icon name = "favorite" color = "yellow"/>Mening kitoblarim</Modal.Header>
            <Modal.Content image>
                <Image src = {selectedBook.image}/>
                <Modal.Description>
                    <Header>Ushbu kitobni kitoblaringiz ruyhatiga qo'shmoqchimisiz?</Header>
                    <div><span><b>Kitob nomi: </b></span>{selectedBook.title}</div>
                    <div><span><b>Muallifi: </b></span>{selectedBook.description}</div>
                    <div><span><b>Tili</b></span>{selectedBook.price}</div>
                    <div><span><b>Kursi</b></span>3</div>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button icon = "favorite" content = "Ha"/>
                <Button onClick = {this.onClose} content = "Yo'q"/>
            </Modal.Actions>
          </Modal>
        )
    }
}

export default connect(
    (state) => ({
        isOpen: state.books.isFavoriteModal,
        selectedBook: state.books.selectedBook
        
    }),
    { closeFavoriteModal }
)(FavoriteModal)
