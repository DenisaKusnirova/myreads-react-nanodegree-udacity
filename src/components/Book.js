import React, { Component } from 'react'

class Book extends Component {
  selectBook = (event, book) => {
    const shelf = event.target.value
    this.props.updateBookShelf(book, shelf)
  }

  render() {
    const { book } = this.props
    const imageUrl = book.imageLinks ? `url(${book.imageLinks.thumbnail})` : ''

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: imageUrl
            }}>
          </div>
          <div className="book-shelf-changer">
            <select
              value={book.shelf || 'none'}
              onChange={(event) => this.selectBook(event, book)} >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <p className="book-title">{book.title}</p>
        <p className="book-authors">{book.author}</p>
      </div>
    )
  }
}

export default Book