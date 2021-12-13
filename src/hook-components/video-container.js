import React, { useState, useEffect } from "react";

export const YoutubePlayer = (props) => {
    const [playUrl, setPlay] = useState(props.url);
    useEffect(() => {
        if(props.isStart) {
            setPlay(props.url + '?start=0&autoplay=1');
        }
    }, [props.isStart])
    useEffect(() => {
        setPlay(props.url + `?start=${props.startTime}&autoplay=1`);
    }, [props.startTime])
    return (
        <div className="video-player" style={{width: '100%', height: '100%'}}>
            <iframe width="100%" height="280" src={playUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
};

function VideoPlayerContainer() {
    const [startPlay, setStartPlay] = useState(false);
    const [startTime, setStartTime] = useState(0);
    return (
        <div className="video-player-container">
            <ul className="video-item-list">
                <li className="video-item">
                    <YoutubePlayer url='https://www.youtube.com/embed/kYyaJyTLjpk' isStart={startPlay} startTime={startTime}></YoutubePlayer>
                </li>
                <li className="video-item">
                    <YoutubePlayer url='https://www.youtube.com/embed/kYyaJyTLjpk' isStart={startPlay} startTime={startTime}></YoutubePlayer>
                </li>
                <li className="video-item">
                    <YoutubePlayer url='https://www.youtube.com/embed/kYyaJyTLjpk' isStart={startPlay} startTime={startTime}></YoutubePlayer>
                </li>
                <li className="video-item">
                    <YoutubePlayer url='https://www.youtube.com/embed/kYyaJyTLjpk' isStart={startPlay} startTime={startTime}></YoutubePlayer> 
                </li>
            </ul>
            <div className="video-player-controls">
                <button onClick={ () => {
               setStartPlay(true);
            }}>Play</button>
            <input type="range" name="vol" min="0" max="5000" onChange={(event) => {
                setStartTime(event.target.value);    
            }}></input><span>{startTime/60}</span>
            </div>
        </div>
    );
}

export default VideoPlayerContainer;