import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Conference Event Planner</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/itinerary">My Itinerary</Link>
            </nav>
        </header>
    );
};

export default Header;