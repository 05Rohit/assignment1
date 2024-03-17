import './Review.scss';
import PropTypes from 'prop-types';

const SingleReview = ({testimonialData}) => {

  const {image,name,review,position}=testimonialData

  return (
    <div className={`st-testimonial st-style1 `} data--duration="0.8s" data--delay="0.2s">
      <div className="st-testimonial-text">
        <p>{review}</p>
        <div className="st-quote"><img src="/images/icon/quote.png" alt="quote" /></div>
      </div>
      <div className="st-testimonial-info">
        <div className="st-testimonial-img"><img src={image.url} alt="client1" /></div>
        <div className="st-testimonial-meta">
          <h4 className="st-testimonial-name">{name}</h4>
          <div className="st-testimonial-designation">{position}</div>
        </div>
      </div>
    </div>
  )
}
SingleReview.propTypes = {
  element: PropTypes.object
}

export default SingleReview;
