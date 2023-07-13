import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
    render() {
        return (
            <section>
                <h1 className="pageHeader">Welcome!</h1>
                <div>
                    <p>Please select one of the following categories to get started</p>
                    <div>
                        <Link to={'/log'}>
                            <button type="button">Create Log</button>
                        </Link>
                        <Link to={'/data'}>
                            <button type="button">Get Info</button>
                        </Link>
                    </div>

                </div>
            </section>
            
        );
    }
}

export default Homepage;