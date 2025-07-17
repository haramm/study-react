import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ContextContents() {

    const {isDark} = useContext(ThemeContext);

    const contentsCss = {
        backgroundColor : isDark ? 'black' : 'lightGray',
        color : isDark ? 'white' : 'black'
    }

    return (
        <>
            <header className='contents' style={contentsCss}>
                <h2>날씨가 이상하네요.</h2>
            </header>
        </>
    );
}

export default ContextContents;