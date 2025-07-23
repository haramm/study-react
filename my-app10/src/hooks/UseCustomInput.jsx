import React, { useState } from 'react';

export function useCustomInput(initValue) {

    const [value, setValue] = useState('');

    const onChange = (e) => setValue(e.target.value);

    return {
        value,
        onChange
    }

}