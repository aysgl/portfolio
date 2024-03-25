/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Video = ({ src, title, poster, tag, openModal }) => {
  return (
    <Router>
      <div className="portfolio_item ratio ratio-1x1" onClick={openModal}>
        <img src={poster} className="img-responsive" />
        <div className="portfolio_item_hover">
          <div className="portfolio-border clearfix">
            <div className="item_info">
              <span>
                <Link to={src} target="_blank">
                  {title}
                </Link>
              </span>
              <em>{tag}</em>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Video;
