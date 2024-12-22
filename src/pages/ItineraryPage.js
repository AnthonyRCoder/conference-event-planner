import React from 'react';
import Itinerary from '../components/Itinerary';

const ItineraryPage = ({ itinerary, onRemoveFromItinerary  }) => {
    return (
        <div>
            <Itinerary itinerary={itinerary} onRemoveFromItinerary={onRemoveFromItinerary} />
        </div>
    );
};

export default ItineraryPage;