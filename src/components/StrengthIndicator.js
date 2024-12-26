import React from 'react';

const StrengthIndicator = ({ strength }) => {
    const getStrengthLabel = (strength) => {
        if (strength === 0) return 'Too weak';
        if (strength === 1) return 'Weak';
        if (strength === 2) return 'Medium';
        if (strength === 3) return 'Strong';
        return '';
    };

    const getStrengthColor = (strength) => {
        if (strength === 0) return 'red';
        if (strength === 1) return 'orange';
        if (strength === 2) return 'yellow';
        if (strength === 3) return 'green';
        return 'black';
    };

    return (
        <div style={{ color: getStrengthColor(strength) }}>
            {getStrengthLabel(strength)}
        </div>
    );
};

export default StrengthIndicator;
