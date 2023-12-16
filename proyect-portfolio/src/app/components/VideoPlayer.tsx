import React from 'react';

const VideoPlayer: React.FC<{ videoUrl: string }> = ({ videoUrl }) => {
    return (
        <div>
            <h1>Reproductor de Video</h1>
            <video controls width="640" height="360">
                <source src={videoUrl} type="video/mp4" />
                Tu navegador no soporta el tag de video.
            </video>
        </div>
    );
};

export default VideoPlayer;
