
import './CourseDetailAction.css'


function CourseDetailAction()
{
    return(
                
        <section id="mahasamvit-edu-course-action-grid-container">
                
            <section className='course-action-grid-item heading'> 
                <h1>Do enroll in this course. If any doubt or query , please feel free to contact us</h1>
                <hr></hr>
            </section>
           
            <section className='course-action-grid-item course-action-buttons'> 
                <button class="btn btn-light rounded-pill course-action-button">Enroll</button> 
                <span className='button-divider'>OR</span>
                <button class="btn btn-light rounded-pill course-action-button">Ask a Question</button>
            </section> 
            
        </section>
    );
}

export default CourseDetailAction;