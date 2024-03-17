import PropTypes from 'prop-types';
import './Portfolio.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import SinglePortfolio from './SinglePortfolio';
import Modal from '../Modal/Modal';

import { useContext, useEffect, useState } from "react";
import NoteContext from "./../../ContextApi/NoteContext";



const PortfolioSection = () => {
  
  const contextValues=useContext(NoteContext)
   if (!contextValues || !contextValues.apidata || !contextValues.apidata.success || !contextValues.apidata.user || !contextValues.apidata.user.projects) {
    return <p>Error: Unable to retrieve user data</p>;
  }

  const [project, setProject] = useState([]);
  

  useEffect(() => {
    if (contextValues.apidata.user && contextValues.apidata.user.projects) {
      setProject(contextValues.apidata.user.projects);
    }
  }, [contextValues.apidata.user]);

  return (
    <>
      <section id="portfolio">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title={'Portfolio'} />
        <div className="container">
          <div className="row">
            {project.map((element, index) => (
              <SinglePortfolio apiData={element} key={index}  />
            ))}
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
    </>
  );
};

PortfolioSection.propTypes = {
  data: PropTypes.object,
};

export default PortfolioSection;


