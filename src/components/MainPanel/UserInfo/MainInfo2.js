import React, { Component } from 'react'
import { Image, Icon } from 'semantic-ui-react'

export class MainInfo extends Component {
    render() {
        return (
            <div className = "main-panel">
                <div className = "main-panel-container">
                    <div className = "main-panel-container-flexible">
                        <div className = "flexible-blocks flexible-block-a">
                            <h1 className = "flexible-header">Shermatov Hasan Husanovich</h1>
                            <div style = {{ display: "flex" }}>
                                <div className = "fexible-block-info">
                                    <h4>Tizim administratori</h4>
                                    <Image src = 'http://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg' size = "medium"/>
                                    <div className = "flexible-block-contact">
                                        <div><Icon name = "mail" /> shermatovhh@gmail.com</div>
                                        <div><Icon name = "phone" /> +998 (91) 400-51-51</div>
                                    </div>
                                </div>
                                <div className = "fexible-block-info flexible-info" style = {{ marginLeft: "10em" }}>
                                    <h3>Asosiy Ma'lumotlar</h3>
                                    <div>
                                        <label className = "flexible-block-info-title">Tug'ilgan yili:</label>
                                        <p>06.08.1999</p>
                                    </div>
                                    <div><label className = "flexible-block-info-title">Jinsi:</label><p>Erkak</p></div>
                                    <div><label className = "flexible-block-info-title">Oilaviy holati:</label><p>Uylangan</p></div>
                                    <div><label className = "flexible-block-info-title">Millati:</label><p>O'zbek</p></div>
                                    <div><label className = "flexible-block-info-title">Biladigan tillari:</label><p>Ingliz, Rus</p></div>
                                    <div><label className = "flexible-block-info-title">PINFL:</label><p>12345678954321</p></div>
                                </div>
                            </div>
                        </div>
                        <div style = {{ marginLeft: "2em", width: "40%" }}>
                            <div className = "flexible-blocks flexible-info">
                                <h3>Tug'ilgan Joyi</h3>
                                <div ><label className = "flexible-block-info-title">Tug'ilgan davlati:</label><p>O'zbekiston Respublikasi</p></div>
                                <div><label className = "flexible-block-info-title">Tug'ulgan hududi:</label><p>Buxoro viloyati</p></div>
                                <div><label className = "flexible-block-info-title">Tug'ulgan mahallasi:</label><p>Qandaydir mahalla</p></div>
                            </div>
                            <div className = "flexible-blocks flexible-info" style = {{ marginTop: "2em"}}>
                                <h3>Yashash Joyi</h3>
                                <div><label className = "flexible-block-info-title">Yashayotgan hudud:</label><p>Buxoro viloyati</p></div>
                                <div><label className = "flexible-block-info-title">Yashayotgan tuman:</label><p>Buxoro tumani</p></div>
                                <div><label className = "flexible-block-info-title">Yashayotgan mahalla:</label><p>Qandaydir mahalla</p></div>
                            </div>
                        </div>
                    </div>
                    <div className = "main-panel-container-block">
                            <div className = "flexible-blocks flexible-info"    style = {{ marginTop: "2em"}}>
                                <h3>Yashash Joyi</h3>
                                <div><label className = "flexible-block-info-title">Yashayotgan hudud:</label><p>Buxoro viloyati</p></div>
                                <div><label className = "flexible-block-info-title">Yashayotgan tuman:</label><p>Buxoro tumani</p></div>
                                <div><label className = "flexible-block-info-title">Yashayotgan mahalla:</label><p>Qandaydir mahalla</p></div>
                            </div>
                            <div className = "flexible-blocks flexible-info" style = {{ marginTop: "2em"}}>
                                <h3>Yashash Joyi</h3>
                                <div><label className = "flexible-block-info-title">Yashayotgan hudud:</label><p>Buxoro viloyati</p></div>
                                <div><label className = "flexible-block-info-title">Yashayotgan tuman:</label><p>Buxoro tumani</p></div>
                                <div><label className = "flexible-block-info-title">Yashayotgan mahalla:</label><p>Qandaydir mahalla</p></div>
                            </div>
                            <div className = "flexible-blocks flexible-info" style = {{ marginTop: "2em"}}>
                                <h3>Yashash Joyi</h3>
                                <div><label className = "flexible-block-info-title">Yashayotgan hudud:</label><p>Buxoro viloyati</p></div>
                                <div><label className = "flexible-block-info-title">Yashayotgan tuman:</label><p>Buxoro tumani</p></div>
                                <div><label className = "flexible-block-info-title">Yashayotgan mahalla:</label><p>Qandaydir mahalla</p></div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainInfo
