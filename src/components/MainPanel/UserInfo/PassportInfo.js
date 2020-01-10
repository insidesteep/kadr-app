import React, { Component } from 'react'
import Table from './TableComponents/TableList'
import { Input, Button, Dropdown } from 'semantic-ui-react'

export class PassportInfo extends Component {

    handleChange = (_e, { value }) => {
        const { setLimit } = this.props
        setLimit(value)
    }

    render() {
        
        const { setSearchQuery, searchQuery } = this.props
        console.log(this.props.allDataCount && this.props.allDataCount.length)
        return (
            <>
                <header>
                    <div style = {{ display: 'flex' }}>
                        <div  style = {{ flex: '0 0 50%' }}>
                            <h2>Pasportlar</h2>
                        </div>
                        <div  style = {{ flex: '0 0 50%', textAlign: 'right'}}>
                            <Input
                                className = "header-search"
                                placeholder = "Qidiruv..." 
                                icon = "search"
                                onChange = {(e) => setSearchQuery(e.target.value)} 
                                value = {searchQuery}/>
                            
                            <Button icon = "plus circle" content = "Ma'lumot qo'shish" color = 'green'/>
                        </div>
                    </div>
                </header>
                <div>
                    <div className = "filter-table">
                        <div  style = {{ flex: '0 0 50%' }}>
                            <span><p>Har sahifada satrlar</p></span>
                            <Dropdown  
                                className = "filter-table-elems"
                                compact
                                selection
                                options = {
                                    [
                                        {key: "0", value: 5, text: '5ta'},
                                        {key: "1", value: 10, text: '10ta'}
                                    ]
                                }
                                defaultValue = {5}
                                onChange = {this.handleChange}
                            />
                        </div>
                        <div  style = {{ flex: '0 0 50%', textAlign: 'right' }}>
                            <span><p>1 - 5 / 30</p></span>          
                            <Button className = "filter-table-elems" icon = "triangle left" onClick = {this.props.showPrevElements} />
                            <Button className = "filter-table-elems" icon = "triangle right" onClick = {this.props.showNextElements}/>
                        </div>
                    </div>
                </div>
                
                <Table {...this.props}/>
            </>
        )
    }
}

export default PassportInfo
