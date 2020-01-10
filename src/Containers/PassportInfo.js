import React, { Component } from 'react'
import PassportInfo from '../components/MainPanel/UserInfo/PassportInfo'

import { connect } from 'react-redux'
import { passportDataLoaded, setDataForModal, openModal, setSearchQuery, setNextElements, setPrevElements, setLimit } from '../actions'

import StoreService from '../services/store-service'

let search = (data, searchQuery) => {
    if(searchQuery.length === 0) return data

    return data.filter((item) => item.seriya.value.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1
                            || item.nomer.value.indexOf(searchQuery) > -1)
}
let filteredData = (data, searchQuery, offset, limit) => {
    return data && search(data.slice(offset, limit), searchQuery)
}

export class PassportInfoContainer extends Component {

    columns = [ 
        { title: 'Seriyasi', field: 'seria' },
        { title: 'Raqami', field: 'number' },
        { title: 'Berilgan vaqti', field: 'dateStart', type: 'numeric' },
        { title: 'Amal qilish muddati', field: 'dateEnd', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
    ]

    componentDidMount(){
        const storeService = new StoreService()
        storeService.getPassportData()
            .then((data) => this.props.passportDataLoaded(data))
    }

    render() {
        const { 
            tableData,
            searchQuery,
            isLoading, 
            passportDataLoaded, 
            openModal, 
            setDataForModal, 
            setSearchQuery,
            limit,
            limitSize,
            offset, } = this.props
            console.log(`
            offset: ${offset}
            limitSize: ${limitSize}
            limit: ${limit}
            data.slice(${offset}, ${limit})`)
        return (
            <PassportInfo 
                showNextElements = {this.props.setNextElements}
                showPrevElements = {this.props.setPrevElements}
                data = {filteredData(tableData.data, searchQuery, offset, limit)}
                allDataCount = { tableData.data }
                searchQuery = {searchQuery}
                isLoading = {isLoading}
                passportDataLoaded = {passportDataLoaded}
                openModal = {openModal}
                setDataForModal = {setDataForModal}
                setSearchQuery = {setSearchQuery}
                setLimit = {this.props.setLimit}
                columns = {this.columns}
            />
        )
    }
}

export default connect(
    (state) => ({
        tableData: state.passportState.data,
        isLoading: state.passportState.isLoading,
        searchQuery: state.filter.searchQuery,
        limitSize: state.filter.limitSize,
        limit: state.filter.limit,
        offset: state.filter.offset
        
    }),
    {
        passportDataLoaded,
        openModal,
        setDataForModal,
        setSearchQuery,
        setNextElements,
        setPrevElements,
        setLimit
    }
)(PassportInfoContainer)
