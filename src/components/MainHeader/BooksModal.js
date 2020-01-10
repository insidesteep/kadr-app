import React, { Component } from 'react'
import { Modal, Image, Button, Header, Icon, Tab } from 'semantic-ui-react'
import MyBooks from './MyBooks'
import AddBooks from './AddBook'

export class BooksModal extends Component {
    panes = [
        { menuItem: 'Mening kitoblarim', render: () =>  <MyBooks />},
        { menuItem: "Kitob qo'shish", render: () => <AddBooks /> }
      ]

    render() {
        const { trigger } = this.props
        return (
            <Modal trigger={trigger}>
            <Modal.Header><Icon name = "book"/> Mening kitoblarim</Modal.Header>
            <Modal.Content scrolling>
                <Tab panes={this.panes} />
            </Modal.Content>
            <Modal.Actions>
              <Button primary>
                Proceed <Icon name='chevron right' />
              </Button>
            </Modal.Actions>
          </Modal>
        )
    }
}

export default BooksModal
