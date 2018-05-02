import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaginationConsultora extends Component {
    constructor(props) {
        super(props);

        var elements = this.props.data;

        this.state = {
            elements:elements
        };

        this.onBuscar = this.onBuscar.bind(this);
    }

    onBuscar(){
        this.props.eventBuscar(2);   
    }


    render() {
        return (<div id="contentPaginacion" className={ this.state.elements== null ? "float-pagination-left hidden-pagination" : "float-pagination-left visible-pagination"}>
            <nav>
                <ul id="pagBuscarConsultora" paginaactual="1" cantregistros="7929" className="pagination pagination-sm">
                    <li className="active"><a className="_pointer" title="Current page is 1">1</a></li>
                    <li><a className="_pointer" title="Go to page 2" onClick={this.onBuscar}>2</a></li>
                    <li><a className="_pointer" title="Go to page 3">3</a></li>
                    <li><a className="_pointer" title="Go to page 4">4</a></li>
                    <li><a className="_pointer" title="Go to page 5">5</a></li>
                    <li><a className="_pointer" title="Go to next page">&gt;</a></li>
                    <li><a className="_pointer" title="Go to last page">&gt;&gt;</a></li>
                </ul>
            </nav>
        </div>);
    }
}

export default PaginationConsultora;