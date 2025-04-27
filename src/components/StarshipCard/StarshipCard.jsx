import React from 'react';
import { useNavigate } from "react-router-dom";
import './StarshipCard.css'

const StarshipCard = ({ ship }) => {
    // STATES
    const navigate = useNavigate();

    // GO TO DETAILS
    const goToDetails = () => {
        navigate(`/starship/${encodeURIComponent(ship.url)}`);
    };

    return (
        <div className="card-container">
            <h3>{ship.name}</h3>
            <p>Model: {ship.model}</p>
            <p>Speed: {ship.max_atmosphering_speed}</p>
            <button className='detail-btn' onClick={goToDetails}>Detail</button>
        </div>
    );
};

export default StarshipCard;
