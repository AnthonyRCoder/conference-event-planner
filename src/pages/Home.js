import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import TalkList from '../components/TalkList';
import TalkDetails from '../components/TalkDetails';

const Home = ({ onAddToItinerary, buttonTexts }) => {
    const [talks, setTalks] = useState([]);
    const [selectedTalk, setSelectedTalk] = useState(null);
  
    const [sessions, setSessions] = useState([]);
    const [filteredTalks, setFilteredTalks] = useState([]);

    useEffect(() => {
        const fetchTalks = async () => {
            const response = await axios.get('http://localhost:3001/talks'); // Adjust the URL as needed
            setTalks(response.data);
            setFilteredTalks(response.data);
            const uniqueSessions = [...new Set(response.data.map(talk => talk.session))];
            setSessions(uniqueSessions);
        };
        fetchTalks();
    }, []);

    const handleSearch = (query) => {
        const filtered = talks.filter(talk => talk.speaker.toLowerCase().includes(query.toLowerCase()));
        setFilteredTalks(filtered);
    };

    const handleSessionChange = (session) => {
        if (session) {
            const filtered = talks.filter(talk => talk.session === session);
            setFilteredTalks(filtered);
        } else {
            setFilteredTalks(talks);
        }
    };


    const handleRateTalk = async (talkId, rating) => {
        try {
            // Assuming you have an endpoint to add a rating
            await axios.get(`http://localhost:3001/talks/rate/${talkId}/${rating}`);
            
            // Fetch updated talks to reflect the new ratings
            const updatedTalks = await axios.get('http://localhost:3001/talks');
            setTalks(updatedTalks.data);
            setFilteredTalks(updatedTalks.data);
        } catch (error) {
            console.error("Error rating talk:", error);
            alert("Failed to rate the talk. Please try again.");
        }
    };

    const handleSelectTalk = (talk) => {
        setSelectedTalk(talk);
    };
    const handleCloseTalkDetails = () => {
        setSelectedTalk(null); // Reset selected talk to close the details
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} sessions={sessions} onSessionChange={handleSessionChange} />
            <TalkList talks={filteredTalks} onSelectTalk={handleSelectTalk} />
            {selectedTalk && (
            <TalkDetails talk={selectedTalk} 
            onClose={handleCloseTalkDetails} 
            onAddToItinerary={onAddToItinerary} 
            onRateTalk={handleRateTalk} 
            buttonText={buttonTexts[selectedTalk.id] || 'Add to Itinerary'} // Pass button text
            />
            )}
        </div>
    );
};

export default Home;