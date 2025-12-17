import './CourseSummary.css'

function CourseSummary({courseDetails})
{
        return(
               <section className="course-summary">
                <section className="header-section">
                    {courseDetails !== null && courseDetails.name}
                </section>
                <hr></hr>
                <header className="specific-career-opprtunity-media">
                    
                    <section>
                        <iframe 
                            id="summary-video"
                            src="https://www.youtube.com/embed/ZHocDXqLkcw?controls=0"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            >
                        </iframe>
                    </section>
                    
 

                    <section className="summary">
                         
                        <p id="summary-description">
                             {courseDetails !== null && courseDetails.details}

                        </p>

                        <section id="summary-grid">
                            <section id="summary-grid-item">
                                <i class="bi bi-calendar2-range"></i>
                                <p>{courseDetails !== null && courseDetails.duration} Years Course</p>
                            </section>    


                            <section id="summary-grid-item">
                                <i class="bi bi-bookmark-check-fill"></i>
                                <p>{courseDetails !== null && courseDetails.eligibility}</p>
                            </section>   

                            
                            <section id="summary-grid-item">
                                <i class="bi bi-question-circle-fill"></i>
                                <p>FAQs</p>
                            </section> 

                            <section id="summary-grid-item">
                                <i class="bi bi-cash-stack"></i>
                                <p>{courseDetails !== null && courseDetails.fees} Lakh </p>
                            </section>
                        </section>  


                        <section className="course-summary-action">
                            <br></br>
                            <button class="btn btn-light rounded-pill"> Enroll in Next Batch : {courseDetails!== null && courseDetails.nextEnrollmentDate} </button>
                        </section>
                         
                    
                    </section>
                </header>
                </section>
        )
}

export default CourseSummary;