import React, { Component } from 'react';

class Gif extends Component {

  handleClick = () => {
    // console.log(event.target);
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // don't call render if props.id did not change
    return nextProps.id !== this.props.id; 
  }
  

  render() {
    console.log("GIF Render " + this.props.id);
    const { id } = this.props;
    if (!id) {
      return null;
    }
    // if (!this.props.id) {
    //   return null;
    // }

    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img className="gif" src={src} alt="" 
      onClick ={this.handleClick}/>
    );
  }
}

export default Gif;
