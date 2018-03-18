import React, {Component} from 'react';
import SearchBar from './searchbar';
import SearchList from './searchlist';

class SearchPage extends Component{
  render(){
    return(
      <div className="wrapper">
        <SearchBar title={"Search bar"}/>
        <SearchList />
      </div>
    )
  }
}

export default SearchPage;
