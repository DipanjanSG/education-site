import './CourseFacultySection.css';
import { createContext } from "react";
import Faculty from '../../Pages/Models/Faculty';
import TileContainer from '../../Components/TileContainer/TileContainer';
import TileContainerContext from '../../Contexts/TileContainerContext.js'


export default function CourseFacultySection()
{

   var faculty1= new Faculty("" , "Ronen Sen", ["B.Com", "Phd"], "", "" ,[], "",[], [],"/assets/faculty1.png","/faculty");
   var faculty2= new Faculty("" , "Anik Pal", ["B.Com", "Phd"], "", "" , [],"",[], [],"/assets/faculty2.png","/success-story");
   var faculty3= new Faculty("" , "Subro Das", ["B.Com", "Phd"], "",  "" ,[], "",[], [],"/assets/faculty3.png","/earn-while-learning");
    var faculty4= new Faculty("" , "Anik Pal", ["B.Com", "Phd"], "", "" , [],"",[], [],"/assets/faculty2.png","/success-story");
   var faculty5= new Faculty("" , "Subro Das", ["B.Com", "Phd"], "",  "" ,[], "",[], [],"/assets/faculty3.png","/earn-while-learning");
   
   const facultyList = [faculty1, faculty2, faculty3,faculty4,faculty5];

     const cssValues = {
                        facultyCardHeight: "65vh",
                        width : "30vw",
                        justifyContent : "space-evenly",
                     };

   
    const knowMoreSection = {
        isSectionVisible : false
    };


    return(

        <section id = "mahasamvit-edu-course-faculty" >
             <span className="faculty-section-heading">Our World Class Faculty</span>
             <hr></hr>
              <TileContainerContext.Provider value={{cssValues,knowMoreSection}}>
               <TileContainer facultyList={facultyList}/>
            </TileContainerContext.Provider>
        </section>




    );
}