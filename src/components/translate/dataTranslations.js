import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DataLocalStorage extends Component {
    constructor(props){
      super(props);
      var DataLocalStorage=null;
      const { value } = props.value;
      const { name } = props.name;
      
    // if (localStorage.getItem("key")== "") {
    //     return;
    // }

    if (localStorage.getItem("key")) {
        console.log("DataLocalStorage");
        DataLocalStorage = JSON.parse(localStorage.getItem("key")); 
        console.log(DataLocalStorage);
    }  

    this.state = {
    hits: DataLocalStorage,
    }  
}

    componentDidMount() {
        fetch('http://localhost:31832/api/language/language/' + this.props.value + '/' + this.props.name)
                .then(response => response.json())
                .then(result => this.onSetResult(result, this.props.value));
    }

    onSetResult = (result, key) => {
        localStorage.setItem("key", JSON.stringify(result));
        this.setState({ hits: result });
        }

    render () {
        const { hits } = this.state;
        return (
            hits &&
            hits.map(hit => 
           <span key={hit.id}>{hit.term}{hit.termName}{hit.languageId}</span>)
        )
    }
}
export default DataLocalStorage;