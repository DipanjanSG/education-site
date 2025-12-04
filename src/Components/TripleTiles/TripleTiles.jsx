import './TripleTiles.css';
import {Link} from 'react-router-dom';

function DualTiles({careerLeftTile, careerMiddleTile ,careerRightTile,pics })
{
    return(
        <div className="triple-cards">
          <div className="single-card">
              <img src={pics[0]}></img>
              <Link to="/course-categories/courses"  className='link-to-courses' state = {{  courseCategory : careerLeftTile}}>{careerLeftTile}</Link>
          </div>

          <div className="single-card"> 
              <img src={pics[1]}></img>
              <Link to="/course-categories/courses" className='link-to-courses' state = {{  courseCategory : careerLeftTile}}>{careerMiddleTile}</Link>
          </div>

          <div className="single-card" >
              <img src={pics[2]}></img>
              <Link to="/course-categories/courses" className='link-to-courses'  state = {{  courseCategory : careerLeftTile}}>{careerRightTile}</Link>
          </div>
    </div>

    )
}

export default DualTiles;