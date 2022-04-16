import React from 'react'
import SearchBar from "./Components/SearchBar"
import youtube from './api/youtube'
import VideoList from './Components/VideoList'


class App extends React.Component {
  state = { videos: [] }


  onTermSubmit = async term => {  {/* the term is what has been entered in the search bar */}
    const response = await youtube.get('/search', {
      params: {
        q: term 
      }
    })
    this.setState({videos: response.data.items})
    
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar  onFormSubmit={ this.onTermSubmit }/>  {/* call-back function as prop to get the search term from the searchbar */}
        <VideoList videos={ this.state.videos }/>
      </div>
    )
  }
}

export default App
