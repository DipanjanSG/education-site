import './SingleTilePic.css';

import {useContext } from 'react';
import TileContainerContext  from '../../Contexts/TileContainerContext.js';
import { useNavigate } from 'react-router-dom';
import KnowMoreButton from '../Buttons/KnowMoreButton/KnowMoreButton.jsx';

function SingleTilePic({contentsObj})
{

    const {cssValues,knowMoreSection} = useContext(TileContainerContext);
    const navigate = useNavigate();

    const styleObj = {};

    if(cssValues)
    {
        styleObj.height = cssValues.facultyCardHeight;
        styleObj.justifyContent = cssValues.justifyContent;
        styleObj.width = cssValues.width;
    }

    return(
       
        <section id="tile_left" onClick={() => navigate(contentsObj.knowMoreLink)} className="single-horizontal-tile" 
                                         style={styleObj}>
                                                    
            <img src={contentsObj.pic}></img>
            <section className="mahasamvit-edu-faculty-details">
                
                <span class="mahasamvit-edu-faculty-name"><span>{contentsObj.designation.length >0 && contentsObj.designation+ "\u00A0"}{contentsObj.name}</span>
                </span>
                <p>{contentsObj.degrees.join(", ")}</p>
                
                {contentsObj.role && <p>{contentsObj.role} of {contentsObj.department}</p>}
                <hr></hr>
                {/* <p></p> */}
                {contentsObj.coursesTaught.length > 0 && <section><p class="mahasamvit-edu-faculty-courses-taught">Courses Taught</p>

                <p>{contentsObj.coursesTaught.join(", ")}</p></section>}
                
                {knowMoreSection.isSectionVisible && knowMoreSection.component && <knowMoreSection.component marginLeft={"20px"}/>}
            </section>
        </section>
    )
}

export default SingleTilePic;