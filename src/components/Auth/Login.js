import React, { Component } from 'react';
import {Grid, Form, Icon, Header, Segment, Button} from 'semantic-ui-react'


class Login extends Component {

    state = {
        username: '',
        password: '',
        errors: [],
        loading: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if(this.isFormValid(this.state)){
            this.setState({
                errors: [],
                loading: true
            })
            setTimeout(() => {
                this.setState({ loading: false })
                this.props.history.push("/")
            }, 2000)
        }
    }

    isFormValid = ({ username, password }) => username && password
    render(){
        const {username, password, loading} = this.state

        return (
            <Grid textAlign = "center" verticalAlign = "middle" className = "app">
                <Grid.Column style = {{ maxWidth: 450 }}>
                    <Header as = "h2" icon color = "teal" textAlign = "center">
                        <Icon name = "th" color = "teal"/>
                        Вход в приложение
                    </Header>
                    <Form size = "large">
                        <Segment stacked>
                            <Form.Input
                                fluid 
                                value = {username}
                                name = "username" 
                                icon = "user" 
                                iconPosition = "left"
                                placeholder = "Имя пользователя"
                                type = "text"
                                onChange = {this.handleChange}
                            />
                            <Form.Input
                                fluid 
                                value = {password}
                                name = "password" 
                                icon = "lock" 
                                iconPosition = "left"
                                placeholder = "Пароль"
                                type = "password"
                                onChange = {this.handleChange}
                            />
                            <Button 
                                loading = {loading}
                                fluid 
                                color = "teal" 
                                size = "large"
                                onClick = {this.handleSubmit}
                            >
                            Вход
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }

}

export default Login