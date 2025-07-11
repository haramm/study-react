import React, { useEffect } from 'react';

function Sign(props) {

    useEffect(() => {
        console.log('sign mount');
        return () => {
            console.log('sign unmount');
        }
    });

    return (
        <div>
            <div>화면 보임</div>
        </div>
    );
}

export default Sign;