import React from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Header from './components/Header'
import Bookshelf from './components/Bookshelf'
import SearchPage from './components/SearchPage'

class BooksApp extends React.Component {
  state = {
    books: [],
    booksById: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({ books }))
        const booksById = []
        books.forEach((book) => {
          booksById[book.id] = book
        })
        this.setState({ booksById })
      })
  }

  updateBookShelf = (book, shelf) => {
    if (this.bookAdded(book)) {
      this.setState((prevState) => ({
        books: prevState.books.map((b) => {
          if (b.id === book.id) {
            b.shelf = shelf
          }
          return b
        })
      }))
    } else {
      book.shelf = shelf
      this.setState((prevState) => ({
        books: [ ...prevState.books, book ]
      }))
    }

    BooksAPI.update(book, shelf)
      .then((book) => {
        console.log(book)
      }) 
  }

  bookAdded = (book) => {
    for (let b of this.state.books) {
      if (b.id === book.id) {
        return true
      }
    }
    return false
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <Header />
            <Bookshelf 
              bookshelfTitle="Currently Reading" 
              books={books} 
              shelfType="currentlyReading" 
              updateBookShelf={this.updateBookShelf}
            />
            <Bookshelf 
              bookshelfTitle="Want to read" 
              books={books} 
              shelfType="wantToRead"
              updateBookShelf={this.updateBookShelf}
            />
            <Bookshelf 
              bookshelfTitle="Read" 
              books={books} 
              shelfType="read"
              updateBookShelf={this.updateBookShelf}
            />
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
        <Route path="/search" render={() => (
          <SearchPage booksById={this.state.booksById} updateBookShelf={this.updateBookShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp

         
