import React, { Component } from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

class LogoPanel extends Component{
    render() {
        return (
            <Grid className = "logoPanel">
                <Grid.Column>
                    <Grid.Row>
                        <Header>
                            <Icon name = "weixin"/>
                            <Header.Content>
                                BSMI
                            </Header.Content>
                        </Header>
                        <Icon />
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        )
    }
}


export default LogoPanel