import React from 'react';
import "./services.css";

import { FcOk } from "react-icons/fc";

const Services = ()=> {

    // example api request
    const servicedata = [
        {
            id:1,
            service1: "Web Development",
            service2: "Mobile App Development",
            service3: "UI/UX Design",
            service4: "Web Development",
        },    
        {
            id:2,
            service1: "Web Development",
            service2: "Mobile App Development",
            service3: "UI/UX Design",
            service4: "Web Development",
        },    
        {
            id:3,
            service1: "Web Development",
            service2: "Mobile App Development",
            service3: "UI/UX Design",
            service4: "Web Development",
        },    
        {
            id:4,
            service1: "Web Development",
            service2: "Mobile App Development",
            service3: "UI/UX Design",
            service4: "Web Development",
        },    
        {
            id:5,
            service1: "Web Development",
            service2: "Mobile App Development",
            service3: "UI/UX Design",
            service4: "Web Development",
        },    
        {
            id:6,
            service1: "Web Development",
            service2: "Mobile App Development",
            service3: "UI/UX Design",
            service4: "Web Development",
        },    
        {
            id:7,
            service1: "Web Development",
            service2: "Mobile App Development",
            service3: "UI/UX Design",
            service4: "Web Development",
        },    
        {
            id:8,
            service1: "Web Development",
            service2: "Mobile App Development",
            service3: "UI/UX Design",
            service4: "Web Development",
        },    
    ];

    const colors = [
        "#DCDCDC",
        "#DCDCDC",
        "#DCDCDC",
        "#DCDCDC",
        "#DCDCDC",
        "#DCDCDC",
        "#DCDCDC",
        "#DCDCDC"
    ]



    return (
        <div className='container service-section'>

            {/* section title */}
            <div className='section-title'>
                <h5>Services</h5>
                <span className='line'></span>
            </div>

            <div className='row'>
                {servicedata.map((item, index) => (

                    <div className='col-xl-3 col-lg-3 col-md-2 col-sm-1' key={index}>
                        <div className='services'>
                            <span className='service-number' style={{ backgroundColor:colors[index]}}>
                                <p>{item.id}</p>
                            </span>

                            <div className='list-of-service'>
                                <p><FcOk size={20} style={{ margin: "5px" }}/> {item.service1}</p>
                                <span className='service-item-underline'></span>
                                <p><FcOk size={20} style={{ margin: "5px" }}/> {item.service2}</p>
                                <span className='service-item-underline'></span>
                                <p><FcOk size={20} style={{ margin: "5px" }}/> {item.service3}</p>
                                <span className='service-item-underline'></span>
                                <p><FcOk size={20} style={{ margin: "5px" }}/> {item.service4}</p>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    );
};

export default Services