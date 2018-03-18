import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../action/userAction';
class SearchBar extends Component{
constructor(props){
  super(props)
}

handleChange = (event) => {
  const url= 'https://api.github.com/search/users?q='+ event.target.value;
  this.props.fetchData(url);
}
  render(){
    return(
      <div className = "searchbar">
        <h1>{this.props.title}</h1>
        <input type="text" name="searchbar" onChange={this.handleChange}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    items : state.item,
    hasError : state.hasError,
    isLoading : state.isLoading,
    isActive : state.isActive
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData : (url) => dispatch(fetchData(url)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
