import './OnlineLibrary.css';
import TripleTextCover from '../../Components/CoverSections/TripleTextCover/TripleTextCover';
import hourGlass from "../../assets/hour-glass.png";
import TripleTiles from '../../Components/TripleTiles/TripleTiles';




export default function OnlineLibrary()
{


    const coverText = ["10000+ Books",  "2000+ Authors", "Unlimited Reading"];

    return(

        <section>
            <TripleTextCover coverText={coverText}/>
            <img src={hourGlass} className='hour-glass'></img>
            <hr />
            <p className='not-available-text'>The library will be available in a few months</p>  
        </section>
    );
}