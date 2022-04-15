import "./App.css"
import React from 'react'
import SearchBar from "./Components/SearchBar"

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar/>
      </div>
    )
  }
}

export default App
