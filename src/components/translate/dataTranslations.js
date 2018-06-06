import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DataLocalStorage extends Component {
    constructor(props){
      super(props);
      var DataLocalStorage=null;
      const { value } = props.value;

    if (localStorage.getItem("key")) {
        DataLocalStorage = JSON.parse(localStorage.getItem("key")); 
    }  

    this.state = {
    hits: DataLocalStorage,
    datos : null
    }  
}

    componentDidMount() {
        fetch('http://localhost:31832/api/language/language/' + this.props.value)
        //fetch('http://datarequestqas.lbel.com.br/api/language/language/' + this.props.value)
                .then(response => response.json())
                .then(translations => this.onSetResult(translations));
    }

    onSetResult = (translations) => {
        //console.log(translations)
        let data = translations
        localStorage.setItem("key", JSON.stringify(data));
        this.setState({ hits: data });
        //console.log(this.state.hits);
        }

    render () {
        const { hits } = this.state;
        return (
        <div>{JSON.stringify(hits)}</div>
            )
    }
}
export default DataLocalStorage;