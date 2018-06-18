import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
    render() {
        return (
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            <li>
                                {/*
                                TODO: Map over arrays to display selected books.
                                */}
                                <Book />
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bookshelf