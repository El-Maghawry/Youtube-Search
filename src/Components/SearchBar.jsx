import React from "react";


class SearchBar extends React.Component {
   
  state = { term: 'carwow' }

  onInputChange = (event) => {
   this.setState({ term: event.target.value })
  }

  onFormSubmit = event => {
   event.preventDefault()

   this.props.onFormSubmit(this.state.term);  {/* this will go back to the App component  */}
  } 

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={ this.onFormSubmit } className="ui form">
          <div className="field">
            <label htmlFor="">
              <h3>Video Search</h3>
            </label>
            <input
              type="text"
              value={ this.state.term }
              placeholder="E.g. Explore Alternatives"
              onChange={ this.onInputChange }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
