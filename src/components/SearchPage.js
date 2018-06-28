import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchPage extends Component {
  state = {
    query: '',
    result: []
  }

  updateQuery = (query) => {
    this.setState({ query })
    BooksAPI.search(query)
      .then(books => this.setState({ result: books }))
  }

  render() {
    const { result } = this.state
    const { updateBookShelf, booksById } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {(result instanceof Array) && result.map((book) => {
              if (booksById[book.id] !== undefined) {
                book.shelf = booksById[book.id].shelf
              }
              return <Book key={book.id} book={book} updateBookShelf={updateBookShelf} />
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage