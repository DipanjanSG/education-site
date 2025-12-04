import './CareerOpportunities.css';
import financeStudentBlack3 from "../../assets/unlimited-reading.png";



export default function CareerOpportunities()
{

    return(
    <section id = "mahasamvit-edu-course-career-opp">
        <h1> Career Opportunities </h1>
        <hr></hr>

        <section className='career-opp-details'>
            <section>
                <p className='career-opp-details-text'> Accounting is a core function in any business or organization. Professionals in accounting are responsible for tracking, analyzing, and reporting financial information, ensuring regulatory compliance, and providing insights for strategic decision-making. A career in accounting opens diverse opportunities in corporate, government, and consulting sectors.</p>
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
    
);
}