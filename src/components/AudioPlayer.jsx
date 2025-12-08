function AudioPlayer(props) {
    return (
        <audio controls preload="none">
            <source src={`/audio/${props.file}.mp3`} type="audio/mpeg" />
            <source src={`/audio/${props.file}.ogg`} type="audio/ogg" />
        </audio>
    )
}

export default AudioPlayer;
