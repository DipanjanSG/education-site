
import './CourseDetail.css'
import courseDuration from '../../assets/course-duration.png';


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
                <section id = "mahasamvit-edu-course-career-opp">
                    <h3> Career Opportunities </h3>
                    <hr></hr> 
                    <section>


                        <p> Accounting is a core function in any business or organization. Professionals in accounting are responsible for tracking, analyzing, and reporting financial information, ensuring regulatory compliance, and providing insights for strategic decision-making. A career in accounting opens diverse opportunities in corporate, government, and consulting sectors.</p>
                        <ul>

                            <li>Role: Auditing, taxation, financial reporting, and advisory services.</li>  
                            <li>Employers: CA firms, corporates, government, self-practice.</li>
                            <li>Prospects: CFO, Financial Controller, Tax Consultant.</li>
                        </ul>


                    </section>
                   
                </section>

                 
                {/* <hr></hr> */}

                <section id ="mahasamvit-edu-course-syllabus">
                    <h3> Syllabus (In Short) </h3>
                    <hr></hr> 

                    

  <section>
    <h3>Foundation Level</h3>
    <ul>
      <li><strong>Accounting Principles:</strong> Basic concepts, accounting standards, journal entries, ledgers, trial balance.</li>
      <li><strong>Business Laws:</strong> Company Law, Contract Act, Business Law basics.</li>
      <li><strong>Business Mathematics and Statistics:</strong> Ratio analysis, percentages, probability, statistical tools.</li>
      <li><strong>Business Economics:</strong> Micro and macroeconomics, demand-supply, production, cost, market structure.</li>
      <li><strong>Business & Commercial Knowledge:</strong> Basics of business, trade, commerce, and global business environment.</li>
    </ul>
  </section>


  <section>
    <h3>Intermediate (IPCC) Level</h3>
    <ul>
      <li><strong>Accounting:</strong> Advanced accounting standards, partnership accounts, company accounts, financial statements.</li>
      <li><strong>Corporate Laws:</strong> Companies Act, corporate governance, compliance requirements.</li>
      <li><strong>Cost Accounting:</strong> Costing methods, cost control, budgeting, standard costing, marginal costing.</li>
      <li><strong>Taxation:</strong> Income Tax, GST, TDS, indirect taxes.</li>
      <li><strong>Auditing & Assurance:</strong> Audit planning, internal controls, audit procedures, reporting.</li>
      <li><strong>Financial Management:</strong> Capital budgeting, working capital management, financial analysis.</li>
      <li><strong>Information Technology:</strong> Basics of IT, accounting software, e-commerce concepts.</li>
    </ul>
  </section>


  <section>
    <h3>Final Level</h3>
    <ul>
      <li><strong>Financial Reporting:</strong> Corporate financial statements, IFRS, IND AS, financial analysis.</li>
      <li><strong>Strategic Financial Management:</strong> Mergers & acquisitions, risk management, corporate finance decisions.</li>
      <li><strong>Advanced Auditing & Professional Ethics:</strong> Internal audit, audit standards, professional ethics, corporate governance.</li>
      <li><strong>Corporate Laws & Allied Laws:</strong> Advanced company law, securities law, economic laws.</li>
      <li><strong>Taxation:</strong> Advanced Income Tax, GST, international taxation, tax planning.</li>
      <li><strong>Electives (Optional):</strong> Risk management, financial services, international taxation, corporate restructuring.</li>
      <li><strong>Case Studies & Practical Training:</strong> Articleship under CA firm, practical exposure to audits and accounting.</li>
    </ul>
  </section>


            <br></br>
            <section id="mahasamvit-edu-course-syllabus-action">
                <button class="btn btn-light rounded-pill ">Download Detailed Syllabus<i class="bi bi-file-earmark-arrow-down-fill"></i> </button>
            </section>
                </section>

            
               

            {/* <hr></hr>     */}
            <section id="mahasamvit-edu-course-faculty"><h3> Our World Class Faculty</h3><hr></hr></section>
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