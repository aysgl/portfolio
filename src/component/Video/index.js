import React, { useRef, useEffect } from 'react';

const Video = ({ src, title }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        const handleCanPlay = () => {
            video.play();
            video.removeEventListener('canplay', handleCanPlay);
        };

        video.addEventListener('canplay', handleCanPlay);

        return () => {
            video.removeEventListener('canplay', handleCanPlay);
        };
    }, []);

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
            <video controls ref={videoRef} className='img-responsive' onClick={handleVideoClick} autoplay>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
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
