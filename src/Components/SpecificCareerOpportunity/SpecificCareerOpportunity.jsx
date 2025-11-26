import './SpecificCareerOpportunity.css'

function SpecificCareerOpportunity({career})
{
        return(
        <div id ="specific-career-opprtunity-container" className="specific-career-opprtunity-container">
            
            <div id ="specific-career-opprtunity-heading" className="specific-career-opprtunity-heading">

                <p >Career Opportunities in Accounting</p>
                <button>&#10006;</button>
            </div>
            
            <div id ="specific-career-opprtunity-list" className="specific-career-opprtunity-list">
                <section >
                    
                    <option>CPA</option>
                    <option>CA</option>
                    <option>CMA</option>
                    <option>CFA</option>
                    <option>ACCA</option>
                </section>
            <section id="specific-career-opprtunity-media" className="specific-career-opprtunity-media">
                <iframe 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </section>
            </div>
        </div>
    )
}

export default SpecificCareerOpportunity;