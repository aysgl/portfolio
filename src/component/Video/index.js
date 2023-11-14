import React, { useRef, useState } from 'react';

const Video = ({ src, title, poster }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoClick = () => {
        const video = videoRef.current;

        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div className='portfolio_item ratio ratio-1x1' onClick={handleVideoClick}>
            <video ref={videoRef} className='img-responsive' poster={poster}>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="portfolio_item_hover">
                <div className="portfolio-border clearfix">
                    <div className="item_info">
                        <span>{title}</span>
                        <em>js, html, scss</em>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
