import React, {Component} from 'react';
import {connect} from 'react-redux';

class SearchList extends Component{

  render(){
    console.log(this.props.isLoading)
    return(
      <div className="list-wrapper">
       <ul>
        {this.props.items.map((item)=>{
          return <li>{item.login}</li>
        })}
       </ul>
      </div>
    )
  }
}

const mapStateToProps =(state) => {
  return{
    items : state.items,
    isLoading : state.isLoading
  }
}

export default connect(mapStateToProps)(SearchList);
