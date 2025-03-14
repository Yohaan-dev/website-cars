import { useState } from 'react';
import UserDetailsPage from './UserDetailsPage';
import UserPersonalPage from './UserPersonalPage';
import Confirm from './Confirm';
import Success from './Success';

const UserFormPage = () => {
    // Initialize state with useState hook
    const [state, setState] = useState({
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    });

    // Function to go to the next step
    const nextStep = () => {
        setState(prevState => ({
            ...prevState, // Copy all properties from prevState
            step: prevState.step + 1 // Increment step by 1
        }));
    };

    // Function to go to the previous step
    const prevStep = () => {
        setState(prevState => ({
            ...prevState, // Copy all properties from prevState
            step: prevState.step - 1 // Decrement step by 1
        }));
    };

    // Function to handle input changes
    const handleChange = input => e => {
        setState(prevState => ({
            ...prevState, // Copy all properties from prevState
            [input]: e.target.value // Update state with new input value
        }));
    };

    // Destructure state values
    const { step, firstName, lastName, email, occupation, city, bio } = state;
    const value = { firstName, lastName, email, occupation, city, bio };

    // Render different components based on the current step
    switch (step) {
        case 1:
            return (
                <UserDetailsPage
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={value} // Changed "value" to "values" to match the expected prop name
                />
            );
        case 2:
            return (
                <UserPersonalPage
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={value} // Changed "value" to "values" to match the expected prop name
                />
            );
        case 3:
            return (
                <Confirm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={value} // Changed "value" to "values" to match the expected prop name
                />
            );
        case 4:
            return <Success />;
        default:
            return null;
    }
};

export default UserFormPage;