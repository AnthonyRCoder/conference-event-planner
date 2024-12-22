import React from 'react';

const Itinerary = ({ itinerary, onRemoveFromItinerary }) => {
    return (
        <div>
            <h2 style={styles.talkHeader}>My Itinerary</h2>
            {itinerary.length === 0 ? (
                <h3 style={styles.talkText}>No talks scheduled.</h3>
            ) : (
                <div style={styles.talksContainer}>
                         {itinerary.map(talk => (
                              <div 
                              style={styles.talkCard} 
                              key={talk.id} 
                                >
                                   <h3 style={styles.talkTitle}>{talk.title}</h3>
                                    <p style={styles.talkSpeaker}>by {talk.speaker}</p>
                                    <p style={styles.talkTime}>at {talk.time}</p>
                                 <button className="close-button" onClick={() => onRemoveFromItinerary(talk.id)}>Remove</button>
                             </div>
                         ))}
                     
             </div>
                
            )}
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

    talkHeader: {
        fontSize: '2.2em',
        margin: '0', 
        padding: '30px',
    },

    talkText: {
        fontSize: '1.2em',
        padding: '40px',
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

export default Itinerary;