import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames'
import './PaginationConsultora.css';

class PaginationConsultora extends Component {
    constructor(props) {
        super(props);

        let elements = this.props.data;
        let cantReg = this.props.cantReg;

        this.state = {
            elements: elements,
            cantReg: cantReg
        };

        this.onPageChange = this.onPageChange.bind(this);
        this.goFirstPage = this.goFirstPage.bind(this);
        this.goLastPage = this.goLastPage.bind(this);
        this.goPrevPage = this.goPrevPage.bind(this);
        this.goNextPage = this.goNextPage.bind(this);


        this.onBuscar = this.onBuscar.bind(this);
    }

    componentWillReceiveProps(newProps) {
        debugger;
        if (newProps === this.props) return;
        const { margin, page, count } = newProps;
        const startPage = page > margin ? page - margin : 1;
        const endPage = page + margin > count ? count : page + margin;
        this.setState({ startPage, endPage, count });
    }

    onPageChange(event) {
        const target = event.target;
        const index = target.name;
        this.props.onPageChange(parseInt(index));
    }

    goFirstPage() {
        this.props.onPageChange(1);
    }

    goLastPage() {
        this.props.onPageChange(this.state.count);
    }

    goPrevPage() {
        this.props.onPageChange(this.props.page - 1);
    }

    goNextPage() {
        this.props.onPageChange(this.props.page + 1);
    }



    onBuscar() {
        this.props.onPageChange(2);
    }


    render() {
        const { startPage, endPage, count } = this.state;
        const { page, margin } = this.props;
        const pages = [];
        const firstPage = page - margin > 1 ?
            <li
                className="pagination-button pagination-go-first"
                onClick={this.goFirstPage}
            ><a class="_pointer">1</a></li> :
            null;
        const lastPage = page + margin < count ?
            <li
                className="pagination-button pagination-go-last"
                onClick={this.goLastPage}
            ><a class="_pointer">{count}</a></li> :
            null;
        const prevPage = page === 1 ? null :
            <li
                className="pagination-button"
                onClick={this.goPrevPage}
            ><a class="_pointer">&lt;</a></li>;
        const nextPage = page === count ? null :
            <li
                className="pagination-button"
                onClick={this.goNextPage}
            ><a class="_pointer">&gt;</a></li>;
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <li
                    key={i}
                    name={i}
                    onClick={this.onPageChange}
                    className={classNames('pagination-list-item', 'pagination-button', {
                        active: i === this.props.page
                    })
                }
                >
                    <a class="_pointer" name={i}>{i}</a>
                </li>
            );
        }

        return (
            <div id="pagination-container">
                <div id="pagination">

                    <ul id="pagination-list" className="pagination pagination-sm">
                        {prevPage}
                        {firstPage}
                        {pages}
                        {lastPage}
                        {nextPage}
                    </ul>

                </div>
            </div>
        );
    }
}

export default PaginationConsultora;