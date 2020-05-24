import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onFormSubmit('funny cats');
  }
  onFormSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBIIghJCliLg1k5WMs2mBWfk-Agw1pYrYk',
        type: 'video',
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <SearchBar onFormSubmit={this.onFormSubmit} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 order-2">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
          <div className="col-md-8">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
