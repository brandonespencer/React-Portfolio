// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Full stack developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="brandon"/>
      <p className="content is-italic mt-4">
        I'm Brandon studying to become a full stack developer at the michigan state university ful stack boot camp.
      </p>
      <p className="content">
       Im a passionate web developer that loves to build and create new applications.
      </p>
    </div>
  );
}

export default About;
