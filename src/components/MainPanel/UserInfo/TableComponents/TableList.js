import React, { Component } from 'react'
import { Table, Menu, Icon, Loader } from 'semantic-ui-react'
import TableRow from './TableRow';
import ModalEditable from '../ModalEditable'

class TableList extends Component {

    /*getBody = () => {
        const { data, isLoading, openModal, setDataForModal } = this.props
        return isLoading ? <Loader active /> : data && data.data.map(item => <TableRow 
                                                                                key = {item.id} 
                                                                                data = {item} 
                                                                                openModal = {openModal}
                                                                                setDataForModal = {setDataForModal}
                                                                             />)
    }*/

    renderHeaderColums = () => {
        const { columns } = this.props
        return columns.map((column) => <Table.HeaderCell  className = "table-header" key = {column.field}>{column.title.toUpperCase()}</Table.HeaderCell>)
    }
    renderRows = () => {
        const { data } = this.props
        
        console.log(data && data[0])
        return data && data.map((item) => <Table.Row  key = {item.id} onDoubleClick = {() => this.openModalAndSetData(item)} >
                                     {this.renderCells(item)} 
                                </Table.Row>)
    }

    renderCells = (item) => {
        return Object.keys(item).map(key => (key === 'id') ? null : <Table.Cell key = {item[key].title}>{item[key].value}</Table.Cell>)
    }


    openModalAndSetData = (item) => {
        const { setDataForModal, openModal } = this.props
        console.log(setDataForModal)
        setDataForModal(item)
        openModal()
    }

    render() {
        const { data } = this.props
        return (
            <React.Fragment>
                <Table selectable singleLine fixed>
                    <Table.Header>
                    <Table.Row>
                        {this.renderHeaderColums()}
                    </Table.Row>
                    </Table.Header>
                    <Table.Body className = "table-body">
                        {!data ? <Loader active/> : this.renderRows()}
                    </Table.Body>
                </Table>
                <ModalEditable/>
            </React.Fragment>
        )
    }
}

export default TableList

