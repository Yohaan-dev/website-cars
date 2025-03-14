import React from 'react';

const Success = () => {
    return (
        <div className='bg-slate-300 pt-8 flex flex-col items-center'>
            <h1 className='text-3xl font-bold text-center text-green-600'>Success!</h1>
            <p className='text-lg mt-4 text-center'>
                Thank you for submitting your details. We have received your information successfully.
            </p>
            <p className='text-md mt-2 text-center'>
                You will receive an email confirmation shortly.
            </p>
        </div>
    );
};

export default Success;