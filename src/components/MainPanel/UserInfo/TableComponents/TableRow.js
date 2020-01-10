import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { TableCell } from './TableCell';

export class TableRow extends Component {


    getBody = () =>{
        const { data } = this.props
        return data && data.map(cell => <TableCell key = {cell.id} cell = {cell}/>)

    }

    openModalAndSetData = (data) => {
        const { setDataForModal, openModal } = this.props
        setDataForModal(data)
        openModal()
    }

    render() {
        console.log(this.props.data)
        return (
                <Table.Row onDoubleClick = {() => this.openModalAndSetData(this.props.data)}>
                    {this.getBody()}
                </Table.Row>
        )
    }
}

export default TableRow
