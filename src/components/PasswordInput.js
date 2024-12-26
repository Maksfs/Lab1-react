import React from 'react';

const PasswordInput = ({ password, onPasswordChange }) => {
    return (
        <div>
            <input
                type="password"
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
                placeholder="Enter your password"
            />
        </div>
    );
};

export default PasswordInput;
