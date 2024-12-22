import React, { useState } from 'react';
import Stars from './stars';
const StarRating = ({ position, onRate }) => {
    const [rating, setRating] = useState(0);

    const handleRate = (value) => {
        setRating(value);
        onRate(value); // Call the function to handle the rating
    };

    return (
        <div>
            <Stars position={position} rating={rating} />
            <div className="star-buttons">
                {[1, 2, 3, 4, 5].map((value) => (
                    <button
                        key={value}
                        onClick={() => handleRate(value)}
                        className={`star-button ${rating === value ? 'selected' : ''}`}
                    >
                        {value} ★
                    </button>
                ))}
            </div>
            <button onClick={() => onRate(rating)} className="rate-button">Rate Talk</button>
        </div>
    );
};

export default StarRating;