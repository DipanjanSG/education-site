
import './CourseDetail.css'
import courseDuration from '../../assets/course-duration.png';
import Syllabus from '../Syllabus/Syllabus.jsx';
import CareerOpportunities from '../CareerOpportunities/CareerOpportunities.jsx';
import CourseFacultySection from '../CourseFacultySection/CourseFacultySection.jsx';
import { useContext } from 'react';
import CourseDetailAction from '../CourseDetailAction/CourseDetailAction.jsx';
import CourseSummary from '../CourseSummary/CourseSummary.jsx';
import { useEffect } from 'react';

function CourseDetail({courseDetails})
{

    useEffect(
        ()=>{ console.log("coursedetails",courseDetails); },
        
        [courseDetails]);



        return(
            <main>
            <CourseSummary courseDetails={courseDetails}/> 
            <CourseFacultySection/>
            <CareerOpportunities courseDetails={courseDetails}/> 
            <Syllabus courseDetails={courseDetails}/>
            <CourseDetailAction/> 
            </main>
        )


}

export default CourseDetail;