import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

//import TopFilter from 'TopFilter';

import Loader from '../loaders/postLoader';

import Toggledetails from '../reviewcomponents/FlightDetail';
import setClickedButtonAction from "../../actions/setClickedButtonAction";





class MyBtn extends Component{
    constructor(){
        super();
        this.state={clicked:false,}
    }
    /*componentDidMount() {
        this.testClick();
    }*/
    testClick()
    {
        /*setTimeout(() => {
            this.setState({
            clicked: true
            });
            console.log('its clicked' + this.state.clicked)
        }, 4000);*/
        this.setState({clicked:!this.state.clicked,})
        
    }
    render(){
        return(
            <div>

            <a className="btn-flat waves-effect waves-light amber accent-4 center-align hide-on-med-and-down"
               onClick={this.testClick.bind(this)} >
                <span>{this.state.clicked?<Loader/>:null}</span>
                <span style={{ visibility: this.state.clicked? 'hidden': 'visible'}}>Book Now</span></a>
                </div>
        )
    }
}

class TopFilter extends Component{
    render(){
        return(
            <div className="refine-reslt1">
                <a href>New Delhi to Mumbai</a>
                <a href>Mumbai to New Delhi</a>
            </div>
        )
    }
}

class FlightTuple extends Component{
    constructor(){
        super();
        this.state = {
            showResults:false,conditiond:true,
        }
    }
    onClickHandler(){
        this.setState(prev => ({showResults: !prev.showResults,conditiond:!prev.conditiond}))
    }

     getRoute(id){
         console.log('hello routes!'+id);
         //this.setState({loadMe:true});
         //alert(this.state.loadMe)
         //console.log(this.state.loadMe)
         this.props.setBtn(id)
     }

    render(){
        const {item,index} = this.props;
        return<div className="col s12 m9 right-rmv width-full-list box-spc-rmv scrollwin2" key={item.ContractId}>
            <div className="col s12 m12 white spc-div bdr-div spc-div-2 btm-spc">
                <div className="col s2 m2 padd0">
                    {/*<p className="flightresult">
                <span className="left right-spc">
                  <span className="AirLogo Al2_sm" />
                </span>
                       <span className="flitname">IndiGo</span>
                        <br />
                        6E-96 &nbsp;
                    </p>*/}
                    <span class="left right-spc">
                           <span class="AirLogo Al2_sm"></span>
                           </span>
                    <span class="flightnme">IndiGo</span><br/>
                    <span class="flightnme">6E-96</span>
                </div>
                <div className="col s2 m2 padd0 right-align">
                    <p className="timeflir">{item.TripDetails.OutBoundSegment[0].DepartureTime}
                        <br />
                        <span className="hide-on-med-and-down">New Delhi</span>
                        <span className="hide-on-large-only">{item.FlightDuration}</span>
                    </p>
                </div>
                <div className="col s2 m2 padd0 center arrosec1">
                    <p className="hide-on-med-and-down">{item.TotalOutBoundFlightDuration}</p>
                    <img className="img-responsive img-cen hide-on-med-and-down" src={this.props.arrow} />
                    <i className="fa fa-long-arrow-right hide-on-large-only" aria-hidden="true" />
                    <p className="hide-on-med-and-down">{item.TripDetails.OutBoundSegment[0].NoOfStops} Stop</p>
                </div>
                <div className="col s2 m2 padd0 left-align">
                    <p className="timeflir">{item.TripDetails.OutBoundSegment[0].ArrivalTime}
                        <br />
                        <span className="hide-on-med-and-down">Mumbai</span>
                        <span className="hide-on-large-only">Stop</span>
                    </p>
                </div>
                <div className="col s2 m2 center-align hide-on-small-only">
                    <p className="listprice listprice1">
                        <i className="fa fa-inr" aria-hidden="true" /> {item.TotalGDSFareV2}
                    </p>
                </div>
                {/*<div class="col s2 m2 padd0 hide-on-med-and-up"></div>*/}
                <div className="col s2 m2 padd0 right-align">
                    <Link to="/ReviewPage" onClick={this.getRoute.bind(this,index)}>
                        {/*this.state.load?<i className="fa fa-spinner fa-spin white-text"/>:<MyBtn/>*/}
                        {/*this.state.loadMe && <Loader />*/}
                        {<MyBtn />}
                    </Link>
                    <a  className="hide-on-large-only right-align hide-on-small-only">
                        <i className="material-icons dp48 filter">keyboard_arrow_right</i>
                    </a>
                    <a className="waves-effect waves-light btn amber accent-4 black-tex hide-on-med-and-up">4091</a>
                </div>
                <div className="clearfix" />
                <p className="flight-detal flit-open-to right-align">
                    <a  onClick={this.onClickHandler.bind(this)}>
                        <span className="flitedet hide-on-small-only">Flight Details </span>
                        <i className={this.state.conditiond? "fa fa-plus-square-o icochan plus-icon":"fa fa-minus-square-o icochan plus-icon"} />
                    </a>
                </p>
                {this.state.showResults ? <Toggledetails/> : null}
            </div>
        </div>
    }
}

