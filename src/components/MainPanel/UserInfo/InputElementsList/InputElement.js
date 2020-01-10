import React, { Component, useState } from 'react'
import {Form, Input, Dropdown, Radio } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import InputMask from 'react-input-mask'
import 'react-day-picker/lib/style.css'
import "react-datepicker/dist/react-datepicker.css";

export class InputElement extends Component {
    /*state = {
        value: this.props.item.value
    }    
*/

    state = {
        email: '',
        password: '',
        number: null,
        text: null,
        phone: '+998 91 408 71 54',
        radio: '',
        formErrors: {email: '', password: '', number: ''},
        emailValid: false,
        passwordValid: false,
        numberValid: false,
        formValid: false
    }

      handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(e.target, 23)
        this.validateField(name, value)
      }

      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let numberValid = this.state.numberValid
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            this.setState({ email: value })
            break;
          case 'number':
            fieldValidationErrors.number = !isNaN(value) ? '' : ' is invalid';
            if(!isNaN(value)) this.setState({ number: value })
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          case 'text':
            this.setState({ text: value })
            break;
          default:
            break;
        }

        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        numberValid: numberValid
                      }, this.validateForm);
      }

      onChange = (e) => {
        this.setState({
            phone: e.target.value
        })
      }
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }
    
    /*changeField = (e) => {
        switch(this.props.item.type){
            case "number": {
                if(!isNaN(e.target.value)) this.setState({ value: e.target.value })
            }

        }
    }*/


    checkType = (item) => {
        switch(item.type){
            case "select":
                return <Dropdown placeholder= {`${item.title}ni tanlang`} fluid selection text = {item.value} />

            case "date":{

                const Picker = () => {
                    const { item } = this.props
                    const [startDate, setStartDate] = useState(new Date(item.value));
                    return (
                      <DatePicker
                        selected = {startDate}
                        onChange = {date => setStartDate(date)}
                        dateFormat = 'dd.MM.yyyy'
                      />
                    );
                  };
                  return <Picker item = {item}/> 
               /* return <Popup
                    trigger={<Input icon='calendar' placeholder='Tanlang...' value = {this.state.value} />}
                    on='focus'
                    ><DayPicker onDayClick = {(day) => this.setState({ value: day.toLocaleDateString() })}/></Popup>*/
            }

            case "phone":
                return <InputMask mask = "+\9\98 99 999 99 99" value = {this.state.phone} onChange = {this.onChange}>
                    {(inputProps) => <Input icon = "phone" {...inputProps}/>}
                </InputMask>
            case "mail":
                return <Input name = "mail" icon = "mail" placeholder='Full name' value = {this.state.mail} onChange = {this.handleUserInput}/>
            case "multi-select":
                return <Dropdown placeholder='Skills' fluid multiple selection />
            case "number":
                return <Input name = "number" icon = "pencil" defaultValue = {item.value} value = {this.state.number} onChange = {this.handleUserInput}/>/*<Input className = {this.errorClass(this.state.formErrors.email)} name = "email" icon = "pencil" placeholder='Full name' value = {this.state.email} onChange = {this.handleUserInput}/>*/
            case "radio":
                return <><Radio
                label='Choose this'
                name='radioGroup'
                value='this'
                checked={this.state.radio === 'this'}
                onChange={this.handleChange}
              />
              <Radio
                label='Choose that'
                name='radioGroup'
                value='that'
                checked={this.state.radio === 'that'}
                onChange={this.handleChange}
              /> </> 
            
            default:
                return <Input name = "text" icon = "pencil" placeholder='Full name' defaultValue = {item.value} value = {this.state.text} onChange = {this.handleUserInput}/>
        }

    }
    handleChange = (e, { value }) => this.setState({ radio: value })
    render() {
      console.log(`
        text: ${this.state.text}
        number: ${this.state.number}
        select: ${this.state.select}
        password: ${this.state.password}
        phone: ${this.state.phone}
        date: ${this.state.date}
      `)
        const { item } = this.props
        console.log(item)
        return (
            <Form.Field>
                <label>{item.title}</label>
                { this.checkType(item) }
            </Form.Field>
            
        )
    }
}

export default InputElement
