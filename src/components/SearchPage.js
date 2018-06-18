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
            .then(books => this.setState({ result: books}))
    }

    render() {
        const { result } = this.state
        console.log(result)

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        className="close-search" 
                        to="/"
                    >Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        { (result instanceof Array) && result.map((book) => (
                            <Book 
                                backgroundImage={book.imageLinks.thumbnail}
                                bookTitle={book.title}
                                bookAuthor={book.authors}
                            />
                        ))}
                    </ol>
                </div>
          </div>
        )
    }
}

export default SearchPage