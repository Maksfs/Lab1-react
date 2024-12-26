import React, { useState } from 'react';
import PasswordInput from './PasswordInput';
import StrengthIndicator from './StrengthIndicator';

const PasswordStrengthChecker = () => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(0);

    const calculateStrength = (password) => {
        let strength = 0;
        if (password.length > 6) strength += 1;
        if (password.match(/[a-z]+/)) strength += 1;
        if (password.match(/[A-Z]+/)) strength += 1;
        if (password.match(/[0-9]+/)) strength += 1;
        if (password.match(/[$@#&!]+/)) strength += 1;
        return Math.min(strength, 3); // max strength level is 3
    };

    const handlePasswordChange = (newPassword) => {
        setPassword(newPassword);
        setStrength(calculateStrength(newPassword));
    };

    return (
        <div>
            <PasswordInput password={password} onPasswordChange={handlePasswordChange} />
            <StrengthIndicator strength={strength} />
        </div>
    );
};

export default PasswordStrengthChecker;
