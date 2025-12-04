import './OnlineLibrary';
import TripleTextCover from '../../Components/CoverSections/TripleTextCover/TripleTextCover';




export default function OnlineLibrary()
{


    const coverText = ["10000+ Books",  "2000+ Authors", "Unlimited Reading"];

    return(

        <section>
            <TripleTextCover coverText={coverText}/>
            <p>The library Will be available in a few months</p>
            {/* <HorizontalSectionWithPic picOnLeft={true} pic={coverPic1} heading={"This course helped me understand concepts that always felt complicated before. The lessons were clear, practical, and easy to follow."} text={"Priya Anand"}/> */}
            
        </section>
    );
}