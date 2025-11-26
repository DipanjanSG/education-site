import './TripleTiles.css';
import {Link} from 'react-router-dom';

function DualTiles({careerLeftTile, careerMiddleTile ,careerRightTile,pics })
{
    return(
        <div id ="dual-tiles" className="dual-tiles">
            <div id="tile_left" className="triple-tile" style={{
          backgroundImage: `linear-gradient(to top,
            rgba(255, 255, 255, 0.9) 0%,  
            rgba(255, 255, 255, 0.7) 70%,
            rgba(255, 255, 255, 0.0) 100%), 
            url(${pics[0]})`,
        }} ><span><Link to="/course-categories/courses"  state = {{  courseCategory : careerLeftTile}}>{careerLeftTile}</Link></span></div>


            <div id="tile_middle" className="triple-tile" style={{
          backgroundImage: `linear-gradient(to top,
            rgba(255, 255, 255, 0.9) 0%,  
            rgba(255, 255, 255, 0.7) 70%,
            rgba(255, 255, 255, 0.0) 100%), 
            url(${pics[1]})`,
        }} ><span>{careerMiddleTile}</span></div>
            <div id="tile_right" className="triple-tile" style={{
          backgroundImage: `linear-gradient(to top,
            rgba(255, 255, 255, 0.9) 0%,  
            rgba(255, 255, 255, 0.7) 70%,
            rgba(255, 255, 255, 0.0) 100%), 
            url(${pics[2]})`,
        }} ><span>{careerRightTile}</span></div>
        </div>

    )
}

export default DualTiles;