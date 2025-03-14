import React from 'react';

const Confirm = ({ nextStep, prevStep, values }) => {
    const continueStep = e => {
        e.preventDefault(); // Prevent default form submission
        nextStep(); // Call the nextStep function passed as a prop
    };

    const goBack = e => {
        e.preventDefault(); // Prevent default form submission
        prevStep(); // Call the prevStep function passed as a prop
    };

    return (
        <div className='bg-slate-300 p-4'>
            <h1 className='text-2xl font-bold text-center'>Confirm Your Details</h1>
            <div className='flex flex-col items-center mt-4'>
                <p className='text-lg'><strong>First Name:</strong> {values.firstName}</p>
                <p className='text-lg'><strong>Last Name:</strong> {values.lastName}</p>
                <p className='text-lg'><strong>Email:</strong> {values.email}</p>
                <p className='text-lg'><strong>Occupation:</strong> {values.occupation}</p>
                <p className='text-lg'><strong>City:</strong> {values.city}</p>
                <p className='text-lg'><strong>Bio:</strong> {values.bio}</p>
            <div className='flex space-x-4 mt-4'>
                <button onClick={goBack} className='p-2 px-4 rounded-md bg-slate-600 text-white hover:bg-slate-400'>Back</button>
                <button onClick={continueStep} className='p-2 px-4 rounded-md bg-slate-600 text-white hover:bg-slate-400'>Confirm & Continue</button>
            </div>
            </div>
        </div>
    );
};

export default Confirm;