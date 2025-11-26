// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './CategoryCourseList.css';

import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import financeStudentBlack from "../../assets/finance-student-black.jpg";
import Dropdown from "../../Components/Dropdown/Dropdown";
import CourseDetail from '../../Components/CourseDetail/CourseDetail';

function CategoryCourseList()
{

   const location = useLocation();
   const { courseCategory } = location.state || {} ;
   const [selectedCourseName, setSelectedCourseName ] = useState(null);


   function selectCourseHandler(selectedCourseFromDropDown)
   {
      setSelectedCourseName(selectedCourseFromDropDown);
   }



   return (
    <section>
    

         <div id="homepage-heading" >
            <h2>Courses in</h2>
            <h2>{courseCategory}</h2>
            <Dropdown selectCourseHandler={selectCourseHandler}/>
         </div>



     

         <div id="homepage-image">
            <div id="image-finance-student" class="homepage-img-container">
                  <img src={financeStudentBlack}/>
            </div>


         </div>

         {selectedCourseName !== null && <CourseDetail courseName={selectedCourseName}/>}
      


    </section> 


   )
}

export default CategoryCourseList;