function AudioPlayer() {
    return (
        <audio controls preload="none">
            <source src="/audio/football-crowd.mp3" type="audio/mpeg" />
            <source src="/audio/football-crowd.ogg" type="audio/ogg" />
        </audio>
    )
}

export default AudioPlayer;
