import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Log extends Component {
    render() {
        // console.log('rendered homepage');
        return (
            <div>
                <h1>Animals</h1>
                <input type='text' id='animalName'></input>
                <div>
                    <button type='button'>New Log</button>
                    <Link to={'/newanimal'}>
                        <button type='button'>Add Animal</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Log