import React, { Component } from 'react'
import TestC from './TestC'

export class TestB extends Component {
    render() {
        console.log('TestB ', this.props)
        return (
            <>
                <br />
                {`TestB: {
                    data: ${this.props.data},
                    isLoading: ${this.props.isLoading}
                }`}
                <TestC data = {this.props.data} isLoading = {this.props.isLoading}/>
            </>
        )
    }
}

export default TestB
