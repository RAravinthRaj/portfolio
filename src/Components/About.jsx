import React from 'react';
 
const About = ({story}) => {
    return (
        <div className='container mx-auto text-center my-24'>
            <div>
                <h1 className='text-3xl text-white md:text-8xl font-bebas font-extrabold text-center mb-5'>A Little about Me</h1>
            </div>
            <div className='mx-10 md:mx-40'>
                <p className='text-lg text-white md:text-4xl font-cavet font-bold text-center mb-5'>{story}</p>
            </div>
        </div>
    );
}
 
 
export default About;