import React from "react";
import SearchBar from "./Components/SearchBar";
import youtube from "./api/youtube";
import VideoList from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    {
      /* the term is what has been entered in the search bar */
    }
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
         <VideoDetail video={this.state.selectedVideo}/>
        {/* call-back function as prop to get the search term from the searchbar */}
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
       
      </div>
    );
  }
}

export default App;
