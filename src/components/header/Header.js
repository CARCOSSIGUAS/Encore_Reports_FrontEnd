import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './Header.css';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';


class Header extends Component {

    constructor(props) {
        super(props);

        const { user } = this.props;


        this.state = {
            activeSelected: "",
            activeReporte: 'hidden-reporte',
            token: user != null ? user.token : 0
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onMostrarReporte = this.onMostrarReporte.bind(this);
    }

    onMostrarReporte() {
        this.setState({
            activeReporte: 'active-reporte'
        })
    }

    onCloseReporte() {
        this.setState({
            activeReporte: 'hidden-reporte'
        })
    }
    handleInputChange(event) {

        const target = event.target.parentElement;
        const name = target.id;
        this.setState({ activeSelected: name });
    }

    render() {
        return (
            <header>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/"><img src={require("../../images/lbel-white.svg")} alt="Belcorp" width="45" className="hidden" /> <img src={require("../../images/lbel-white.svg")} alt="Belcorp" width="55" height="42" /></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        ,    <Nav>
                            <NavItem eventKey={1} href="/" className="upper">
                                Inicio
                            </NavItem>
                            <NavDropdown eventKey={3} title="RELATÓRIOS" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={2} href="/buscarConsultora" className="upper">
                                Pesquisar Consultor
                            </NavItem>
                            <NavItem eventKey={3} href="/translates" className="upper">
                                Translates
                            </NavItem>

                        </Nav>

                        <Nav pullRight>
                            <NavItem href="/Login" eventKey={0} className="upper">
                                Deslogar
                        </NavItem>
                        </Nav>

                        {/* <Nav pullRight>
                            <NavItem eventKey={1} target="_blank" href={"https://consultorqa.lbel.com.br/Login?token=" + this.state.token} className="upper">
                                Consultora
                          </NavItem>
                        </Nav> */}

                    </Navbar.Collapse>
                </Navbar>

            </header >
        );
    }
}

function mapStateToProps(state) {
    const { user } = state.authentication;
    const item = state.accountHomeFetchDataSuccess;
    const hasErrored = state.accountHomeHasErrored;
    const isLoading = state.accountHomeIsLoading;

    return {
        user,
        item,
        hasErrored,
        isLoading
    };
}

const HeaderPage = connect(mapStateToProps)(Header);
export default HeaderPage;