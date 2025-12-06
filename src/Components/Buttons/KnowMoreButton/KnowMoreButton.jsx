import './KnowMoreButton.css'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import PopUpExtraInfo from '../../PopUps/PopUpExtraInfo/PopUpExtraInfo';

export default function KnowMoreButton({onClickLink, marginLeft})
{

    const navigate = useNavigate();
   
    return(
            <section className='know-more-container' style={{ marginLeft : marginLeft}}>
                <span>Know more</span> <span className="know-more-arrow" onClick={()=> navigate(onClickLink)}>&#x279C;</span>
            </section>
        );
}