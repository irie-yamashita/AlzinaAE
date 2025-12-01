function VideoPlayer() {
    return (
        <div className="grid grid-cols-2 gap-3">
            <video controls width="1920" height="1080" preload="none">
                <source src="/videos/videoProva.mp4" type="video/mp4" />
                <source src="/videos/videoProva.webm" type="video/webm" />
                <track src="subtitols.vtt" kind="subtitles" srclang="ca" label="Català" />
            </video>
        </div>
    
    )
}

export default VideoPlayer;
