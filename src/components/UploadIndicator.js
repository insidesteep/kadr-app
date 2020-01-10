import React, { Component } from 'react'

export class UploadIndicator extends Component {
    render() {
        return (
            <div style = {{ height: "20px", background: "green", width: `${this.props.percent}%` }}></div>
        )
    }
}

export default UploadIndicator
