import React, { useState } from 'react';

const SearchBar = ({ onSearch, sessions, onSessionChange }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search by speaker"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <select onChange={(e) => onSessionChange(e.target.value)}>
                <option value="">All Sessions</option>
                {sessions.map((session, index) => (
                    <option key={index} value={session}>{session}</option>
                ))}
            </select>
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;