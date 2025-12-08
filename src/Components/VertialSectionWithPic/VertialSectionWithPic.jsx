import './VertialSectionWithPic.css';
import KnowMoreButton from '../Buttons/KnowMoreButton/KnowMoreButton';

export default function VertialSectionWithPic({pic,picOnLeft,heading,text,knowMoreLink})
{

    return(
        <section className="single-vertical-section-with-pic">
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