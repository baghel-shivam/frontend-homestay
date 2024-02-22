import React from 'react';

export default function Rating({ number }) {
    const filledStars = [];
    const unfilledStars = [];

    // Generate filled stars
    for (let i = 0; i < number; i++) {
        filledStars.push(<span key={i}>&#9733;</span>); // Unicode for a star
    }

    // Generate unfilled stars
    for (let i = number; i < 5; i++) {
        unfilledStars.push(<span key={i}>&#9734;</span>); // Unicode for an unfilled star
    }

    return (
        <div>
            {filledStars}
            {unfilledStars}
        </div>
    );
}
