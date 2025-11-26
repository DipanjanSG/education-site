import SingleTilePic from '../SingleTilePic/SingleTilePic';
import './TileContainer.css';

function TileContainer({facultyList})
{
    return(
        
      <section className="single-horizontal-tile-container">
         {  
            facultyList.map((faculty) => ( <SingleTilePic contentsObj={faculty}/>))
         }

      </section> 
    )
}

export default TileContainer;