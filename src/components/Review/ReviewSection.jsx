import PropTypes from 'prop-types';
import "./Review.scss";
import SectionHeading from '../SectionHeading/SectionHeading';
import Carousel from '../Slider/Carousel';
import SingleReview from './SingleReview';

import { useContext, useEffect, useState } from "react";
import NoteContext from "./../../ContextApi/NoteContext";

const Review = ({ data }) => {

  const contextValues=useContext(NoteContext)
  if (!contextValues || !contextValues.apidata || !contextValues.apidata.success || !contextValues.apidata.user || !contextValues.apidata.user.testimonials) {
   return <p>Error: Unable to retrieve user data</p>;
 }
 const [testimonials, setTestimonials] = useState([]);
 //console.log(testimonials)


 useEffect(() => {
   if (contextValues.apidata.user && contextValues.apidata.user.testimonials) {
     setTestimonials(contextValues.apidata.user.testimonials);
   }
 }, [contextValues.apidata.user]);

  return (
    <section className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Review" />
      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
      {
         testimonials.map((value, index) => (
            <SingleReview testimonialData={value} key={index} />
            //console.log(value)
          ))
      }
        
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  )
}

Review.propTypes = {
  data: PropTypes.object
}

export default Review
