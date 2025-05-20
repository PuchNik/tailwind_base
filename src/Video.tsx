export const Video: React.FC = () => {
    return (
        <div className="perspective-distant mt-30">
            <video
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                className="mx-auto rounded shadow-2xl w-[50%] h-[50%] aspect-video rotate-x-40 rotate-z-20 transform-3d"
                title="Video"
                muted
                autoPlay
                loop
                playsInline
            ></video>
        </div>
    )
}
