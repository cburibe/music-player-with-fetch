import { useEffect, useRef, useState } from 'react';
import "../Style/BodySong.css";
import { BiChevronLeft } from "react-icons/bi";
import BtnPlayInit from "./BtnPlayInit";
import SongsList from "./SongsList";
import Control from "./Control";


const BodySong = () => {

    const [songs, setSongs] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songOn, setSongOn] = useState(0);

    let songPlayer = useRef(null);


    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        try {
            const data = await fetch('https://assets.breatheco.de/apis/sound/songs')
            const users = await data.json()
            console.log(users);
            setSongs(users)
        } catch (error) {
            console.error(error)
        }
    }
    let pickSong = (index) => {
        songPlayer.current.src = `https://assets.breatheco.de/apis/sound/${songs[index].url}`;
    };
    let playStop = () => {
        songPlayer.current.play();
    }
    let pauseSong = () => {
        songPlayer.current.pause();
    }
    return (
        <>
            <div className="container position-absolute top-50 start-50 translate-middle SpotifyDesing" >
                <div className="row" >
                    <div className="col" >
                        <BiChevronLeft className="fs-1"/>
                        <h3> Mario </h3>
                        <p className="text-white fw-lighter fs-6">2 likes - 10h 20m</p>
                    </div>
                </div>
                <BtnPlayInit />
                <SongsList
                    songs={songs}
                    currentSong={songPlayer}
                    playStop={playStop}
                    pickSong={pickSong}
                    pauseSong={pauseSong}
                    setIsPlaying={setIsPlaying}
                    setSongOn={setSongOn} />

                <Control
                    songs={songs}
                    playStop={playStop}
                    currentSong={songPlayer}
                    pauseSong={pauseSong}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    pickSong={pickSong}
                    setSongOn={setSongOn}
                    songOn={songOn} />
            </div>
            <audio src={(songs[0] !== null && songs[0] !== undefined) ?
                "https://assets.breatheco.de/apis/sound/" + songs[0].url :
                ""}
                ref={songPlayer}>
            </audio>

        </>
    );
};

export default BodySong;