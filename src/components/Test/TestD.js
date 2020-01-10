import React, { Component } from 'react'

export class TestD extends Component {
    render() {
        console.log('TestD ', this.props)
        return (
            <>
                <br />
                {`TestD: {
                    data: ${this.props.data},
                    isLoading: ${this.props.isLoading}
                }`}
            </>
        )
    }
}

export default TestD
