import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    }
    // this.search("disney");
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  search = (query) => {
    // TODO: API call
    giphy('EfieXGVZLa24MvZu0SB60Tfwtqx1BYE1').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      // Res contains gif data! 
      // console.log(res);
      // res means result
      this.setState({
        // res.data is an array objects containing a key id
        gifs: res.data 
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
        </div>
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId} />
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
