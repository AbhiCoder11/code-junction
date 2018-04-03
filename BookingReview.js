import React,{Component} from 'react';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux';

import GstDet from "./gstDet";
import ReviewTuple from './ReviewTuple';
import UserLogin from './UserLogin';
import GuestLogin from './GuestLogin';


//import store from '../../store/store';

class BookingReview extends Component{
    constructor(){
        super();
        this.state = { showFlightDetail: false,showGst:false,showGuest:true,showLogin:false,condition: true};
    }


    showGst(){
        //alert('hello')
        this.setState(prev => ({showGst: !prev.showGst}));
    }
    showConGuest(){
        this.setState(prev => ({showGuest:!prev.showGuest,
            showLogin:false,condition:true}));
    }

    showUserLogin(){
        this.setState(prev => ({showLogin :!prev.showLogin,
            showGuest:false,condition:!prev.condition}));
    }


    render(){
        const oneArr=this.props.flightData || [];
        const id=this.props.btnId;
        //const newArr=oneArr;
        console.log(oneArr[id]);
        const selectData=oneArr[id];
        console.log(selectData);
        //console.log(oneArr.map((item,index) => item.index===newArr[id]));
        return(

            <div className="col s12 m9 lft-rmv right-rmv width-full-list box-spc-rmv">
                <h6 className="review_arrow_space">
                    <i className="material-icons dp48 review_flight">flight_takeoff</i>
                    <span className="hide-on-small-only"> ONEWAY :</span>
                    New Delhi <i className="material-icons dp48 review_arrow">arrow_forward</i> Mumbai</h6>
                {selectData?<ReviewTuple selectData={selectData}/>:null}
                <div className="col s12 m12 white spc-div bdr-div spc-div-2 btm-spc">
                    <div className="col s10 m10 padd0">
                        <p className="form-group">
                            <input type="checkbox" id="test5" />
                            <label htmlFor="test5"> Get Protected: <strong>Don't forget travel insurance</strong> </label>
                        </p>
                        <p className="text-size2">I want to add trip insurance to my booking for <b>Rs. 249</b> per person. View <a href="#">features &amp; benefits</a> of insurance.</p>
                    </div>
                    <div className="col s2 m2 padd0"><img src={this.props.img} className="responsive-img imgleft" /></div>
                </div>
                {/*GST div start here*/}
                <div className="col s12 m12 white spc-div bdr-div spc-div-2 btm-spc">
                    <div className="row">
                        <div className="traveller_GST">

                            <input type="checkbox" id="chkPassport" className="filled-in" onClick={this.showGst.bind(this)} />
                            <label className="traveler_label left" htmlFor="chkPassport" />
                            <p>GST number for business travel<span className="traveller_mobile">(optional)</span></p>
                            <p className="gst_text">To claim credit of GST charged by airlines/MMT, please enter your company's GST number</p>
                        </div>
                        {this.state.showGst?<GstDet/>:null}
                     </div>
                </div>
                {/*GST div ends here*/}
                {/*Dual click start here*/}
                <section className="mode-area">
                    <div className>
                        <div className="col s12 m12 btm-spc padd0">
                            <ul className="tabs1 switch-bg">
                                <li className={this.state.condition ? "tab-link current col s6" : "tab-link  col s6" } data-tab="tab-1" onClick={this.showConGuest.bind(this)}><a>Continue as Guest</a></li>
                                <li className={this.state.condition ? "tab-link col s6" : "tab-link current col s6"} data-tab="tab-2" onClick={this.showUserLogin.bind(this)}><a>Login with TravelEasy.com</a></li>
                            </ul>
                            <div className="col s12 m12 btm-spc padd0">

                                { this.state.showGuest ? <GuestLogin /> : this.state.showLogin ? <UserLogin /> : <GuestLogin/> }

                            </div>
                        </div>
                    </div>
                    <div className="col s10 m12">
                        <p className="form-group">
                            <input type="checkbox" id="test9" className="filled-in" />
                            <label htmlFor="test9"> By clicking this button, I understand &amp; agree with the <a href="#">Rules &amp; Restrictions</a> of this fare,the <a href="#">Privacy Policy</a> &amp; <a href="#">Terms &amp; Conditions</a> </label>
                        </p>
                    </div>
                    <div className="padd0 demo col s6 offset-s3 grid-example"> <Link to='/TravellerPage'> <a className="waves-effect waves-light btn login_width">Go</a></Link> </div>
                </section>
                {/*Dual click ends here*/}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        flightData:state.setFlightDataReducer.flightData.Availability,
        btnId:state.setClickedButtonReducer.btnId,
    }
}
 export default connect(mapStateToProps) (BookingReview);