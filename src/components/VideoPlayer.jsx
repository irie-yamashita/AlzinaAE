function VideoPlayer() {
    return (
        <video controls width="640" height="360" preload="none">
            <source src="video.mp4" type="video/mp4" />
            <source src="video.webm" type="video/webm" />
            <track src="subtitols.vtt" kind="subtitles" srclang="ca" label="Català" />
        </video>
    )
}

export default VideoPlayer;
