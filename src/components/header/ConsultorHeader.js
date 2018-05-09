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
            
        }
    }

    componentDidMount() {
        fetch('http://datarequestqas.lbel.com.br/api/Report/GetPerformance_HeaderFront/?accountId=' + this.state.codConsultor + '&periodid=201804')
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
            <div className="main-header main-header-mobile">
                <div className="container" id="main-header-container">
                    <div className="row content-main-indicadores">
                        <div className="col-xs-16 col-lg-15 col-lg-offset-1">
                            <div className="row">
                                <div className="col-md-4 col-sm-7 col-xs-16">
                                    <div className="text-md text-primary">
                                        <strong>Olá , {consultor.accounts_Mongo != null ? consultor.accounts_Mongo.firstName : ""}</strong>
                                    </div>
                                    <span className="text-primary-xs">
                                        <span>{consultor != null ? consultor.careerTitle_Des : ""}</span>
                                    </span>
                                </div>
                                <div className="col-md-offset-3 col-md-5 col-sm-8">
                                    <div className="main-campana">
                                        <div className="text-ws">
                                            <span>Campanha</span> <br /> <span className="text-ws-lg ">{consultor!= null ? consultor.periodDescription : ""}</span>
                                        </div>
                                        <div className="text-ws">
                                            <span>Fechamento de Campanha</span> <br />
                                            <span className="text-ws-lg">{consultor!= null ? consultor.cantFinalPeriodo : ""}</span>
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