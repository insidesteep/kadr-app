import React, { Component } from 'react'
import { Form, Button, Divider, Progress, Icon } from 'semantic-ui-react'
import SearchCategory from './SearchCategory'
import MultiSelect from '../MultiSelect'
import UploadIndicator from '../UploadIndicator'
import { addBook } from '../../actions'

import { connect } from 'react-redux'

export class AddBook extends Component {
    
    handleFileChange = (e) => {
        e.preventDefault()

        let file = e.target.files[0]
        let formdata = new FormData()
        formdata.append("book", file)
        this.props.addBook(formdata)

    }

    courseOptions = [
        { key: '1', text: "1 - kurs", value: "1-kurs"},
        { key: '2', text: "2 - kurs", value: "2-kurs"},
        { key: '3', text: "3 - kurs", value: "3-kurs"},
        { key: '4', text: "4 - kurs", value: "4-kurs"},
        { key: '5', text: "5 - kurs", value: "5-kurs"},
        { key: '6', text: "6 - kurs", value: "6-kurs"}
    ]

    languageOptions = [
        { key: 'uzb', text: "O'zbekcha", value: "uzbekcha"},
        { key: 'rus', text: "Ruscha", value: "ruscha"},
        { key: 'eng', text: "Inglizcha", value: "inglizcha"}
    ]
    

    render() {
        return (
            <>
                <Divider />
                <Form>
                    <Form.Field>
                        <label>Kitob nomi</label>
                        <SearchCategory />
                    </Form.Field>
                    <Form.Field>
                        <label>Muallif</label>
                        <input placeholder='Muallifi...' />
                    </Form.Field>
                    <Form.Field>
                        <label>Chop etilgan joyi</label>
                        <input type = "number" placeholder='Chop etilgan joyi...' />
                    </Form.Field>
                    <Form.Field>
                        <label>Chop etilgan yili</label>
                        <input placeholder='Chop etilgan yili' />
                    </Form.Field>
                    <Form.Field>
                        <label>Beti</label>
                        <input placeholder='Beti...' />
                    </Form.Field>
                    <Form.Field>
                        <label>Kursi</label>
                        <MultiSelect 
                            options = {this.courseOptions}
                            plh = "Kursni tanlang..."
                            />
                    </Form.Field>
                    <Form.Field>
                        <label>Tili</label>
                        <MultiSelect 
                            options = {this.languageOptions}
                            plh = "Tilni tanlang..."
                            />
                    </Form.Field>
                    <Form.Field>
                        <label className = "uploadButton" for = "file">
                            <Icon name = "upload"/>
                            <span>Faylni tanlang</span>
                        </label>
                        {this.props.uploadProgress && <Progress percent = {this.props.uploadProgress} indicating size = "small" progress = "percent"/>/*<UploadIndicator percent = {this.props.uploadProgress}/>*/} 
                        <input id = "file" type = "file" placeholder='Last Name' onChange = {(e) => this.handleFileChange(e)}/>
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </>
        )
    }
}

export default connect(
    (state) => ({
        uploadProgress: state.books.uploadProgress
    })
    , { addBook })(AddBook)
