
import './CourseDetail.css'
import courseDuration from '../../assets/course-duration.png';
import Syllabus from '../Syllabus/Syllabus.jsx';
import CareerOpportunities from '../CareerOpportunities/CareerOpportunities.jsx';
import CourseFacultySection from '../CourseFacultySection/CourseFacultySection.jsx';
import { useContext } from 'react';
import CourseDetailAction from '../CourseDetailAction/CourseDetailAction.jsx';
import CourseSummary from '../CourseSummary/CourseSummary.jsx';

function CourseDetail({courseName})
{
        return(


            <main>
            <CourseSummary courseName={courseName}/>
            <CourseFacultySection/>
            <CareerOpportunities/>
            <Syllabus/>
            <CourseDetailAction/>
            </main>
        )


}

export default CourseDetail;