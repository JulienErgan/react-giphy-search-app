import React, { Component } from 'react';
import Gif from './gif';

// Destructuring
const GifList = ({gifs, selectGif}) => {
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => <Gif id={id} key={id} selectGif={selectGif} />)}
    </div>
  );
}


// const GifList = (props) => {
//   return (
//     <div className="gif-list">
//       {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
//     </div>
//   );
// }

// class GifList extends Component {

//   renderList = () => {
//     return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif}/> );
//   }

//   render() {
//     return (
//       <div className="gif-list">
//         {this.renderList()}
//       </div>
//     );
//   } 
// }

export default GifList;
