import React from 'react';

const UserPersonalPage = ({ nextStep, prevStep, handleChange, values }) => {
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
            <h1 className='text-2xl font-bold text-center'>Enter Personal Details</h1>
            <form className='flex flex-col items-center space-y-2 mt-4'>
                <label className='text-lg font-semibold'>
                    Occupation:
                    <input
                        className="focus:outline-none p-2 rounded-sm ml-3"
                        type="text"
                        name="occupation"
                        value={values.occupation}
                        onChange={handleChange('occupation')}
                    />
                </label>
                <br />
                <label className='text-lg font-semibold'>
                    City:
                    <input
                        className="focus:outline-none p-2 rounded-sm ml-3"
                        type="text"
                        name="city"
                        value={values.city}
                        onChange={handleChange('city')}
                    />
                </label>
                <br />
                <label className='text-lg font-semibold'>
                    Bio:
                    <textarea
                        className="focus:outline-none p-2 rounded-sm ml-3"
                        name="bio"
                        value={values.bio}
                        onChange={handleChange('bio')}
                    />
                </label>
                <br />
                <div className='flex space-x-4'>
                    <button onClick={goBack} className='p-2 px-4 rounded-md bg-slate-600 text-white hover:bg-slate-400'>Back</button>
                    <button onClick={continueStep} className='p-2 px-4 rounded-md bg-slate-600 text-white hover:bg-slate-400'>Next</button>
                </div>
            </form>
        </div>
    );
};

export default UserPersonalPage;