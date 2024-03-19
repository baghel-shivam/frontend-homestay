import React from 'react';
import img from '../Images/success.gif'
const Success = () => {
    return (
        <div className='loading-css'>
            <div className="" role="status">
                <img src={img} alt="GIF" className="centered-gif" />
            </div>
        </div>
    );
};

export default Success;
