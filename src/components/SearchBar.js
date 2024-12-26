import React, { useState } from 'react';

const SearchBar = ({ onSearch, sessions, onSessionChange }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form style={styles.searchBar} onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search by speaker"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={styles.searchInput}
            />
             <button style={styles.searchButton} type="submit">Search</button>
            <select style={styles.select} onChange={(e) => onSessionChange(e.target.value)}>
                <option value="">All Sessions</option>
                {sessions.map((session, index) => (
                    <option key={index} value={session}>{session}</option>
                ))}
            </select>
           
        </form>
    );
};

const styles = {
    searchBar: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '5px',
        maxWidth: '600px',
        margin: '20px auto',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9', // Light background for better contrast
    },
    searchInput: {
        flex: 1,
        border: 'none',
        outline: 'none',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px 0 0 5px', // Rounded corners on the left
    },
    searchButton: {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '0 5px 5px 0', // Rounded corners on the right
        padding: '10px 15px',
        marginBottom: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    select: {
        marginLeft: '10px', // Space between input and select
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        backgroundColor: '#fff',
    },
};

export default SearchBar;