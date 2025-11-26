import './DualTiles.css';

function DualTiles({careerLeftTile, careerRightTile,pics })
{
    return(
        <div id ="dual-tiles" className="dual-tiles">
            <span id="tile_left" className="single-tile" style={{
          backgroundImage: `linear-gradient(to top,
            rgba(255, 255, 255, 0.9) 0%,  
            rgba(255, 255, 255, 0.55) 55%,
            rgba(255, 255, 255, 0.0) 100%), 
            url(${pics[0]})`,
        }}><span>{careerLeftTile}</span></span>
            <span id="tile_right" className="single-tile" style={{
          backgroundImage: `linear-gradient(to top,
            rgba(255, 255, 255, 0.9) 0%,  
            rgba(255, 255, 255, 0.55) 55%,
            rgba(255, 255, 255, 0.0) 100%), 
            url(${pics[1]})`,
        }}><span>{careerRightTile}</span></span>
        </div>
    )
}

export default DualTiles;