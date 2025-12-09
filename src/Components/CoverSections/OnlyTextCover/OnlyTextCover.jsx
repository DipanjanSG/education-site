import './OnlyTextCover.css';
import financeStudentBlack from "../../../assets/finance-student-black.jpg";

export default function OnlyTextCover({coverText,coverPic})
{

    return(


        <section className='only-text-cover'>
            <img src={coverPic} className=''></img>
            <section className="only-text-cover-text">{coverText}</section>
        </section>
    );

}