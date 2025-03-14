import React from 'react';

const UserDetailsPage = ({ nextStep, handleChange, values }) => {
    const continueStep = e => {
        e.preventDefault(); // Prevent default form submission
        nextStep(); // Call the nextStep function passed as a prop
    };

    return (
        <div className='bg-slate-300 p-4'>
            <h1 className='text-2xl font-bold text-center'>Enter User Details</h1>
            <form className='flex flex-col items-center space-y-2 mt-4'>
                <label className='text-lg font-semibold'>
                    First Name:
                    <input
                        className="focus:outline-none p-2 rounded-sm ml-3"
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange('firstName')}
                    />
                </label>
                <br />
                <label className='text-lg font-semibold'>
                    Last Name:
                    <input
                        className="focus:outline-none p-2 rounded-sm ml-3"
                        type="text"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange('lastName')}
                    />
                </label>
                <br />
                <label className='text-lg font-semibold'>
                    Email:
                    <input
                        className="focus:outline-none p-2 rounded-sm ml-3"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange('email')}
                    />
                </label>
                <br />
                <button onClick={continueStep} className='p-2 px-4 rounded-md bg-slate-600 text-white hover:bg-slate-400'>Next</button>
            </form>
        </div>
    );
};

export default UserDetailsPage;