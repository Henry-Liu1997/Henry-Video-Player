import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="Video player"
          className="embed-reponsive-item"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{video.snippet.title}</h4>
          <p className="card-text">{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
