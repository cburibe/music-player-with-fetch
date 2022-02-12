import React from 'react';
import { IoPlaySkipForward, IoPlaySkipBack, IoPause } from 'react-icons/io5';
import { FaPlay } from 'react-icons/fa';

const Control = (props) => {

    const{pickSong, playStop, setSongOn, setIsPlaying, pauseSong, songOn, songs, currentSong} = props; 
    let skipBack = () => {
        if (songs[songOn - 1] !== undefined) {
            pickSong(songOn - 1);
            playStop();
            setSongOn(songOn - 1);
            setIsPlaying(true);
        } else if (songs[songOn - 1] === undefined) {
            pickSong(songs.length - 1);
            playStop();
            setSongOn(songs.length - 1);
            setIsPlaying(true);
        }
    }
    let skipForward = () => {
        if (songs[songOn + 1] !== undefined) {
            pickSong(songOn + 1);
            playStop();
            setSongOn(songOn + 1);
        } else if (songs[songOn + 1] === undefined) {
            pickSong(0);
            playStop();
            setSongOn(0);
        }
    }
    let playPause = () => {
        if (currentSong.current.paused) {
            playStop();
            setIsPlaying(true);
        } else {
            pauseSong();
            setIsPlaying(false);
        }
    }
    return (
        <div className='row'>
            <div className="col d-flex justify-content-end">
                <button className='bg-transparent text-white btn' onClick={()=> {skipBack();}}><IoPlaySkipBack /></button>
                <button className='bg-transparent text-white btn' onClick={()=> {playPause();}}>{!props.isPlaying ? (<FaPlay />) : (<IoPause/>)}</button>
                <button className='bg-transparent text-white btn' onClick={()=> {skipForward();}}><IoPlaySkipForward /></button>
            </div>
        </div>
    );
};

export default Control;