import React from 'react'

export default function WhyBook() {
    return (
        <div className='top-destination  m-auto' style={{maxWidth:'1200px'}}>
            <div className='why-stay-with-uus'>
                
            <span className='py-5 headings mt-lg-3 mt-0 '>What Makes LazyMonal Unique?</span>
            </div>
            <div className="custom-hr">
                <hr />
            </div>
            <div className="container-w-w-u py-4 rounded-3" style={{border:''}}>
                <div className="advantages">
                    <div className="advantages-div">
                        <i className="bi bi-currency-dollar text-warning fs-2"></i><br/>
                        <span className='sub-heading'>Free Cancellation</span><br/>
                        <span>Stay flexible on your trip.</span>
                    </div>
                </div>
                <div className="advantages">
                    <div className="advantages-div">
                    <i class="bi bi-question-diamond fs-2 text-danger"></i><br/>
                        <span className='sub-heading'>24x7 support</span><br/>
                        <span>Always here for your needs.</span>
                    </div>
                </div>
                <div className="advantages">
                    <div className="advantages-div">
                        <i className="bi bi-lightbulb text-warning fs-2"></i><br/>
                        <span className='sub-heading'>300,000+ experiences</span><br/>
                        <span>Make memories around the world.</span>

                    </div>
                </div>
                <div className="advantages">
                    <div className="advantages-div">
                        <i className="bi bi-calendar text-info fs-2"></i><br/>
                        <span className='sub-heading'>Reserve now, pay later</span><br/>
                        <span>Book your spot.</span>
                    </div>
                </div>
                <div className="advantages">
                    <div className="advantages-div">
                        <i className="bi bi-star-fill text-success fs-2"></i><br/>
                        <span className='sub-heading'>Trusted reviews</span><br/>
                        <span>Several 4.5 and above stars <br/> from our customers.</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
