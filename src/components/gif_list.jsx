import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render() {

      this.props.gifs.map(gif => {
        return <Gif id={gif.id} />
      });

  }
}

export default GifList;
