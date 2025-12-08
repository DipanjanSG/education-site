import './ContactUs.css';
import HorizontalSectionWithPic  from '../../Components/HorizontalSectionWithPic/HorizontalSectionWithPic';
import TileContainer from '../../Components/TileContainer/TileContainer';
import OnlyTextCover from '../../Components/CoverSections/OnlyTextCover/OnlyTextCover';
import TileContainerContext from '../../Contexts/TileContainerContext';
import coverPic1 from '../../assets/student1.png';
import coverPic2 from '../../assets/student2.png';
import coverPic3 from '../../assets/student3.png';
import Faculty from '../Models/Faculty';
import hourGlass from "../../assets/hour-glass.png";
import bankingAndInsurance from "../../assets/banking-and-insurance.png";
import legalFinance from "../../assets/legal-finance.png";
import capitalMarkets from "../../assets/capital-markets.png";
import TripleTiles from '../../Components/TripleTiles/TripleTiles';
import { useState } from 'react';
import DualTiles from '../../Components/DualTiles/DualTiles';
import govtJobsCourses from "../../assets/govt-jobs-courses.png";
import accountsAndTax from "../../assets/accounts-and-tax.jpg";





export default function ContactUs()
{

    var faculty1= new Faculty("" , "Ruchira Sen", [], "This course helped me understand concepts that always felt complicated before. The lessons were clear, practical, and easy to follow.", "x" ,[], "",[], [],"/assets/student4.png");
    var faculty2= new Faculty("" , "Sayani Das", [], "I never imagined learning could be this enjoyable and impactful. This institute transformed the way I think, study, and apply knowledge.", "x" , [],"",[], [],"/assets/student5.png");
    var faculty3= new Faculty("" , "Pallab Ghosh", [], "This course helped me understand concepts that always felt complicated before. The lessons were clear, practical, and easy to follow.",  "x" ,[], "",[], [],"/assets/student6.png");
   const [rowOnePics , setRowOnePics] = useState([bankingAndInsurance,legalFinance,capitalMarkets]);
      const [rowTwoPics , setRowTwoPics] = useState([govtJobsCourses,accountsAndTax]);
   
    
    const facultyList = [faculty1, faculty2, faculty3];
    
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
            <OnlyTextCover coverText={"Ask Us Anything"}/>

            <section className='tile-container'>
            <TripleTiles careerLeftTile={"WhatsApp us"} careerMiddleTile={"Call us"} careerRightTile={"E-mail us"} pics={rowOnePics}></TripleTiles>
            
            </section>
           
           {/* <DualTiles careerLeftTile={"Govt Jobs (SEBI, RBI, EXCHANGES)"} careerRightTile={"Accounts & Tax"} pics={rowTwoPics}></DualTiles> */}
            <hr />
            <section className='tile-container'></section>
                <DualTiles careerLeftTile={"Drop us a letter"} careerRightTile={"Find us on map & visit us"} pics={rowTwoPics}></DualTiles>
            <section className='tile-container'></section>
            <p className='not-available-text'>The library will be available in a few months</p>  


        </section>
    );
}