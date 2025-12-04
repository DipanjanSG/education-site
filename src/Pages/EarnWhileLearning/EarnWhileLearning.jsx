import './EarnWhileLearning.css'
import {motion} from "framer-motion";
import earnWhileLearningCOverPic from "../../assets/earn-while-learning-cover.png";

export default function EarnWhileLearning()
{

    const timeLineItems = [
    {
        title: "You Enroll in our course",
        description: "Learn the core concepts and build confidence.",
        side: "left",
        color: "#c32148"
    },
    {
        title: "30K taken from your fees\n as investment amount",
        description: "Start applying concepts through practice.",
        side: "right",
        color: "#222"
    },
    {
        title: "30K will be invested",
        description: "Work on real-world projects and team workflows.",
        side: "left",
        color: "#6A1B9A"
    },
    {
        title: "Course ends you get back\nmultiplied amount",
        description: "Become industry-ready with advanced capabilities.",
        side: "right",
        color: "#007BFF"
    }
    ];


    return(
    
        <div>
            <div id="other-cover-heading" >
                <h1> Grow your wealth while learning</h1>
            </div>

            <div id="cover-image-black-overlay">
                <div id="image-finance-student" class="homepage-img-container">
                    <img src={earnWhileLearningCOverPic}/>
                </div>
            </div>
        

            <div className="timeline-wrapper">
         {
                timeLineItems.map((item,index) => 
                    {
                        return(
                        <motion.div 
                         key={index}
                        className={`timeline-item ${item.side}`}
                        // initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}>

                            <h3>{item.title}</h3>

                        </motion.div>
                        )
                    })

         }
         </div>

        

            </div>

    );


}

