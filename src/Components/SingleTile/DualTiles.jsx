import './DualTiles.css';

function DualTiles({career})
{
    return(
        <div id ="dual-tiles" className="single-horizontal-tile-container">

            <span id="tile_left" className="single-horizontal-tile"><span>{career}</span></span>
        </div>
    )
}

export default DualTiles;