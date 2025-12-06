import './HorizontalSectionWithPic.css';
import KnowMoreButton from '../Buttons/KnowMoreButton/KnowMoreButton';

export default function HorizontalSectionWithPic({pic,picOnLeft,heading,text,knowMoreLink})
{

    return(
        <section id="single-horizontal-section-with-pic" className="single-horizontal-section-with-pic">
                   {picOnLeft && <img src={pic}/>}

                   <section>
                        <h2>{heading}</h2>
                        <hr></hr>
                        <br></br>
                        {text}

                        {knowMoreLink && <KnowMoreButton onClickLink={knowMoreLink}/>}
                   </section>


                    {!picOnLeft && <img src={pic}/>}
        </section>    
        );
}