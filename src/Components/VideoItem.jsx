const VideoItem = ({ video }) => {
   return(
      <div>
         <h3>{video.snippet.title}</h3>
         <img src={video.snippet.thumbnails.medium.url} alt="" />
         <br />
      </div>
   )
}

export default VideoItem