import React, { Component } from 'react'
import { Image, Icon, Input } from 'semantic-ui-react'
import Card from './Card'
import CardItem from './CardItem'

export class MainInfo extends Component {
    render() {
        console.log('Main')
        const { data } = this.props

        return (
            <React.Fragment>
                <div className = "card-primary-header">
                    <h2>Shermatov Hasan Husanovich</h2>
                </div>
                <div className = "card-block">
                    <div style = {{ maxWidth: "30%", flex: "0 0 30%" }}>
                        <h3>Tizim administratori</h3>
                        <Image src = "https://admin.localsearchprofiles.com/Public/PublishedMedia/Images/P_ADP0001P_ADP002YY_f0054e02-7ee0-4a7b-ae66-d8c5ccb30bf8.jpg"/>
                    </div>
                    <div style = {{ maxWidth: "70%", flex: "0 0 70%" }}>
                        <div className = "card-body">    
                            <Card header = "Asosiy ma'lumotlar">
                                <CardItem label = "FIO">
                                    Shermatov
                                </CardItem>
                                <CardItem label = "FIO">
                                    Shermatov
                                </CardItem>
                                <CardItem label = "FIO">
                                    Shermatov
                                </CardItem>
                                <CardItem label = "FIO">
                                    Shermatov
                                </CardItem>
                            </Card>
                            <div className = "card-label-group">
                                <label><Icon name = "mail"/>Elektron pochtasi:</label>
                                <div>
                                    <p>shermatovhh@gmail.com</p>
                                </div>
                            </div>
                            <div className = "card-label-group">
                                <label><Icon name = "call"/>Telefon raqami</label>
                                <div>
                                    <p>+998 (91) 400-51-51</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MainInfo
