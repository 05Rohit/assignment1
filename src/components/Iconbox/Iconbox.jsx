import PropTypes from 'prop-types'
import SectionHeading from '../SectionHeading/SectionHeading'
import './Iconbox.scss';

import { useContext, useEffect, useState } from 'react';
import NoteContext from './../../ContextApi/NoteContext';

const Iconbox = () => {
 
  const contextValues=useContext(NoteContext)
   if (!contextValues || !contextValues.apidata || !contextValues.apidata.success || !contextValues.apidata.user || !contextValues.apidata.user.services) {
    return <p>Error: Unable to retrieve user data</p>;
}

const [services, setServices] = useState([]);

  useEffect(() => {
    if (contextValues.apidata.user && contextValues.apidata.user.services) {
      setServices(contextValues.apidata.user.services);
    }
  }, [contextValues.apidata.user]);

  return (
    <section>
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"Service"} />
      <div className="container">
        <div className="row">
          {
            services.map((element, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className={`st-iconbox st-style1`}>
                  <div className="st-iconbox-icon">
                    <img src={element.image.url} alt="Icon" />
                  </div>
                  <h2 className="st-iconbox-title">{element.name}</h2>
                  <div className="st-iconbox-text">{element.desc}</div>
                  <div className="st-iconbox-text st-padding-top">{element.charge}</div>
                </div>
           
              </div>
            ))
          }
        </div>
      </div>
      <div className="st-height-b70 st-height-lg-b50"></div>
    </section>
  )
}

Iconbox.propTypes = {
  data: PropTypes.object
}

export default Iconbox;
