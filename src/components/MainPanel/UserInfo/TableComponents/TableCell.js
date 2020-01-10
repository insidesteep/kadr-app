import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

export class TableCell extends Component {
    render() {
        const { cell } = this.props
        console.log(cell)
        return (
            <Table.Cell> 
                {cell.value}
            </Table.Cell>
        )
    }
}

export default TableCell
