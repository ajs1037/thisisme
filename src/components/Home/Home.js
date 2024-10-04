import React from 'react';
import "./home.css";
import Typewriter from 'typewriter-effect';


const Home = ()=> {
    return (
        <div className='container-fluid home'>
            <div className='container home-content'>

                <h1>
                <Typewriter 
                    options={{
                        strings: [
                            'Web Development', 
                            'Mobile App Development',
                            'UI/UX Design'],
                        autoStart: true,
                        loop: true,
                        delay: 5
                    }}
                />

                </h1>

                <p>test teste sestestsersdgsdgf sdgsdgs fsdgsd sdgsdfg sdfgsdfgsdfgsd fgsdfgsdgsdfg sdf.</p>
                <span className='view-details-home-button'>View Details</span>
            </div>
        </div>
    );
};

export default Home