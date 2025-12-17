import './CareerOpportunities.css';
import financeStudentBlack3 from "../../assets/unlimited-reading.png";
import { useEffect} from "react";


export default function CareerOpportunities({courseDetails})
{
   useEffect(()=>
   {
        console.log("CareerOpportunities" , courseDetails);

   }, []);


    return(
    <section id = "mahasamvit-edu-course-career-opp">

        {courseDetails !== null &&
        <section>
        <h1> Career Opportunities </h1>
        <hr></hr>
        <section className='career-opp-details'>
            <section>
                <p className='career-opp-details-text'>{courseDetails.careerOpportunities}</p>
                <ul>
                    <li><b>Role</b> Auditing, taxation, financial reporting, and advisory services</li>  
                    <li><b>Employers</b> CA firms, corporates, government, self-practice</li>
                    <li><b>Prospects</b> CFO, Financial Controller, Tax Consultant</li>
                </ul>
            </section>

            <section>
                <img src={financeStudentBlack3}></img>
            </section>
        </section>  
        </section>   
}          
    </section>
    
);
}