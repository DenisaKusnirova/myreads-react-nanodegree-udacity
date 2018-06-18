import React, { Component } from 'react'

class Book extends Component {
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 193, 
                            backgroundImage: `url(${this.props.backgroundImage})` 
                        }}></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <p className="book-title">{this.props.bookTitle}</p>
                <p className="book-authors">{this.props.bookAuthor}</p>
            </div>
        )
    }
}

export default Book