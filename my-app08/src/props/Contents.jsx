import React from 'react';

function Contents({isDark}) {

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

export default Contents;