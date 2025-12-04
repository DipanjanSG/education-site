import './PopUpExtraInfo.css';

export default function PopUpExtraInfo({extraInfo}) 
{
    return(

        <section className="pop-up">{extraInfo.heading} <br /><br/>{extraInfo.body}</section>
    );
}