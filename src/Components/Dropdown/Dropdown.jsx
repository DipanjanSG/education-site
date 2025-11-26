


function Dropdown({selectCourseHandler})
{


    function handleSelect(event)
    {
        selectCourseHandler(event.target.getAttribute('data-value'));
    }

    return ( <div className="dropdown">
                <button
                    className="btn btn-dark dropdown-toggle w-100"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    Select Course
                </button>
    
             <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" onClick={handleSelect}>
                <li><a className="dropdown-item" data-value="CA">CA (Chartered Accountant)</a></li>
                <li><a className="dropdown-item"  data-value="CMA">CMA (Cost Management Accounting)</a></li>
                <li><a className="dropdown-item" data-value="CS">CS (Company Secretary)</a></li>
             </ul>
        </div>);
}


export default Dropdown;