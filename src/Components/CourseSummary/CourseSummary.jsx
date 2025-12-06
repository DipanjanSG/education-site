import './CourseSummary.css'

function CourseSummary({courseName})
{
        return(
               <section className="course-summary">
                <section className="header-section">
                    {courseName}
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


                        <section className="course-summary-action">
                            <br></br>
                            <button class="btn btn-light rounded-pill"> Enroll in Next Batch : 12/12/15 </button>
                        </section>
                         
                    
                    </section>
                </header>
                </section>
        )
}

export default CourseSummary;