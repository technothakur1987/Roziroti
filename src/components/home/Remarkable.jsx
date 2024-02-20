import React from "react";
import "./Remarkable.css";
import { Link } from "react-router-dom";
import RemarkImageGallery from "./RemarkImageGallery";
import Commonbtn from './Commonbtn'
import Sec2carousel from "./Sec2carousel";



const Remarkable = () => {
  return (
    <div className="pb-5">
      {/*section1*/}
      <div className="remar-section1 ">
        <div className="row py-5">
          <div className="col-md-6 mqcol-12">
            <h4 className="sec-heading">WELCOME TO 24 CARROTS</h4>
            <h2 className="sec1-mainheading">Remarkable Catering & Events</h2>
            <p className="sec1p">
              24 Carrots is the premier catering and events company of choice in
              Southern California. We create remarkable experiences by offering
              the finest quality foods and providing unsurpassed personalized
              service, driven by our passion for life’s special occasions.
            </p>
            <div className="d-flex justify-content-center align-items-center">
            {/* <Link className="commonbtn mx-auto" to='/getintouch'>GET IN TOUCH</Link> */}
            <Commonbtn link='/getintouch' btncontent='GET IN TOUCH'/>

            </div>
            
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center mqcol-12 mqh-50">
            {/* <div className="sec1-imgwraper">
              <img
                src="https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="sec1-caricon">
            <div className="icondep">
  <div className="orange" />
  <div className="green" />
  <div className="green" />
  <div className="green" />
</div>
            </div> */}
            <RemarkImageGallery/>
          </div>
        </div>
      </div>
      {/*section2*/}
      <div className="remar-section2">
        <Sec2carousel/>

        
      </div>
    </div>
  );
};

export default Remarkable;
