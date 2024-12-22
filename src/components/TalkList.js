import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useLocalStorage } from './useLocalStorage';

const TalksList = ({ talks, onSelectTalk }) => {
    const [favorites, setFavorites] = useLocalStorage('favorites', []);

    const onToggleFavorite = (talk) => {
        if (favorites.includes(talk.id)) {
            setFavorites(favorites.filter(id => id !== talk.id));
        } else {
            setFavorites([...favorites, talk.id]);
        }
    };

    return (
        <div style={styles.talksContainer}>
            {talks.map(talk => (
                <div 
                    style={styles.talkCard} 
                    key={talk.id} 
                    onClick={() => onSelectTalk(talk)}
                >
                    <h3 style={styles.talkTitle}>{talk.title}</h3>
                    <p style={styles.talkSpeaker}>by {talk.speaker}</p>
                    <p style={styles.talkTime}>at {talk.time}</p>
                    <button 
                        style={styles.favoriteButton} 
                        onClick={(e) => { e.stopPropagation(); onToggleFavorite(talk); }}
                    >
                        {favorites.includes(talk.id) ? <FaHeart color="red" /> : <FaRegHeart />}
                    </button>
                </div>
            ))}
        </div>
    );
};

const styles = {
    talksContainer: {
        display: 'flex',
        flexDirection: 'column', // Stack cards vertically
        alignItems: 'flex-start', // Align cards to the left
        padding: '20px',
        width: '600px', // Fixed width for the container
    },
    talkCard: {
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        width: '100%', // Full width of the container
        marginBottom: '15px', // Space between cards
        transition: 'transform 0.2s',
        cursor: 'pointer',
    },

    talkTitle: {
        fontSize: '1.2em',
        margin: '0',
    },
    talkSpeaker: {
        color: '#555',
        margin: '5px 0',
    },
    talkTime: {
        color: '#555',
        margin: '5px 0',
    },
    favoriteButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0',
        marginTop: '10px',
    },
};

export default TalksList;