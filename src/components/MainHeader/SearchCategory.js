import React, { Component } from "react";
import { render } from "react-dom";
import { Search, Image, Item } from "semantic-ui-react";
import { connect } from 'react-redux'
import { getSearchBooks, openFavoriteModal } from '../../actions'

class SearchCotegory extends Component {
    state = {
        value: '',
        loading: false,
        selectedObj: null
    }

    componentWillMount() {
        this.timer = null;
    }

    handleChange = (event) => {
        clearTimeout(this.timer)
        this.setState({ loading: true, value: event.target.value })
        
        this.timer = setTimeout(() => {
            this.props.getSearchBooks(this.state.value)
            this.setState({ loading: false })
        }, 500)
        
    }

    handleSelect = (e, {result}) => {
        this.setState({ selectedObj: result })
        this.props.openFavoriteModal(true, result)
    }


    resRender = (book) => (
        <Item>
            <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/stevie.jpg' />

            <Item.Content>
                <Item.Header as = "a">{book.title}</Item.Header>
                <Item.Extra>
                    <b>Beti: </b> {book.page}
                </Item.Extra>
                <Item.Extra>
                    <b>Yili: </b> {book.date}
                </Item.Extra>
                
            </Item.Content>
        </Item>
        /*<span className = "search-result" key={book.id} onClick = {() => console.log(this)}>
            <div className = "search-result__info">
                <div className =  "search-result__title">{book.title}</div>
                <div className =  "search-result__page">{book.page}</div>
                <div className =  "search-result__date">{book.date}</div>
            </div>    
            <div className =  "search-result__image"><Image src = {book.image}/></div>
        </span>*/
    );

  render() {
      const { loading } = this.state
      console.log(this.state.selectedObj)
      console.log(this.props.books)
    return (
      <Search
        loading = {loading}
        icon = "pencil"
        fluid
        onResultSelect = {this.handleSelect}
        onSearchChange = {this.handleChange}
        value = {this.state.value}
        placeholder = "Kitob nomi..."
        results = {this.props.books}
        resultRenderer = {this.resRender}
        showNoResults = {false}
      />
    );
  }
}

export default connect(
    (state) => ({
        books: state.books.searchData
    }),
    { getSearchBooks, openFavoriteModal }
)(SearchCotegory)

