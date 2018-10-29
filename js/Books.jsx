import React from 'react';
import ReactDOM from 'react-dom';
import book from './array.js';
import BookBox from './BookBox.jsx';

class Books extends React.Component {
    constructor(props) {
        super(props);
    }

    createLibrary = () => {

        let bookboxes = book.map((book) => {
            return (
                <BookBox 
                    key={book.author+ "-" + book.title}
                    genre={book.genre}
                    image={book.image}
                    author={book.author}
                    title={book.title}
                    epub={book.epub}
                    mobi={book.mobi}
                    pdf={book.pdf} />
            )
        })
       
            return (
               bookboxes
            )

    }

    render() {
         return (
            <section>
                {this.createLibrary()}
            </section>
        )
    }    
}

export default Books;