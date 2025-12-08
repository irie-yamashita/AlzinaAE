function VideoPlayer({ file = 'prova', width = 1920, height = 1080, cols=1}) {

    return (
        <div className={`grid col-span-${cols} gap-3`}>
            <video controls width={width} height={height} preload="none">
                <source src={`/videos/${file}.mp4`} type="video/mp4" />
                <source src={`/videos/${file}.webm`} type="video/webm" />
                <track src="subtitols.vtt" kind="subtitles" srcLang="ca" label="Català" />
            </video>
        </div>
    )
}

export default VideoPlayer;
