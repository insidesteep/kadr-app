import React, { Component } from 'react';
import { Menu, Icon, Input } from 'semantic-ui-react';
import BooksModal from './BooksModal'
import FavoriteModal from './FavoriteModal'

class TopPanel extends Component{
    render() {
        return (
          <div style = {{ marginLeft: "auto" }}>
            <BooksModal trigger = {<Icon 
              name = "book" 
              size = "big" 
              style = {{ color: "#ffffff" }}/>}/>
            <FavoriteModal />
              
          </div>
        )
    }
}

export default TopPanel