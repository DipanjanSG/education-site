import './Dropdown.css';
import {SELECT_COURSES} from '../../constants/commonConstants';

function Dropdown({selectCourseHandler})
{


    function handleSelect(event)
    {
        console.log("added code");
        selectCourseHandler(event.target.value);
    }

    return ( 
       <section className="course-selection-container" onClick={()=> { document.querySelector(".course-selection-dropdown").click();}}>
            <select className="course-selection-dropdown" onChange={handleSelect}>
                <option>{SELECT_COURSES}</option>
                <option value="694001ad840eccd96f5427ae">CA (Chartered Accountant)</option>
                <option value="69429e57663c9c9500f435af">CMA (Cost Management Accounting)</option>
                <option value="69429e77663c9c9500f435b0">CS (Company Secretary)</option>
            </select>
        </section>      
    );
}


export default Dropdown;