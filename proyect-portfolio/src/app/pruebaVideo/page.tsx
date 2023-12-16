'use client'
import React, { useRef, useState, useEffect, useCallback } from 'react';
import ReactPlayer from 'react-player';
import { useStream } from '../StreamContext';



const RecordPage = () => {
    const { setCurrentStream } = useStream();
    const [mystream, setMyStream] = useState<MediaStream | null>(null);
    const [streamActive, setStreamActive] = useState(false);

    console.log('stream en linea ', setCurrentStream)
    const handlerVideo = useCallback(async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        });
        setMyStream(stream);
        setStreamActive(true);
        localStorage.setItem('streamActive', 'true');
        setCurrentStream(stream);  // Actualiza el contexto con la transmisión actual
    }, [setCurrentStream]);

    const stopHandler = () => {
        if (mystream) {
            mystream.getTracks().forEach(track => track.stop());
            setMyStream(null);
            setStreamActive(false);
            localStorage.setItem('streamActive', 'false');
        }
    };

    useEffect(() => {
        const storedStreamActive = localStorage.getItem('streamActive');
        if (storedStreamActive === 'true') {
            handlerVideo();
        }
    }, [handlerVideo]);

    return (
        <div>
            <h1>WebRTC Video Recorder</h1>
            <div className='bg-red-600'>
                <button onClick={handlerVideo} disabled={streamActive}>Start</button>
                <button onClick={stopHandler} disabled={!streamActive}>Stop</button>
            </div>
            {mystream && (
                <ReactPlayer
                    playing
                    height="300px"
                    width="700px"
                    url={mystream}
                />
            )}
        </div>
    );
};

export default RecordPage;
