import React, { Component } from 'react'
import TestB from './TestB'

export class TestA extends Component {
    render() {
        console.log('TestA ', this.props)
        return (
            <><br />
                {`TestA: {
                    data: ${this.props.data},
                    isLoading: ${this.props.isLoading}
                }`}
                <TestB data = {this.props.data} isLoading = {this.props.isLoading}/>
            </>
        )
    }
}

export default TestA
