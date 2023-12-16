'use client'
import React from 'react';
import ReactPlayer from 'react-player';
import { useStream } from '../StreamContext';

function pageUser() {
    const { currentStream } = useStream();
    console.log(currentStream)
    return (
        <div>
            <h1>Visualización de transmisión en vivo</h1>
            {currentStream && (
                <ReactPlayer
                    playing
                    muted={false}
                    height="300px"
                    width="700px"
                    url={currentStream}
                />
            )}

        </div>
    );
}

export default pageUser;
