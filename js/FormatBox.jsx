import React from 'react';

class FormatBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            epub: this.props.epub,
            mobi: this.props.mobi,
            pdf: this.props.pdf
        }
    }

    renderEpub = () => {
        if (this.state.epub) {
            return (
                <div className='formatBoxInside'>epub</div>
            )
        }
    }

    renderMobi = () => {
        if (this.state.mobi) {
            return (
                <div className='formatBoxInside'>mobi</div>
            )
        }
    }

    renderPdf = () => {
        if (this.state.pdf) {
            return (
                <div className='formatBoxInside'>pdf</div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderEpub()}
                {this.renderMobi()}
                {this.renderPdf()}
            </div>
        )
    }

}

export default FormatBox;