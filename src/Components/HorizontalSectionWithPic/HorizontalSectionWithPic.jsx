import './HorizontalSectionWithPic.css';


export default function HorizontalSectionWithPic({pic,picOnLeft,heading,text})
{


    return(
        <section id="single-horizontal-section-with-pic" className="single-horizontal-section-with-pic">
                   {picOnLeft && <img src={pic}/>}

                   <section>
                        <h1>{heading}</h1>
                        <hr></hr>
                        <br></br>
                        {text}
                   </section>


                    {!picOnLeft && <img src={pic}/>}
        </section>    
        );
}