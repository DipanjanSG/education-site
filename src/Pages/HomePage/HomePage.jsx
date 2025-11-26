import './HomePage.css'
import financeStudent from "../../assets/finance-student.jpg";
import mahasamvitLogo from "../../assets/mahasamvit-logo.png";
import { Link } from "react-router-dom";
import HorizontalSectionWithPic  from '../../Components/HorizontalSectionWithPic/HorizontalSectionWithPic';
// import HorizontalSectionPicRight from '../../Components/HorizontalSectionPicRight/HorizontalSectionPicRight';
import teachingTechnique from '../../assets/academic-courses.png';
import onlineLibrary from '../../assets/online-library.jpg';
import TileContainer from '../../Components/TileContainer/TileContainer';
import Faculty from '../Models/Faculty';
import { createContext } from 'react';

export const facultyCardContext = createContext();

function HomePage() {

   var faculty1= new Faculty("" , "Our World Class Faculty", [], "Our faculty is a group of highly experienced educators and professionals who care about your learning journey. They combine deep subject knowle", "" ,[], "",[], [],"/assets/faculty.png");
   var faculty2= new Faculty("" , "Student Testimonials", [], "I never imagined learning could be this enjoyable and impactful. This institute transformed the way I think, study, and apply knowledge.", "" , [],"",[], [],"/assets/front-view-smiley-man-holding-book.jpg");
   var faculty3= new Faculty("" , "Earn while learning", [], "Start earning from day one while building your career foundation. Learn practical skills and put them to work immediately.",  "" ,[], "",[], [],"/assets/learn-earn.png");
   
   const facultyList = [faculty1, faculty2, faculty3];
   const cssValues = {
                        facultyCardHeight: "70vh",
                        width : "30vw",
                        justifyContent : "space-evenly",
                     };

  return (


      <div>
      <div id="homepage-logo">
         <img src={mahasamvitLogo}/>
         <span>Mahasamvit Education</span>
         <span> </span>
      </div>

      <div id="homepage-heading" >
         <h1> Global Finance Education</h1>

         <div id="homepage-links" >
         <span><u>Opportunities In Finance</u> | <u><Link to="/course-categories" >
         
         Courses Offered By Us</Link></u></span>
      </div>
      </div>

      

      <div id="homepage-image">
         <div id="image-finance-student" className="homepage-img-container">
               <img src={financeStudent}/>
         </div>
      </div> 

      

         <HorizontalSectionWithPic picOnLeft={true} pic={teachingTechnique} heading={"Our Unique Teaching Methology"} text={"Our methodology focuses on conceptual clarity, guided practice, and reflective learning. We use structured frameworks and proven instructional techniques. Each topic progresses from foundational knowledge to advanced application."}/>
            
            <facultyCardContext.Provider value={cssValues}>
               <TileContainer facultyList={facultyList}/>
            </facultyCardContext.Provider>

         <HorizontalSectionWithPic picOnLeft={false} pic={onlineLibrary} heading={"Our Library"} text={"Students today hardly have the time to sit down and read a paperback novel. They read everything on their laptop or smartphone or any internet-enabled device. This is because everything is available online at the tap of a few buttons."}/>
      </div>
  

  )
}

export default HomePage
