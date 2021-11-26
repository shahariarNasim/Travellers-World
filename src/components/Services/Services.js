import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://travellers-world.herokuapp.com/Services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
             <h2 className="text-secondary mt-3 mb-3">TOP PLACES</h2>
             <h4  className="text-success mt-3 mb-3">BEST TRAVEL PACKAGES AVAILABLE</h4>
             <div className="service-container gap-2 mx-2 row justify-content-around">
                {
                    services.map(service => <Service
                     key ={ service.id}
                     service = {service}
                    ></Service>)
                }

             </div>
        </div>
    );
};

export default Services;