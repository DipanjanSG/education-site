import "./EarnWhileLearning.css";
import { motion } from "framer-motion";
import VertialSectionWithPic from '../../Components/VertialSectionWithPic/VertialSectionWithPic';
import earnWhileLearning from '../../assets/earn-while-learning.png';


export default function EarnWhileLearning() {


  const items = [
  { title: "You Enroll", description: "You pay the course fees", side: "left" },
  { title: "Investement Starts", description: "30K is invested in capital markets", side: "right" },
  { title: "Periodic returns", description: "Periodic returns are given to your parents", side: "left" },
  { title: "You Graduate", description: "You get a Job", side: "right" }
];

   return (
    <div className='earn-learn-flex'>
      <VertialSectionWithPic picOnLeft={true} pic={earnWhileLearning} heading={"Make money Passively"} text={"Students today hardly have the time to sit down and read a paperback novel. They read everything on their laptop or smartphone or any internet-enabled device. This is because everything is available online at the tap of a few buttons."}/>
      <div className="timeline-container">
        <div className="timeline-line" />

        {items.map((item, i) => (

          <motion.div
            key={i}
            className="timeline-entry"
            // initial={{ opacity: 0, x: -20 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.4, delay: i * 0.1 }}
            // viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .65, ease: "easeOut", delay: i * 0.15 }}
            viewport={{ once: false, amount: 0.4 }} 
          >
            <div className="dot" />
            <div className="entry-content">
              <h2>{item.title}</h2>
              <section className='sub-text'>{item.description}</section>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
