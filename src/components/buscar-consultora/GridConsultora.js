import React, { Component } from 'react';
import config from 'react-global-configuration';

import ReactPaginate from 'react-paginate';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './GridConsultora.css';
import { translate, Trans } from 'react-i18next';

class GridConsultora extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeInformationAccount: ''
        }
        this.activaPanelAccount = this.activaPanelAccount.bind(this);
        this.exportAccounts = this.exportAccounts.bind(this);
        
        const { t, i18n } = this.props;
        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        }
    }

    exportAccounts(event) {
        var urlPath = config.get('serverUrlApi');
        var filter = this.props.stringFilter;
        var language = this.props.i18n.language
        window.location.href = urlPath + 'api/reportaccount/exportexcel/?' + filter + "&language=" + language;
    }

    activaPanelAccount(event) {
        const target = event.target;
        let name = target.id;
        name = this.state.activeInformationAccount == name ? "" : name;
        this.setState({
            activeInformationAccount: name
        })
    }

    render() {
        const { t, i18n } = this.props;
        const consultorasList = this.props.data == null ? "" : this.props.data.map((item, index) => {            
            return <div key={index} className="content-collapse-item upper">
                <div className="collapse-head" role="tab">
                    <a className="tituloConsultoraMargin" >
                        <FontAwesomeIcon icon="plus-circle" id={"account" + index} onClick={this.activaPanelAccount}/>
                        {/* <span className=" change-icon">
                            <i className="icon-plus-circled"></i>
                        </span> */}
                        <span className="upper tituloConsultoraMargin" id={"account" + index} onClick={this.activaPanelAccount}>
                            {item.accountName}
                        </span>
                    </a>
                    <br />
                    <span> <b>{(index + 1) + ((this.props.paging.pageNumber - 1) * this.props.paging.pageSize)}</b></span>
                    <div className="collapse-resumen">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-xs-12 line-left">
                                <div>{t('Code')}: <b>{ item.accountID }</b></div>
                                <div>{t('DateEnrolled')}: <b>{ item.joinDate }</b></div>
                                <div>{t('CareerTitle')}: <b>{item.careerTitle}</b></div>
                                <div>{t('PaidAsTitle')}: <b>{item.paidAsCurrentMonth}</b></div>
                            </div>

                            <div className="col-md-6 col-lg-5 col-xs-12 line-left">
                                <div>{t('Address')}:   <b>{ item.mainAddress }  </b></div>
                                <div>{t('Email')}: <b className="work-break-grid">{item.emailAddress}</b></div>
                                <div>{t('Phone')}: <b>{ item.phones }</b></div>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xs-12 line-left">
                                <div>{t('VP')}:   <b>{ item.pqv }  </b></div>
                                <div>{t('VO-T')}: <b>{ item.dqv }  </b></div>
                                <div>{t('VO-Q')}: <b>{ item.dqvt } </b></div>
                                <div>{t('Status')}: <b>{item.activity}</b></div>
                            </div>
                        </div>
                        <br />
                    </div>

                    <div className={this.state.activeInformationAccount == "account" + index ? "active-accountDetal" : "inactive-accountDetal"} role="tabpanel" aria-labelledby="headingOne" aria-expanded="true" >
                        <div className="collapse-resumen">
                            <div className="row">
                                <div className="col-sm-10 col-md-4 col-lg-5 line-left">
                                    <div className="row">
                                        <div className="col-md-12 col-xs-12">
                                            <div>{t('Sponsor')}: <b>{item.sponsorID}</b></div>
                                            <div>{t('SponsorName')}: <b>{item.sponsorName}</b></div>
                                            <div>{t('Email')}: <b>{item.sponsorEmailAddress}</b></div>
                                            <div>{t('Phone')}: <b>{item.sponsorPhones}</b></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3 line-left">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        });

        return (
        <div className="content-results">
            <div className="col-sm-12 col-md-12 col-xs-12">
                <div className="col-sm-3 col-md-2 col-xs-12">
                    <div className="files-export text-center">
                        <a onClick={this.exportAccounts} className="icon-file-export _pointer excel"><FontAwesomeIcon icon="file-excel" /></a><span><p>{t('Download')}</p></span>
                    </div>
                </div>
                <div className="col-offset-md-2 col-sm-6 col-md-5 col-xs-12">
                    <div className="upper mt-15 text-md text-center">
                        <div className="upper mt-15 text-sm text-center">
                            <b> 1 - {this.props.paging.pageSize}</b> de <b>{this.props.paging != null ? this.props.paging.totalItems : 0} </b>{t('Consultants')}
                            </div>
                    </div>
                </div>
                <div className="col-sm-16 col-md-5 col-xs-12">
                    <div className="order-by-content">
                        {t('SortBy')}: {' '}
                        <select name="OrderBy" defaultValue="" className="form-control input-sm" onChange={this.props.eventChangeOrderBy} >
                            <option value="" >{t('Select')} </option>
                            <option value="1">{t('CareerTitle')}</option>
                            <option value="2">{t('PaidAsTitle')}</option>
                            <option value="3">{t('DownlineInfoCard-PersonalVolume')}</option>
                            <option value="4">{t('DateEnrolled')}</option>
                        </select>
                    </div>
                </div>
            </div>
            <hr />
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div role="tabpanel" className="collapse-group accordion">
                    {consultorasList}
                </div>
            </div>

            <div className="col-md-12 col-sm-12 col-xs-12">
                    <ReactPaginate 
                        previousLabel={t('Previous')}
                        nextLabel={t('Next')}
                        breakLabel={<span>..</span>}
                        breakClassName={"break-me"}
                        pageCount={this.props.paging.totalPages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={2}
                        onPageChange={this.props.eventBuscar}
                        containerClassName={"pagination"}
                        subContainerClassName={"pagesPagination"}
                        activeClassName={"Active"} 
                        forcePage={this.props.paging.pageNumber - 1}
                    />
            </div>
        </div>);
    }
}

export default translate('translations')(GridConsultora);