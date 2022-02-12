import React from 'react';
import "../Style/SongList.css";


const SongsList = (props) => {
    const {
        songs,
        currentSong,
        playStop,
        pickSong,
        pauseSong,
        setIsPlaying,
        setSongOn,
     } = props;
     
    const buttonAction = (element, index) => {
        //si el src de la cancion seleccionada no es la misma que la url del element
        //seteamos la cancion actual a la del index
        if (currentSong.current.src !== element.url) {
            pickSong(index);
            setSongOn(index);
        }
        //si está pausado, comenzamos la reproduccion
        if (currentSong.current.paused) {
            playStop();
            setIsPlaying(true);
            //si no, pausamos la reproduccion  
        } else {
            pauseSong();
            setIsPlaying(false);
        }
    }
    return (
        <div className='row'>
            <div className="col-md-12 col-12">
                <div className="overflow-auto" style={{ height: "350px" }}>
                    <ul className='list-group'>
                        {
                            songs.map((item, index) => {
                                return (
                                    <li key={index} className="hola text-white bg-transparent list-group-item" onClick={() => { buttonAction(item, index); }}>
                                        {item.name}

                                    </li>
                                )
                            })
                        }
                        {/* <audio src={`https://assets.breatheco.de/apis/sound/${item.url}`}></audio> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SongsList;