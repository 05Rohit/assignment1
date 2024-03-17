import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';



const SinglePortfolio = ({apiData }) => {
const {title, image, techStack }=apiData;
//console.log(title, image, techStack )


 const { url } = image || {}; 

  return (

    <div className="col-lg-4 col-md-6">
      <div className="st-portfolio-single st-style1">
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              {/* Display the image if 'url' is defined */}
              {url && <img src={url} alt={title} />}
            </div>
            <div className="st-portfolio-item-hover">
              <h5>{title}</h5>
              <p>
                {techStack}
              </p>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePortfolio
