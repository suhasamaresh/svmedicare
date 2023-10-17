// GoogleMap.tsx

import React from 'react';

const GoogleMap: React.FC = () => {
    return (
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7989287895566!2d77.5419692741366!3d12.920641115995366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f8de90e47d1%3A0xaa053863cd9dc9c1!2sS%20V%20MEDICARE%20SYSTEM!5e0!3m2!1sen!2sin!4v1697351505741!5m2!1sen!2sin" 
            width="400" 
            height="300" 
            style={{ border: '0' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
        />
    );
};

export default GoogleMap;
