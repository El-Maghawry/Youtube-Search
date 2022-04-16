import './VideoItem.css'

const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img
        className="image ui"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
