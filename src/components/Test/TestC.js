import React, { Component } from 'react'
import TestD from './TestD'

export class TestC extends Component {
    render() {
        console.log('TestC ', this.props)
        return (
            <>
                <br />
                {`TestC: {
                    data: ${this.props.data},
                    isLoading: ${this.props.isLoading}
                }`}
                <TestD data = {this.props.data} isLoading = {this.props.isLoading}/>
            </>
        )
    }
}

export default TestC
