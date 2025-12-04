import './SuccessStory';
import HorizontalSectionWithPic  from '../../Components/HorizontalSectionWithPic/HorizontalSectionWithPic';
import TileContainer from '../../Components/TileContainer/TileContainer';
import OnlyTextCover from '../../Components/CoverSections/OnlyTextCover/OnlyTextCover';
import TileContainerContext from '../../Contexts/TileContainerContext';
import coverPic1 from '../../assets/student1.png';
import coverPic2 from '../../assets/student2.png';
import coverPic3 from '../../assets/student3.png';
import Faculty from '../Models/Faculty';



export default function SuccessStory()
{

    var faculty1= new Faculty("" , "Ruchira Sen", [], "This course helped me understand concepts that always felt complicated before. The lessons were clear, practical, and easy to follow.", "" ,[], "",[], [],"/assets/student4.png");
    var faculty2= new Faculty("" , "Sayani Das", [], "I never imagined learning could be this enjoyable and impactful. This institute transformed the way I think, study, and apply knowledge.", "" , [],"",[], [],"/assets/student5.png");
    var faculty3= new Faculty("" , "Pallab Ghosh", [], "This course helped me understand concepts that always felt complicated before. The lessons were clear, practical, and easy to follow.",  "" ,[], "",[], [],"/assets/student6.png");
   
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
            <OnlyTextCover coverText={"Student Testimonials"}/>
            <HorizontalSectionWithPic picOnLeft={true} pic={coverPic1} heading={"This course helped me understand concepts that always felt complicated before. The lessons were clear, practical, and easy to follow."} text={"Priya Anand"}/>
            <HorizontalSectionWithPic picOnLeft={false} pic={coverPic2} heading={"I went from knowing nothing to building real projects. I finally feel confident applying what I’ve learned."} text={"Rahul Pal"}/>
            
            <TileContainerContext.Provider value={{cssValues, knowMoreSection}}>
               <TileContainer facultyList={facultyList}/>
            </TileContainerContext.Provider>

            <HorizontalSectionWithPic picOnLeft={true} pic={coverPic3} heading={"The pace was perfect. I especially loved the real-life examples — they made everything click."} text={"Kanomozhi P"}/>


        </section>
    );
}