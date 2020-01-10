import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

export class MultiSelect extends Component {
    render() {
        const { options, plh } = this.props
        console.log(this.props)

        return (
            <Dropdown 
                placeholder={plh}
                fluid 
                multiple 
                selection 
                options={options} 
                onChange = {(e, { value }) => console.log(value)}/>
        )
    }
}

export default MultiSelect
