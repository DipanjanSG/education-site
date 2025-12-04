import './TripleTextCover.css';
import financeStudentBlack from "../../../assets/finance-student-black.jpg";

export default function TripleTextCover({coverText})
{

    return(


        <section className='triple-text-cover'>
            {/* <img src={financeStudentBlack} className=''></img>
            <img src={financeStudentBlack} className=''></img>
            <img src={financeStudentBlack} className=''></img> */}
            <section className="triple-text-cover-text">{coverText[0]}</section>
            <section className="triple-text-cover-text">{coverText[1]}</section>
            <section className="triple-text-cover-text">{coverText[2]}</section>
        </section>
    );

}