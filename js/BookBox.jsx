import React from 'react';
import FormatBox from './FormatBox.jsx'

class BookBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genre: this.props.genre,
            image: "covers/"+this.props.image+".jpg",
            author: this.props.author,
            title: this.props.title,
            epub: this.props.epub,
            mobi: this.props.mobi,
            pdf: this.props.pdf
        }
    }

    render() {
        return (
            <div className={"bookBox hvr-grow-shadow " + this.state.genre}>
                <div className='coverBox'>
                    <img src={this.state.image}/>
                </div>
                <div className='personalInfo'>
                    <p className='authorName'>{this.state.author}</p>
                    <p className='title'>{this.state.title}</p>
                </div>
                <div className='formatBox'>
                    <FormatBox epub={this.state.epub} mobi={this.state.mobi} pdf={this.state.pdf}/>
                </div>
            </div>
        )
    }
}

export default BookBox;