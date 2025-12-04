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
import TileContainerContext from '../../Contexts/TileContainerContext.js'

export const facultyCardContext = createContext();

function HomePage() {

   var faculty1= new Faculty("" , "Our World Class Faculty", [], "Our faculty is a group of highly experienced educators and professionals who care about your learning journey. They combine deep subject knowle", "" ,[], "",[], [],"/assets/faculty.png","/earn-while-learning","/faculty");
   var faculty2= new Faculty("/success-story" , "Student Testimonials", [], "I never imagined learning could be this enjoyable and impactful. This institute transformed the way I think, study, and apply knowledge.", "" , [],"",[], [],"/assets/front-view-smiley-man-holding-book.jpg","/success-story");
   var faculty3= new Faculty("" , "Earn while learning", [], "Start earning from day one while building your career foundation. Learn practical skills and put them to work immediately.",  "" ,[], "",[], [],"/assets/learn-earn.png","/earn-while-learning");
   
   const facultyList = [faculty1, faculty2, faculty3];
   const cssValues = {
                        facultyCardHeight: "80vh",
                        width : "30vw",
                        justifyContent : "space-evenly",
                     };

   
    const knowMoreSection = {
        isSectionVisible : true
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

        <div id="homepage-links"  > 
         <span ><Link  to="/earn-while-learning"><span  className="special-button">Earn while you learn</span></Link></span> 
         |
         <span ><Link to="/course-categories"><span className="shrink-underline-black">Courses Offered By Us</span></Link> </span>
      </div> 
      </div>

      

      <div id="homepage-image">
         <div id="image-finance-student" className="homepage-img-container">
               <img src={financeStudent}/>
         </div>
      </div> 

      
         <HorizontalSectionWithPic knowMoreLink="/unique-teaching" picOnLeft={true} pic={teachingTechnique} heading={"Our Unique Teaching Methology"} text={"Our methodology focuses on conceptual clarity, guided practice, and reflective learning. We use structured frameworks and proven instructional techniques. Each topic progresses from foundational knowledge to advanced application."}/>


            <TileContainerContext.Provider value={{cssValues,knowMoreSection}}>
               <TileContainer facultyList={facultyList}/>
            </TileContainerContext.Provider>

         <HorizontalSectionWithPic knowMoreLink="/unique-teaching" picOnLeft={false} pic={onlineLibrary} heading={"Our Online Library"} text={"Students today hardly have the time to sit down and read a paperback novel. They read everything on their laptop or smartphone or any internet-enabled device. This is because everything is available online at the tap of a few buttons."}/>
      </div>
  

  )
}

export default HomePage
