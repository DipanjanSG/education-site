
import './CourseDetail.css'
import courseDuration from '../../assets/course-duration.png';
import Syllabus from '../Syllabus/Syllabus.jsx';
import CareerOpportunities from '../CareerOpportunities/CareerOpportunities.jsx';
import CourseFacultySection from '../CourseFacultySection/CourseFacultySection.jsx';
import { useContext } from 'react';


function CourseDetail({courseName})
{
        return(


            <main>
                <header id="specific-career-opprtunity-media" className="specific-career-opprtunity-media">
                    <iframe 
                        id="summary-video"
                        src="https://www.youtube.com/embed/ZHocDXqLkcw?controls=0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        >
                    </iframe>


                    <section className="summary">
                        <h2>{courseName}</h2>
                        <hr></hr>
                        <p id="summary-description">Course is designed to develop expertise in financial accounting, taxation, 
                            auditing, and financial management. Will equip you with skills to handle 
                            complex financial operations, ensure compliance with regulatory 
                            frameworks, and provide strategic financial guidance in corporate and 
                            public sectors.
                        </p>

                        <section id="summary-grid">
                            <section id="summary-grid-item">
                                <i class="bi bi-calendar2-range"></i>
                                <p>2 Years Course</p>
                            </section>    


                            <section id="summary-grid-item">
                                <i class="bi bi-bookmark-check-fill"></i>
                                <p>Class 12 Pass</p>
                            </section>   

                            
                            <section id="summary-grid-item">
                                <i class="bi bi-question-circle-fill"></i>
                                <p>FAQs</p>
                            </section> 

                            <section id="summary-grid-item">
                                <i class="bi bi-cash-stack"></i>

                                <p> 1 Lakh </p>
                            </section>
                        </section> 


                        <section>
                            <br></br>
                            <button class="btn btn-light rounded-pill"> Enroll in Next Batch : 12/12/15  </button>
                        </section>
                         
                    
                    </section>
                </header>


                {/* <hr></hr> */}
                <CourseFacultySection/>
                <CareerOpportunities/>
                 <Syllabus/>
                {/* <hr></hr> */}

                
            {/* <hr></hr>     */}
           
             {/* <hr></hr>     */}
            <section id="mahasamvit-edu-course-action">
                <h3>What are you waiting for ?</h3>
                <hr></hr>
                <button class="btn btn-light rounded-pill">Enroll</button> <span>or</span> &nbsp;
            <button class="btn btn-light rounded-pill">Ask a Question</button></section>
            
                

            </main>
        )


}

export default CourseDetail;