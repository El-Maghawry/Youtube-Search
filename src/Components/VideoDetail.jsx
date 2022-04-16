const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className="ui segment">...</div>;
  }

  return (
    <div>
      <div className="ui embed">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameBorder="1"
          title="Video Player"
        ></iframe>
      </div>
      <div className="ui segment">
        <div>{video.snippet.channelTitle}</div>
        <h4 className="header">{video.snippet.title}</h4>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
