import './CareerOppAndCourseCategories.css';

import { useState } from 'react'
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
import accountsAndTax from "../../assets/accounts-and-tax.png";

function CareerOppAndCourseCategories()
{

   const [rowOnePics , setRowOnePics] = useState([bankingAndInsurance,legalFinance,capitalMarkets]);
   const [rowTwoPics , setRowTwoPics] = useState([govtJobsCourses,accountsAndTax]);
   const [rowThreePics , setRowThreePics] = useState([fundAndWealthMgmt,academicCourses,dualDegree]);



   return (
    <div>
        

     <div id="homepage-heading" >
        <h2>Career Opportunities in Finance</h2>
        <h2>&amp;</h2>
        <h2>Courses Offered</h2>
     </div>

     

     <div id="homepage-image">
        <div id="image-finance-student" class="homepage-img-container">
            <img src={financeStudentBlack}/>
        </div>
    </div>


    <TripleTiles careerLeftTile={"Banking & Insurance"} careerMiddleTile={"Legal Finance"} careerRightTile={"Capital, Commodity, Currency Market"} pics={rowOnePics}></TripleTiles>
    <DualTiles careerLeftTile={"Govt Jobs (SEBI, RBI, EXCHANGES)"} careerRightTile={"Accounts & Tax"} pics={rowTwoPics}></DualTiles>
    <TripleTiles careerLeftTile={"Fund & Wealth Management"} careerMiddleTile={"Academic Courses"} careerRightTile={"Dual Degree for Skilled Professionals"} pics={rowThreePics}></TripleTiles>
    </div> 


   )
}

export default CareerOppAndCourseCategories;