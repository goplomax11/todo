import React from 'react';

import './search-panel.css';

class SearchPanel extends React.Component {

  state = {
    term: ''
  }



  onSearchChange =(e) =>{
    const term = e.target.value;
    this.setState({term});
    this.props.onSearchChange(term);
  };

  render(){

  

  return (
    <input type="text"
              className="form-control search-input"
              placeholder="search" 
              onChange={this.onSearchChange}
              value={this.state.term}/>
  )};

};

export default SearchPanel;