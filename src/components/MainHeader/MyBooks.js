import React, { Component } from 'react'
import { Table, Label, Menu, Icon } from 'semantic-ui-react'

import { connect } from 'react-redux'

export class MyBooks extends Component {
    render() {
        return (
            <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Nomi</Table.HeaderCell>
        <Table.HeaderCell>Muallifi</Table.HeaderCell>
        <Table.HeaderCell>Tili</Table.HeaderCell>
        <Table.HeaderCell>Kursi</Table.HeaderCell>
        <Table.HeaderCell>Tili</Table.HeaderCell>
        <Table.HeaderCell>Tili</Table.HeaderCell>
        <Table.HeaderCell>Расширение</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell><Icon name = "file pdf"/>Основы медицинского менеджмента и маркетинга. Учебное пособие</Table.Cell>
        <Table.Cell>Петрова Н.Г., Додонова И.В., Погосян С.Г.</Table.Cell>
        <Table.Cell>Ruscha</Table.Cell>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
        )
    }
}

export default connect(
  (state) => ({
    books: state.books.data
  })
)(MyBooks)
