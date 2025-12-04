import './UniqueTeaching.css'
import HorizontalSectionWithPic  from '../../Components/HorizontalSectionWithPic/HorizontalSectionWithPic';
import coverPic from '../../assets/unique-teaching.png';
import TileContainerContext from '../../Contexts/TileContainerContext';
import Faculty from '../Models/Faculty';
import TileContainer from '../../Components/TileContainer/TileContainer';



export default function UniqueTeaching()
{

    const cssValues = {
                        facultyCardHeight: "85vh",
                        width : "30vw",
                        justifyContent : "space-evenly",
                     };
    var faculty1= new Faculty("" , "Visualization", [], "Our faculty is a group of highly experienced educators and professionals who care about your learning journey. They combine deep subject knowle", "" ,[], "",[], [],"/assets/visual-learning-card.png");
    var faculty2= new Faculty("" , "Cooperative Learning", [], "I never imagined learning could be this enjoyable and impactful. This institute transformed the way I think, study, and apply knowledge.", "" , [],"",[], [],"/assets/cooperative-learning.png");
    var faculty3= new Faculty("" , "Inquiry based Instruction", [], "Start earning from day one while building your career foundation. Learn practical skills and put them to work immediately.",  "" ,[], "",[], [],"/assets/inquiry-based-learning.png");
    var faculty4= new Faculty("" , "Differentiation learning", [], "Our faculty is a group of highly experienced educators and professionals who care about your learning journey. They combine deep subject knowle", "" ,[], "",[], [],"/assets/differentiation-learning.png");
    var faculty5= new Faculty("" , "Technology in classroom", [], "I never imagined learning could be this enjoyable and impactful. This institute transformed the way I think, study, and apply knowledge.", "" , [],"",[], [],"/assets/high-tech-learning.png");
    var faculty6= new Faculty("" , "Behaviour management", [], "Start earning from day one while building your career foundation. Learn practical skills and put them to work immediately.",  "" ,[], "",[], [],"/assets/behavior-management.png");
    var faculty7= new Faculty("" , "Professional Development", [], "Start earning from day one while building your career foundation. Learn practical skills and put them to work immediately.",  "" ,[], "",[], [],"/assets/professional-development.png");

        
    const facultyList = [faculty1, faculty2, faculty3, faculty4, faculty5, faculty6, faculty7];  

    return(
        <section>
            <HorizontalSectionWithPic picOnLeft={false} pic={coverPic} heading={"Our Effective Teaching strategies in the classroom will help you stand out."} text={""}/>

             <TileContainerContext.Provider value={cssValues}>
               <TileContainer facultyList={facultyList}/>
            </TileContainerContext.Provider>

        </section>
    );

}