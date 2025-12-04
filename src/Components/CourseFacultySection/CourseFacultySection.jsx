import { createContext } from "react";
import Faculty from '../../Pages/Models/Faculty';
import TileContainer from '../../Components/TileContainer/TileContainer';
import TileContainerContext from '../../Contexts/TileContainerContext.js'


export default function CourseFacultySection()
{

   var faculty1= new Faculty("" , "Ronen Sen", [], "Our faculty is a group of highly experienced educators and professionals who care about your learning journey. They combine deep subject knowle", "" ,[], "",[], [],"/assets/faculty1.png","/faculty");
   var faculty2= new Faculty("" , "Anik Pal", [], "I never imagined learning could be this enjoyable and impactful. This institute transformed the way I think, study, and apply knowledge.", "" , [],"",[], [],"/assets/faculty2.png","/success-story");
   var faculty3= new Faculty("" , "Subro Das", [], "Start earning from day one while building your career foundation. Learn practical skills and put them to work immediately.",  "" ,[], "",[], [],"/assets/faculty3.png","/earn-while-learning");
    var faculty4= new Faculty("" , "Anik Pal", [], "I never imagined learning could be this enjoyable and impactful. This institute transformed the way I think, study, and apply knowledge.", "" , [],"",[], [],"/assets/faculty2.png","/success-story");
   var faculty5= new Faculty("" , "Subro Das", [], "Start earning from day one while building your career foundation. Learn practical skills and put them to work immediately.",  "" ,[], "",[], [],"/assets/faculty3.png","/earn-while-learning");
   
   const facultyList = [faculty1, faculty2, faculty3,faculty4,faculty5];

     const cssValues = {
                        facultyCardHeight: "80vh",
                        width : "30vw",
                        justifyContent : "space-evenly",
                     };

   
    const knowMoreSection = {
        isSectionVisible : false
    };


    return(

        <section>
             <section id="mahasamvit-edu-course-faculty">
                <h1 className="faculty-section-heading">Our World Class Faculty</h1>
             <hr></hr>
             </section>
              <TileContainerContext.Provider value={{cssValues,knowMoreSection}}>
               <TileContainer facultyList={facultyList}/>
            </TileContainerContext.Provider>


        </section>




    );
}