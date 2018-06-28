import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
  render() {
    const { bookshelfTitle, shelfType, books, updateBookShelf } = this.props

    return (
      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">{bookshelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                .filter((book) => book.shelf === shelfType)
                .map((book) => <Book key={book.id} book={book} updateBookShelf={updateBookShelf} />
              )}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Bookshelf