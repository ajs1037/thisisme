import React from 'react';
import "./about.css";
import { DiAndroid } from "react-icons/di";

const About = ()=> {
    return (
        <div className='container about-section' id='about'>
            <div className='row'>
                <div className='col-vl-6 col-lg-6 col-md-12 col-sm-12'>
                    <div className='about-image'>
                        <img src="https://picsum.photos/seed/picsum/400/400" height="400px" width="400px" alt=""></img>
                    </div>
                </div>

                <div className='col-vl-6 col-lg-6 col-md-12 col-sm-12'>
                    <div className='about-details'>
                        <div className='about-title'>
                            <h5>About</h5>
                            <span className='line'></span>
                        </div>

                        <p>Bio: asdsdfgsdfgsdg sdfg saf sdfg sd gsd fgs dfg sdf gsd gs d</p>

                        <div className='card-design'>
                            <div className='about-list-item'>
                                <div className='about-details-icon'>
                                    <p>
                                        <DiAndroid size={50}/>
                                    </p>
                                </div>
                                <div>
                                    <h6>Title</h6>
                                    <p>summary</p>
                                </div>
                            </div>
                        </div>

                        <div className='card-design'>
                            <div className='about-list-item'>
                                <div className='about-details-icon'>
                                    <p>
                                        <DiAndroid size={50}/>
                                    </p>
                                </div>
                                <div>
                                    <h6>Title</h6>
                                    <p>summary</p>
                                </div>
                            </div>
                        </div>

                        <div className='card-design'>
                            <div className='about-list-item'>
                                <div className='about-details-icon'>
                                    <p>
                                        <DiAndroid size={50}/>
                                    </p>
                                </div>
                                <div>
                                    <h6>Title</h6>
                                    <p>summary</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About