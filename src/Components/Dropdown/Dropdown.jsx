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
                <option value="CA">CA (Chartered Accountant)</option>
                <option value="CMS">CMA (Cost Management Accounting)</option>
                <option value="CS">CS (Company Secretary)</option>
            </select>
        </section>      
    );
}


export default Dropdown;