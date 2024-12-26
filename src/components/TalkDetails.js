import React, { useState, useEffect } from 'react';

const TalkDetails = ({ talk, onAddToItinerary, onClose, onRateTalk, buttonText   }) => {
    const [rating, setRating] = useState(0);
    const [averageRating, setAverageRating] = useState(0);


    useEffect(() => {
        if (!talk) return;
        // Load ratings from localStorage or use provided ratings
        const storedRatings = JSON.parse(localStorage.getItem(`ratings_${talk.speaker}`)) || talk.ratings || [];
        const avgRating = storedRatings.length > 0 
            ? (storedRatings.reduce((a, b) => a + b, 0) / storedRatings.length).toFixed(2) 
            : 0;
        setAverageRating(avgRating);
    }, [talk]);
    

       
    const handleRate = () => {
        if (!talk) return;
        // Call the onRateTalk function passed from the parent component
        onRateTalk(talk.id, rating);
        setRating(0); // Reset rating input after submission
        onClose();
        alert("Added rate to talk.");
  
    };



    const handleClick = () => {
        if (!talk) return;
        onAddToItinerary(talk);
        onClose();
    };
    
    if (!talk) return <p>No Talk</p>;

    return (
        <div className="talk-card">
            <button onClick={onClose} className="close-button">Close</button>

            <h2>{talk.title}</h2>
            <p className="speaker">Speaker: {talk.speaker}</p>
            <p className="description">Description: {talk.description}</p>
            <p className="time">Time: {talk.time}</p>
            <p className="average-rating">Average Rating: {averageRating || 'Not rated yet'}</p>

            <input
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                placeholder="Rate (1-5)"
                className="rating-input"
            />
            <button onClick={handleRate} className="rate-button">Rate Talk</button>
            <button onClick={handleClick} className="add-button">{buttonText}</button>
        </div>
    );
};

export default TalkDetails;