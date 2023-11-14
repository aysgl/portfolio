import React, { useRef } from 'react';

const Video = ({ src, title }) => {
    const videoRef = useRef(null);

    const handleVideoClick = () => {
        const video = videoRef.current;

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    return (

        <div className='portfolio_item ratio ratio-1x1'>
            <video ref={videoRef} src={src} className='img-responsive' onClick={handleVideoClick}></video>
            <div className="portfolio_item_hover" onClick={handleVideoClick}>
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
