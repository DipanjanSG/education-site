import './OnlyTextCover.css';
import financeStudentBlack from "../../../assets/finance-student-black.jpg";

export default function OnlyTextCover({coverText})
{

    return(


        <section className='only-text-cover'>
            <img src={financeStudentBlack} className=''></img>
            <section className="only-text-cover-text">{coverText}</section>
        </section>
    );

}