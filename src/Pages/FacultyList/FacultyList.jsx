import './FacultyList.css';

import { useState,useEffect } from 'react'
import financeStudentBlack from "../../assets/finance-student-black.jpg";
// import Footer from '../../Components/Footer/Footer';
import DualTiles from '../../Components/DualTiles/DualTiles';
import TripleTiles from '../../Components/TripleTiles/TripleTiles';
import Footer from '../../Components/Footer/Footer';
import bankingAndInsurance from "../../assets/banking-and-insurance.png";
import legalFinance from "../../assets/legal-finance.png";
import capitalMarkets from "../../assets/capital-markets.png";

import fundAndWealthMgmt from "../../assets/fund-and-wealth-mgmt.png";
import academicCourses from "../../assets/academic-courses.png";
import dualDegree from "../../assets/dual-degree.png";

import govtJobsCourses from "../../assets/govt-jobs-courses.png";
import SingleTilePic from '../../Components/SingleTilePic/SingleTilePic';
import Faculty from '../Models/Faculty';
import TileContainer from '../../Components/TileContainer/TileContainer';
import TileContainerContext from '../../Contexts/TileContainerContext.js';
import { createContext } from 'react';


function FacultyList()
{

   var faculty1= new Faculty("Dr." , "Dipanjan Sengupta", ["B.Com", "Phd"], "Accounts", "Professor" ,["CMS", "CA"], "",[], [],"/assets/faculty1.png");
   var faculty2= new Faculty("" , "Sumit Pal", ["B.Com", "Phd"], "Accounts", "Senior Professor" , ["CMS", "CA"],"",[], [],"/assets/faculty2.png");
   var faculty3= new Faculty("Dr." , "Amit Sen", ["B.Com", "Phd"], "Accounts",  "Asst. Professor" ,["CMS", "CA"], "",[], [],"/assets/faculty3.png");
   var faculty4= new Faculty("Dr." , "Amal Ghosh", ["B.Com", "Phd"], "Accounts",  "Professor" ,["CMS", "CA"], "",[], [],"/assets/faculty4.png");
   var faculty5= new Faculty("Dr." , "Dipanjan Dasgupta", ["B.Com", "Phd"], "Accounts",  "Professor" ,["CMS", "CA"], "",[], [],"/assets/faculty5.png");
   var faculty6= new Faculty("Dr." , "Sumit Nandi", ["B.Com", "Phd"], "Accounts", "Professor" , ["CMS", "CA"],"",[], [],"/assets/faculty6.png");
   var faculty7= new Faculty("Dr." , "Amit Ghosh", ["B.Com", "Phd"], "Accounts", "Professor" , ["CMS", "CA"], "",[], [],"/assets/faculty7.png");

   const facultyList = [faculty1, faculty2, faculty3, faculty4, faculty5, faculty6, faculty7];

   const cssValues = {
                        facultyCardHeight: "70vh",
                        width : "30vw",
                        justifyContent : "space-evenly"
                     };

   const knowMoreSection = {
           isSectionVisible : false
       };

   // useEffect(() => 
   //    {
   //    }
   // []);

   return (
    <div>
        

     <div id="homepage-heading" >
        <h2>Our World Class Faculty</h2>
     </div>

     

     <div id="homepage-image">
        <div id="image-finance-student" class="homepage-img-container">
            <img src={financeStudentBlack}/>
        </div>
    </div>




      {/* <section className="single-horizontal-tile-container">
         {  

            facultyList.map((faculty) => ( <SingleTilePic facultyDetails={facultyList}/>))
               
         }

      </section> */}

      <TileContainerContext.Provider value={{cssValues,knowMoreSection}}>
         <TileContainer facultyList={facultyList}/>
      </TileContainerContext.Provider>


    
    </div> 


   )
}

export default FacultyList;