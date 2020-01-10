import TestA from './TestA'
import React, { Component } from 'react'
import { passportDataLoaded } from '../../actions'
import StoreService from '../../services/store-service'

import { connect } from 'react-redux'



export class TestAContainer extends Component {

    componentDidMount(){
        const storeService = new StoreService()
        storeService.getPassportData()
            .then(data => this.props.passportDataLoaded(data))
    }

    render() {
        return (
            <TestA data = {this.props.data} isLoading = {this.props.isLoading}/>
        )
    }
}

export default connect(
    (state) => ({
        data: state.passportState.data,
        isLoading: state.passportState.isLoading
    }),
    {
        passportDataLoaded
    }
)(TestAContainer)