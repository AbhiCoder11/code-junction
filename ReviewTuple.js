import React,{Component} from 'react';
import FlightDetail from "./FlightDetail";

import arrownet from '../../images/long-arrow.png';


class ReviewTuple extends Component{
constructor(){
    super();
    this.state = { showFlightDetail: false,showGst:false,conditiond:true};
}

    onClickHandler(){
        this.setState(prev => ({showFlightDetail: !prev.showFlightDetail,conditiond:!prev.conditiond}));
    };
    render(){
        const {selectData}=this.props;
        return(

            <div className="col s12 m12 white spc-div bdr-div  btm-spc spc-rmv-top">
                <div className="panel-heading-dbr spc-btm">
                    <div className="col s9 m9 padd0">
                        <h2 className="panel-title">New Delhi to Mumbai 18 Nov 2016, Fri</h2>
                    </div>
                    <div className="col s3 m3 padd0 right-align panel-sub txt-hover-efct">
                        <a className="modal-trigger" >Fare Rules</a>
                    </div>
                </div>
                <div className="spc-rmv row">
                    <div className="col s12 m12 spc-div">
                        <div className="col s2 m2 padd0">
                            <p className="flightresult spc-left">
                  <span className="left right-spc">
                    <span className="AirLogo Al2_sm" />
                  </span>
                                <span className="flitname">IndiGo</span>
                                <br />
                                6E-96 &nbsp;
                            </p>
                        </div>
                        <div className="col s2 m2 padd0 right-align">
                            <p className="timeflir">New Delhi {selectData.TripDetails.OutBoundSegment[0].DepartureTime}
                                <br />
                                <span className="hide-on-med-and-down">New Delhi
                    Indira Gandhi Airport (DEL)
                  </span>
                                <span className="hide-on-large-only">{selectData.TotalOutBoundFlightDuration}</span>
                            </p>
                        </div>
                        <div className="col s2 m2 padd0 center arrosec1">
                            <img className="img-responsive img-cen hide-on-med-and-down tp-spc2" src={arrownet} />
                            <i className="fa fa-long-arrow-right hide-on-large-only" aria-hidden="true" />
                        </div>
                        <div className="col s2 m2 padd0 left-align">
                            <p className="timeflir">{selectData.TripDetails.OutBoundSegment[0].ArrivalTime} Mumbai
                                <span className="hide-on-med-and-down">Mumbai Chhatrapati Shivaji Airport (BOM)
                  </span>
                                <span className="hide-on-large-only">Chhatrapati Shivaji Airport (BOM)
                    Chhatrapati Shivaji Airport (BOM)</span>
                            </p>
                        </div>
                        <div className="col s2 m4 right-align ">
                            <p className="timeflir"> <i className="fa fa-inr" />{selectData.TotalGDSFareV2} </p>
                            <span className="nonstp">{selectData.TripDetails.OutBoundSegment[0].NoOfStops} Stop</span>
                        </div>
                        <div className="clearfix" />
                        <div className="col s12 m12 spc-btm tp-bdr tp-spc1 tp-spc3">

                            <div className="col s12 m6 spc-div">{/*<p><b>Travellers: <i className="fa fa-user" aria-hidden="true"></i></b> Vinay Sisodiya</p>*/}</div>



                                <p className="flight-detal flit-open-to right-align">
                                <a onClick={this.onClickHandler.bind(this)}>

                                    <span className="flitedet hide-on-small-only" > Flight Details </span>
                                    <i className={this.state.conditiond? "fa fa-plus-square-o":"fa fa-minus-square-o"}/>
                                </a>
                             </p>

                            {this.state.showFlightDetail ? <FlightDetail/> : null}
                        </div>


                    </div>

                </div>
            </div>
        );
    }
}

export default ReviewTuple;
