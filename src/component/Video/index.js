import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Video = ({ src, video, title, poster, tag }) => {
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
            <video ref={videoRef} className='img-responsive' poster={poster} >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="portfolio_item_hover" >
                <div className="portfolio-border clearfix">
                    <div className="item_info">
                        <span><a href={src} target='_blank'>{title}</a></span>
                        <em>{tag}</em>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
