import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ItineraryPage from './pages/ItineraryPage';

const App = () => {
    const [itinerary, setItinerary] = useState([]);
    const [buttonTexts, setButtonTexts] = useState({}); // New state for button texts

    const handleAddToItinerary = (talk) => {
        if (!itinerary.some(item => item.id === talk.id)) {
            // Check for time conflicts
            const hasConflict = itinerary.some(item => item.time === talk.time);
            if (hasConflict) {
                alert("This talk conflicts with another talk in your itinerary.");
            } else {
                setItinerary([...itinerary, talk]);
                setButtonTexts(prev => ({ ...prev, [talk.id]: 'Added to Itinerary' })); // Update button text
                alert("This talk is added in your itinerary.");
                
            }
        } else {
            alert("This talk is already in your itinerary.");
        }
    };

    const handleRemoveFromItinerary = (id) => {
        // Remove the talk from the itinerary
        setItinerary(itinerary.filter(talk => talk.id !== id));
        // Remove the button state from local storage
        localStorage.removeItem(`itinerary-${id}`);
        setButtonTexts(prev => ({ ...prev, [id]: 'Add to Itinerary' }));
    };

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home onAddToItinerary={handleAddToItinerary} buttonTexts={buttonTexts} />} />
                <Route path="/itinerary" element={<ItineraryPage itinerary={itinerary} onRemoveFromItinerary={handleRemoveFromItinerary} />} />
            </Routes>
        </Router>
    );
};

export default App;