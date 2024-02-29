import Sound from "react-sound";
import MusicElvis from "../../public/musicjs.mp3";
import { useState } from "react";


const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {

    const [isPlaying, setIsPlaying] = useState(false);


    return (
        <div>
            <button onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Play' : 'Stop'}
            </button>
            <Sound
                url={MusicElvis}
                playStatus={
                   isPlaying ?  Sound.status.PLAYING : Sound.status.STOPPED
                }
                playFromPosition={300}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
            />
        </div>
    )
};

export default PlaySound;