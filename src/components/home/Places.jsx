import React from "react";
import "./Places.css";
import UfvCarousel from "./UfvCarousel";
import Commonbtn from "./Commonbtn";

import Whitebtn from "./Whitebtn";
import Cvbtn from "./Cvbtn";
import img3 from '../../assets/img-3.webp'

const Places = () => {
  return (
    <div className="places">
      <UfvCarousel />
      <div className="business ">
        <div className="busi2">
          <h2 className="">Far More Than Just Business</h2>
          <p>
            The way you do anything is the way you do everything. We haven’t
            cracked the code on catering; we simply care unreasonably about
            every aspect of what we do. We care about people as much as we care
            about details, and we absolutely refuse to compromise on making your
            day anything but the best. We’ve got your back from the initial idea
            to the final farewell!
          </p>
        </div>
      </div>

      <div className="foods">
        <iframe
          className="iframe"
          src="https://www.youtube.com/embed/7gPP9hsV4a0?si=HyCZG1pQWIJ-CZxn"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
        <h2>Great Food & A Whole Lot More</h2>
        <p>
          Catering is just the beginning. Sure, we love astonishing your guests
          with attentive service, thoughtful food, and an inviting environment.
          But what really matters most is helping you create memories that will
          last for a lifetime. Our industry experts think of all the little
          things that turn an ordinary event into an unforgettable experience.
        </p>
        <div className="d-flex justify-content-center align-items-center py-3">
          <Commonbtn link="/getintouch" btncontent="EXPLORE SERVICES" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-4 d-flex flex-column align-items-center justify-content-evenly flex-basismq100 mqflexOrder2">
              <div className="ggg ">
                <h3>Gourmet Catering</h3>
                <p>
                  Our professionally-trained culinary team is passionate and
                  proud of our diverse and thoughtful menu, always cooking up
                  something that aligns with your great taste.
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <Whitebtn link="/getintouch" btncontent="LEARN MORE" />
                </div>
              </div>
              <div className="ggg ">
                <h3>Bar Service</h3>
                <p>
                  Our sophisticated flavor expertise enables us to create
                  inventive concoctions that generate buzz in more ways than
                  one!
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <Whitebtn link="/getintouch" btncontent="LEARN MORE" />
                </div>
              </div>
            </div>
            <div className="col-sm-4 d-flex justify-content-center align-items-start img-wrapper py-5 flex-basismq100 mqflexOrder1">
              {/*carousel*/}

              <img
                src="https://24carrots.com/wp-content/uploads/2023/10/Home_Services_GIF_R3.gif"
                alt=""
                className="img-fluid"
              />

              {/*carousel */}
            </div>
            <div className="col-sm-4 d-flex flex-column flex-basismq100 mqflex-order3">
              <div className="ggg  ">
                <h3>Staffing</h3>
                <p>
                  The hand-selected team at 24 Carrots are just as important to
                  our reputation as our gourmet food. Our staff is certainly the
                  best at what they do, and you’ll work with professionals who
                  genuinely care about the success of your event!
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <Whitebtn link="/getintouch" btncontent="LEARN MORE" />
                </div>
              </div>

              <div className="ggg ">
                <h3>Event Production</h3>
                <p>
                  If mind-blowing spectacles and immersive guest experiences are
                  what you’re after, the specialists at 24 Carrots can pull it
                  off on an epic scale!
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <Whitebtn link="/getintouch" btncontent="LEARN MORE" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="green">
        <div className="lightgreen">
          <div className="d-flex justify-content-center align-items-center gree">
            <img
              src="https://24carrots.com/wp-content/themes/24carrots/img/24cemblem.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          <h2>Our Happy Clients</h2>
          <p>
            Food may be our love language, but words of affirmation always make
            us ecstatic! Read what our happy clients have to say about how we
            made their day great.
          </p>

          {/*carousel here*/}

          <div
            id="carouselExampleCaptions"
            className="carousel slide mx-4 mt-5"
             data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://24carrots.com/wp-content/uploads/2023/10/4.2-Lorely-Meza.jpg"
                  className="img-fluid"
                  alt="..."
                />
                <div className="carousel-caption d-md-block ">
                  <h5 className="">
                    “The staff was top-notch – professional, hardworking, and
                    just a pleasure to work with.”
                  </h5>
                  <p className="">
                    <span className="d-block text-white text-uppercase">
                      ROBIN
                    </span>
                    <span>Executive Assistant, Corelogic</span>
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://24carrots.com/wp-content/uploads/2023/10/4.1-Kay-McCoy.jpg"
                  className="img-fluid"
                  alt="..."
                />
                <div className="carousel-caption d-md-block ">
                  <h5 className="">
                    “I could not stop getting compliments on how delicious the
                    food was! My [guests] still texted me the day after to tell
                    me that the food was amazing.”
                  </h5>
                  <p className="">
                    <span className="d-block text-white text-uppercase">
                      Amanda & Jethro
                    </span>
                    <span>The Colony House</span>
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://24carrots.com/wp-content/uploads/2023/10/4.3-Desert-Born-Studios.jpg"
                  className="img-fluid"
                  alt="..."
                />
                <div className="carousel-caption d-md-block ">
                  <h5 className="">
                    “From the moment we inquired with the venue, through all the
                    planning, execution, and clean-up of the wedding day, we had
                    an amazing experience working with the team.”
                  </h5>
                  <p className="">
                    <span className="d-block text-white text-uppercase">
                      Kellie & Paul
                    </span>
                    <span>Franciscan Gardens</span>
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://24carrots.com/wp-content/uploads/2023/10/4.4-Lorely-Meza.jpg"
                  className="img-fluid"
                  alt="..."
                />
                <div className="carousel-caption d-md-block ">
                  <h5 className="">
                    “24 Carrots made our week-long event a stress-free and
                    successful one!”
                  </h5>
                  <p className="">
                    <span className="d-block text-white text-uppercase">
                      Kimberly
                    </span>
                    <span>Creston</span>
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="nexttut text-white">NEXT TESTINOMIAL</span>
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>
          {/*carousel end here*/}
        </div>
      </div>

      <div className="blog px-5 pb-5">
        <h2>What's Cookin'</h2>
        <div className="row mt-5 ">
          <div className="col-sm-7 mq100flex">
            <div className="wrapper">
              <img
                src="https://24carrots.com/wp-content/uploads/2023/11/11.02.16-Foundsgiving-Studio-EMP-21-616x440.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="overlay-text">
                <Cvbtn link="/getintouch" btncontent="READ MORE" />
              </div>
            </div>
            <p className="orangeround">
              24 CARROTS CATERING{" "}
              <span className="text-start me-5 pe-5">Catering</span>
            </p>
            <h2 className="roundh2">Setting Your Holiday Table</h2>
            <p className="roundp">
              From the first inquiry to final details, we are proud to provide
              full-service catering, making you feel like a guest at your own
              event…
            </p>
          </div>
          <div className="col-sm-5 mq100flex">
            <div className="wrapper">
              <img
                src="https://24carrots.com/wp-content/uploads/2023/09/11.13.19-ABC-Gala-2019-Villa-Visuals-7-scaled-1-616x411.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="overlay-text">
                <Cvbtn link="/getintouch" btncontent="READ MORE" />
              </div>
            </div>
            <p className="blackround">
              24 CARROTS CATERING{" "}
              <span className="text-start me-5 pe-5"> Venues</span>
            </p>
            <h2 className="roundh2">The BEST Venues for Big Holiday Bashes</h2>
            <p className="roundp">
              Make the most the holiday season by thinking BIG! Invite everyone
              from friends family, clients and the entire company to join in on
              the&nbsp;fun…
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center py-3">
          <Whitebtn link="/getintouch" btncontent="MORE FROM THE BLOG" />
        </div>
      </div>

      <div className="whiteSection py-5">
        <div className="sec px-5">
          <div className="row">
            <div className="col-7 mqflexfull mobileflexOrder2">
              <h2>Experiences Designed To Be Shared</h2>
              <p>Follow us for more from 24 Carrots.</p>
              <div className="d-flex justify-content-start align-items-center mqjustifycenter">
                <a
                  href="https://www.instagram.com/technothakur1987/"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <img
                    src="https://24carrots.com/wp-content/themes/24carrots/img/icon/instagram.svg"
                    alt=""
                    className="img-fluid"
                  />

                  <span className="greencolor me-5 ms-1 mb-0">INSTAGRAM</span>
                </a>

                <a
                  href="https://www.instagram.com/technothakur1987/"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <img
                    src="https://24carrots.com/wp-content/themes/24carrots/img/icon/instagram.svg"
                    alt=""
                    className="img-fluid"
                  />

                  <span className="greencolor ms-1 mb-0">PINTEREST</span>
                </a>
              </div>
            </div>
            <div className="col-5 mqflexfull mobileflexOrder1">
              <div className="collage-wrapper">
                <img
                  src="https://24carrots.com/wp-content/uploads/2023/08/9-7.jpg"
                  alt=""
                  className="img-fluid img-1"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsI1YkgYT5hX-0df1_QfrL33Sf1HWunoYBr5zTdlwirJfIWh8ChTz5xBh9mQJnMzx5Rw0&usqp=CAU"
                  alt=""
                  className="img-fluid img-2"
                />
                <img src={img3} className="img-fluid img-3"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      


      
    </div>
  );
};

export default Places;
