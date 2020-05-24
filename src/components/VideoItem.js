import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  const formatTitle = (title) => {
    return title.length > 50 ? `${title.substring(0, 50)}...` : title;
  };

  return (
    <li className="video-item media" onClick={() => onVideoSelect(video)}>
      <img
        alt={video.snippet.title}
        src={video.snippet.thumbnails.default.url}
        className="mr-3 img-fluid"
      />
      <div className="media-body align-self-center">
        <p className="lead">{formatTitle(video.snippet.title)}</p>
      </div>
    </li>
  );
};

export default VideoItem;
