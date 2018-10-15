import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <header id="mainBackground">
                    <div class="center">
                        <h2>Najlepsza fotografia na świecie</h2>
                        <h1>Fotografia</h1>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default Header;