import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  onFormSubmit = (e) => {
    e.preventDefault();

    // callback from parent component
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="input-group mb-3 mt-3">
          <input
            type="text"
            onChange={(e) => this.setState({ term: e.target.value })}
            value={this.state.query}
            className="form-control"
            placeholder="search videos"
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
