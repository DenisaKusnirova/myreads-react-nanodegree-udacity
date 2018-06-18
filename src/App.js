import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Bookshelf from './components/Bookshelf'
import SearchPage from './components/SearchPage';

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <Header />
            <Bookshelf bookshelfTitle="Currently Reading"/>
            <Bookshelf bookshelfTitle="Want to read"/>
            <Bookshelf bookshelfTitle="Read"/>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
        <Route path="/search" render={() => (
          <SearchPage />
        )} />
      </div>
    )
  }
}

export default BooksApp

         
