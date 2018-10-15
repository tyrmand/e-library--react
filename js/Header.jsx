import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header id="mainBackground">
                    <div className="center">
                        <h2>Moja kolekcja ebooków</h2>
                        <h1>e-library</h1>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;