import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as accountHome from '../../actions/accountHomeActions';

import config from 'react-global-configuration';
import './ConsultorHeader.css';
import { DEFAULT_ECDH_CURVE } from 'tls';

import { translate, Trans } from 'react-i18next';
class ConsultorHeader extends React.Component {
    constructor(props) {
        super(props)
 
        const { user } = this.props; 
        const { item } = this.props; 

        this.state = {
            consultor: {},
            accountID: user.accountID, 
        }
        const { t, i18n } = this.props;

        const changeLanguage = (lng) => {
          i18n.changeLanguage(lng);
        }
    }

    componentDidMount() {
        var urlPath = config.get('serverUrlApi');

        const { dispatch } = this.props;
        let url = urlPath+'api/home/header/' + this.state.accountID;
        dispatch(accountHome.accountHomeFetchData(url));
    }

    render() {
        const { t, i18n } = this.props;
        if (this.props.hasErrored) {
            return <p>{t('Sorry! There was an error loading the items')}</p>;
        }

        // if (this.props.isLoading) {
        //     return <p>Loading…</p>;
        // }

        const consultor = this.props.item;
        return (
            <div className="main-header main-header-mobile">
                <div className="container" id="main-header-container">
                    <div className="row content-main-indicadores">
                        <div className="col-xs-16 col-lg-15 col-lg-offset-1">
                            <div className="row">
                                <div className="col-md-4 col-sm-7 col-xs-16">
                                    <div className="text-md text-primary">
                                        <strong>{t('Hello')} , {consultor.account != null ? consultor.account.firstName : ""}</strong>
                                    </div>
                                    <span className="text-primary-xs">
                                        <span>{consultor != null ? consultor.careerTitle_Des : ""}</span>
                                    </span>
                                </div>
                                <div className="col-md-offset-3 col-md-5 col-sm-8">
                                    <div className="main-campana">
                                        <div className="text-ws">
                                            <span>{t('Campaign')}</span> <br /> <span className="text-ws-lg ">{consultor!= null ? consultor.periodDescription : ""}</span>
                                        </div>
                                        <div className="text-ws">
                                            <span>{t('ClosedDate')}</span> <br />
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

const ConsultorHeaderPage = connect(mapStateToProps)(ConsultorHeader);
export default translate('translations')(ConsultorHeaderPage);