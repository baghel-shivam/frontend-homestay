import React from 'react'

export default function WhyBook() {
    return (
        <div className='top-destination pt-4'>
            <span className='pb-4 headings'>Why Stay with us?</span>
            <div className="container-city py-4">
                <div className="advantages">
                    <div className="advantages-div">
                        <i className="bi bi-currency-dollar fs-2"></i><br/>
                        <span className='sub-heading'>Free Cancellation</span><br/>
                        <span>Stay flexible on your trip.</span>
                    </div>
                </div>
                <div className="advantages">
                    <div className="advantages-div">
                        <i className="bi bi-lightbulb fs-2"></i><br/>
                        <span className='sub-heading'>300,000+ experiences</span><br/>
                        <span>Make memories around the world.</span>

                    </div>
                </div>
                <div className="advantages">
                    <div className="advantages-div">
                        <i className="bi bi-calendar fs-2"></i><br/>
                        <span className='sub-heading'>Reserve now, pay later</span><br/>
                        <span>Book your spot.</span>
                    </div>
                </div>
                <div className="advantages">
                    <div className="advantages-div">
                        <i className="bi bi-star-fill fs-2"></i><br/>
                        <span className='sub-heading'>Trusted reviews</span><br/>
                        <span>4.3 stars from 140,000+ Trustpilot reviews.</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
