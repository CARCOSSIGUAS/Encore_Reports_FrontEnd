import React from 'react';
import { connect } from 'react-redux';
import './ConsultorHeader.css';

class ConsultorHeader extends React.Component {
    constructor(props) {
        super(props)
        
        const { user } = this.props; 

        this.state = {
            consultor: {},
            codConsultor: user.accountID,
            periodId: 201803,
        }
    }

    componentDidMount() {
        fetch('http://10.12.9.83:3391/api/Report/GetPerformance_HeaderFront/?accountId=' + this.state.codConsultor + '&periodid=' + this.state.periodId)
            .then((response) => {
                  if (!response.ok) { 
                return Promise.reject(response.statusText);
            }
                return response.json()
            })
            .then((consultor) => {
                var rpt = consultor != null? consultor : null;
                consultor = rpt;
                this.setState({ consultor })
            });
    }

    render() {
        const {
            consultor
        } = this.state;

        return (
            <div class="main-header main-header-mobile">
                <div class="container" id="main-header-container">
                    <div class="row content-main-indicadores">
                        <div class="col-xs-16 col-lg-15 col-lg-offset-1">
                            <div class="row">
                                <div class="col-md-4 col-sm-7 col-xs-16">
                                    <div class="text-md text-primary">
                                        <strong>Hola, {consultor.accounts_Mongo != null ? consultor.accounts_Mongo.firstName : ""}</strong>
                                    </div>
                                    <span class="text-primary-xs">
                                        <span></span>
                                    </span>
                                </div>
                                <div class="col-md-offset-4 col-md-4 col-sm-9">
                                    <div class="main-campana">
                                        <div class="text-ws">
                                            <span>Campanha</span> <br /> <span class="text-ws-lg ">C-06</span>
                                        </div>
                                        <div class="text-ws">
                                            <span>Cierre de Campanha</span> <br />
                                            <span class="text-ws-lg">5 días</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

const ConsultorHeaderPage = connect(mapStateToProps)(ConsultorHeader);
export default ConsultorHeaderPage;