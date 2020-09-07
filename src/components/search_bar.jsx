import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    }
  }
  
  handleUpdate = (event) => {
    // console.log(event.target.value);
    // debugger
    this.setState({
      term: event.target.value
    });
    this.props.searchFunction(event.target.value);
  }

  componentWillMount() {
    console.log("SearchBar will mount");
    // setInterval
  }

  componentDidMount() {
    console.log("SearchBar did mount")
  }

  // componentWillUnmount() {
  //   clearInterval
  // }

  render() {
    console.log("SearchBar render")
    return (
      <input 
        value={this.state.term}
        type="text" 
        className="form-control form-search"
        onChange={this.handleUpdate} 
      />
    );
  }
}

export default SearchBar;
