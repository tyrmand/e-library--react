import React from 'react';

class Select extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <h2>Wybierz gatunek:</h2>
                <select>
                    <option value="economics">Ekonomia</option>
                    <option value="esoterics">Ezoteryka</option>
                    <option value="fantasy-sf">Fantastyka</option>
                    <option value="philosophy">Filozofia</option>
                    <option value="history">Historia</option>
                    <option value="hobby">Hobby i inne</option>
                    <option value="informatics">Informatyka</option>
                    <option value="english">Język angielski</option>
                    <option value="spanish">Język hiszpański</option>
                    <option value="german">Język niemiecki</option>
                    <option value="russian">Język rosyjski</option>
                    <option value="detective">Kryminał i sensacja</option>
                    <option value="culture">Kultura i sztuka</option>
                    <option value="literature">Literatura piękna</option>
                    <option value="health">Medycyna i farmacja</option>
                    <option value="science">Nauki ścisłe</option>
                    <option value="social">Nauki społeczne</option>
                    <option value="poetry">Poezja</option>
                    <option value="polish">Polonistyka i językozawstwo</option>
                    <option value="psychology">Psychologia i poradniki</option>
                    <option value="religion">Religia</option>
                    <option value="documentary">Reportaż i literatura faktu</option>
                </select>
            </Fragment>
        )
    }
}

export default Select;