class Sideinput extends Component{

    constructor(){
        super();
        this.state = { showResults: false,myFlightArr:[],showFilter:false,flipped: null,flipped2:null,flipped3:null,flipped4:null,flipped5:null, };
    }

    onClickHandler(){
        this.setState(prev => ({showResults: !prev.showResults}));
    };
    showFilterHandle(){
        this.setState(prev => ({showFilter: !prev.showFilter}));

    }
    mouseOut(){
        this.setState({flipped: false});
    }
    mouseOver() {
        this.setState({flipped: true});
    }

    mouseOut2(){
        this.setState({flipped2: false});
    }
    mouseOver2() {
        this.setState({flipped2: true});
    }

    mouseOut3(){
        this.setState({flipped3: false});
    }
    mouseOver3() {
        this.setState({flipped3: true});
    }

    mouseOut4(){
        this.setState({flipped4: false});
    }
    mouseOver4() {
        this.setState({flipped4: true});
    }

    mouseOut5(){
        this.setState({flipped5: false});
    }
    mouseOver5() {
        this.setState({flipped5: true});
    }


    render(){
        const myData=this.props.flightData || [ ]
        console.log(myData);
        return(
            <div className="row">
                <div className="col s12 m3 lft-rmv right-rmv hide-on-med-and-down scrollwin">
                    <div className="col s12 m12 white spc-div bdr-div spc-div-2 spc-btm2">
                        <div className="filter_subdivisions">
                            <h3 className="fillheadSub" onClick={this.showFilterHandle.bind(this)}><a href="#" className="refine-reslt01">Refine Result <strong>DEL to BOM</strong> <i className="fa fa-chevron-down" aria-hidden="true" /></a></h3>
                            {this.state.showFilter?<TopFilter/>:null}
                            <p className="spc-btm1">No. of Stops</p>
                            <span className="onew">
              <a className="btn btn waves-effect grey lighten-3 black-text" href="javascript:void(0)">0</a>
                                <span><i className="fa fa-inr" aria-hidden="true" />45642</span> </span> <span className="onew">
              <a className="btn btn waves-effect grey lighten-3 black-text" href="javascript:void(0)">1</a>
              <span><i className="fa fa-inr" aria-hidden="true" />45642</span></span> <span className="onew">
                            <a className="btn btn waves-effect grey lighten-3 black-text" href="javascript:void(0)">+2</a></span>
                        </div>
                    </div>
                    <div className="col s12 m12 white spc-div bdr-div spc-div-2 spc-btm2">
                        <div className="filter_subdivisions mortin">
                            <h3 className="fillheadSub">Departure Time</h3>
                            <a className="active1" href>
                                <p><span className="morning_icon" /><br />
                                    Before 6AM
                                </p>
                            </a>
                            <a  href>
                                <p><span className="noon_icon" /><br />
                                    6AM - 12PM
                                </p>
                            </a>
                            <a href>
                                <p><span className="evening_icon" /><br />
                                    12PM - 6PM
                                </p>
                            </a>
                            <a href>
                                <p><span className="night_icon" /><br />
                                    After 6PM
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className="col s12 m12 white spc-div bdr-div spc-div-2 spc-btm2">
                        <div className="filter_subdivisions mortin">
                            <h3 className="fillheadSub">Airlines</h3>
                            <p className="form-group">
                                <input type="checkbox" id="test5" className="filled-in" />
                                <label htmlFor="test5"> Air Asia <span className="right right-spc"><span className="AirLogovsm Al1_vsm" /></span> </label>
                            </p>
                            <p className="form-group">
                                <input type="checkbox" id="test6" className="filled-in" />
                                <label htmlFor="test6"> Indigo<span className="right right-spc"> <span className="AirLogovsm Al2_vsm" /></span> </label>
                            </p>
                            <p className="form-group">
                                <input type="checkbox" id="test7" className="filled-in" />
                                <label htmlFor="test7"> Air India<span className="right right-spc"> <span className="AirLogovsm Al3_vsm" /></span> </label>
                            </p>
                            <p className="form-group">
                                <input type="checkbox" id="test8" className="filled-in" />
                                <label htmlFor="test8"> Go Air <span className="right right-spc"> <span className="AirLogovsm Al4_vsm" /></span> </label>
                            </p>
                            <p className="form-group">
                                <input type="checkbox" id="test9" className="filled-in" />
                                <label htmlFor="test9"> Spicejet<span className="right right-spc"> <span className="AirLogovsm Al5_vsm" /></span> </label>
                            </p>
                            <p className="form-group">
                                <input type="checkbox" id="test10" className="filled-in" />
                                <label htmlFor="test10"> Vistara <span className="right right-spc"> <span className="AirLogovsm Al6_vsm" /></span> </label>
                            </p>
                        </div>
                    </div>
                    <div className="col s12 m12 white spc-div bdr-div spc-div-2 spc-btm2">
                        <div className="filter_subdivisions">
                            <h3 className="fillheadSub">Pricing Range</h3>
                            <form action="#">
                                <p className="range-field">
                                    <input type="range" id="test5" min={0} max={100} />
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className="col s12 m12 white spc-div bdr-div spc-div-2 spc-btm2">
                        <div className="filter_subdivisions mortin">
                            <h3 className="fillheadSub">CHECK-IN BAGGAGE</h3>
                            <p className="form-group">
                                <input type="checkbox" id="test5" />
                                <label htmlFor="test5">Baggage</label>
                            </p>
                            <p className="form-group">
                                <input type="checkbox" id="test5" />
                                <label htmlFor="test5">No Baggage</label>
                            </p>
                        </div>
                    </div>
                    <div className="col s12 m12 white spc-div bdr-div spc-div-2 spc-btm">
                        <div className="filter_subdivisions mortin">
                            <h3 className="fillheadSub">IN-FLIGHT MEALS</h3>
                            <p className="form-group">
                                <input type="checkbox" id="test5" />
                                <label htmlFor="test5">Meals</label>
                            </p>
                            <p className="form-group">
                                <input type="checkbox" id="test5" />
                                <label htmlFor="test5">No Meals</label>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col s12 m9 right-rmv width-full-list hide-on-small-and-down box-spc-rmv scrollwin3">
                    <div className="col s12 m12 white bdr-div btm-spc">
                        <ul className="tabs tabs-icon">
                            <li className="tab col s2" style={{cursor:'pointer'}}><a onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.mouseOver.bind(this)}><i className="fa fa-plane" /><i className="fa fa-plane dipartu" /> <span className="hide-on-small-only"> Airlines</span>
                                {this.state.flipped?<i className="fa fa-arrow-up"/>:null}
                            </a></li>
                            <li className="tab col s2" style={{cursor:'pointer'}}><a onMouseOut={this.mouseOut2.bind(this)} onMouseOver={this.mouseOver2.bind(this)}><i className="fa fa-plane right-spc text-size3" /><span className="hide-on-small-only">Departure</span>
                                {this.state.flipped2?<i className="fa fa-arrow-up"/>:null}
                            </a></li>
                            <li className="tab col s2" style={{cursor:'pointer'}}><a onMouseOut={this.mouseOut3.bind(this)} onMouseOver={this.mouseOver3.bind(this)}><i className="fa fa-clock-o right-spc text-size3" /><span className="hide-on-small-only">Duration</span>
                                {this.state.flipped3?<i className="fa fa-arrow-up"/>:null}
                            </a></li>
                            <li className="tab col s2" style={{cursor:'pointer'}}><a onMouseOut={this.mouseOut4.bind(this)} onMouseOver={this.mouseOver4.bind(this)}><i className="fa fa-plane dipartu right-spc text-size3" /><span className="hide-on-small-only">Arrival</span>
                                {this.state.flipped4?<i className="fa fa-arrow-up"/>:null}
                            </a></li>
                            <li className="tab col s2" style={{cursor:'pointer'}}><a onMouseOut={this.mouseOut5.bind(this)} onMouseOver={this.mouseOver5.bind(this)} className="center"><i className="fa fa-inr right-spc text-size3" /><span className="hide-on-small-only">Price</span>
                                {this.state.flipped5?<i className="fa fa-arrow-up"/>:null}
                            </a></li>
                            <div className="s2 m2 right-align filter fltr-show">
                                <a href="#" style={{color: '#666'}}><i className="fa fa-filter fillterto" /></a>
                            </div>
                            <li className="tab col s2 m2  scrollfilter"><a className="center"><i className="fa fa-filter twofiilo2" aria-hidden="true" /></a></li>
                        </ul>
                    </div>
                </div>
                {myData.map((item,index)=><FlightTuple item={item} index={index} arrow={this.props.arrow} key={index} setBtn={this.props.setBtn}/>
                    )}




            </div>
        );
    }
}
function mapStateToProps(state){
    return{
     flightData:state.setFlightDataReducer.flightData.Availability,
    }
}
function mapDispatchToProps(dispatch) {
    return{
        setBtn:(btn)=>{dispatch(setClickedButtonAction(btn))}
    }

}
export default connect(mapStateToProps,mapDispatchToProps) (Sideinput);