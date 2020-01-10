import React, { Component } from 'react'
import Card from './Card';
import MainInfo from './MainInfo';
import CardItem from './CardItem';

export class CommonInfo extends Component {

    blocks = [
        {
            header: "Tug'ilgan joyi",
            items: [
                {
                    label: "Tug’ilgan davlati",
                    info: 'O’zbekiston Respublikasi',
                    type: "select"
                },
                {
                    label: "Tug’ilgan hududi",
                    info: "Buxoro viloyati",
                    type: "select"
                },
                {
                    label: "Tug’ilgan mahallasi",
                    info: "Qandaydir mahalla",
                    type: "select"
                }
            ]
        },
        {
            header: "Yashash joyi",
            items: [
                {
                    label: "Yashayotgan hudud",
                    info: 'O’zbekiston Respublikasi',
                    type: 'select'
                },
                {
                    label: "Yashayotgan tuman",
                    info: "Buxoro tumani",
                    type: 'select'
                },
                {
                    label: "Yashayotgan mahalla",
                    info: "Qandaydir mahalla",
                    type: 'select'
                }
            ]
        },
        {
            header: "Pedagogik ma'lumotlari",
            items: [
                {
                    label: "avozim darajasi",
                    info: 'Muhandis',
                    type: 'select'
                },
                {
                    label: "Lavozimi",
                    info: "Tizim administratori",
                    type: 'select'
                },
                {
                    label: "Ma’lumoti",
                    info: "Oliy",
                    type: 'select'
                }
            ]
        },
        {
            header: "empty",
            items: [
                {
                    label: "Toifasi",
                    info: 'Birinchi',
                    type: 'select'
                },
                {
                    label: "Mutaxassislik turi",
                    info: "Mutaxasis",
                    type: 'select'
                },
                {
                    label: "Mutaxasisligi",
                    info: "Axborot texnologiyalari",
                    type: 'select'
                }
            ]
        },
        {
            header: "empty",
            items: [
                {
                    label: "Ish staji",
                    info: '3 yil',
                    type: 'number'
                }
            ]
        }
    ]

    render() {
        return (
            <>
                <div style = {{ display: "flex" }}>
                    <div className = "col-xl" style = {{ maxWidth: "66.666667%", flex: "0 0 66.666667%" }}>
                        <div className = "card">
                            <MainInfo data = {this.blocks[0]}/>
                        </div>
                    </div>
                    <div className = "col-xl"  style = {{ maxWidth: "33.333333%", flex: "0 0 33.333333%" }}>
                        <div className = "card">
                            <Card header = "Yashayotgan joyi">
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
                        </div>
                        <div className = "card">
                            <Card header = "Tug'ilgan joyi">
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
                        </div>
                    </div>
                    
            </div>
                <div className = "col-xl" style = {{ maxWidth: "100%", flex: "0 0 100%"}}>
                    <div className = "card">
                        <div className = "card-block">
                            <div style = {{ maxWidth: "33.333333%", flex: "0 0 33.333333%" }}>
                                <Card header = "Pedagogik ma'lumotlar">
                                    <CardItem label = "FIO">
                                        WWD
                                    </CardItem>
                                    <CardItem label = "FIO">
                                        WWD
                                    </CardItem>
                                    <CardItem label = "FIO">
                                        WWD
                                    </CardItem>
                                </Card>
                            </div>
                            <div style = {{ maxWidth: "33.333333%", flex: "0 0 33.333333%" }}>
                                <Card header = "&nbsp;">
                                    <CardItem label = "FIO">
                                        WWD
                                    </CardItem>
                                    <CardItem label = "FIO">
                                        WWD
                                    </CardItem>
                                    <CardItem label = "FIO">
                                        WWD
                                    </CardItem>
                                </Card>
                            </div>
                            <div style = {{ maxWidth: "33.333333%", flex: "0 0 33.333333%" }}>
                                <Card header = "&nbsp;">
                                    <CardItem label = "FIO">
                                        WWD
                                    </CardItem>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CommonInfo
