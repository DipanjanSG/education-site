import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import CareerOppAndCourseCategories from './Pages/CareerOppAndCourseCategories/CareerOppAndCourseCategories';
import CategoryCourseList from './Pages/CategoryCourseList/CategoryCourseList';
import Footer from './Components/Footer/Footer';
import Faculty from './Pages/FacultyList/FacultyList';
import EarnWhileLearning from './Pages/EarnWhileLearning/EarnWhileLearning';
import UniqueTeaching from './Pages/UniqueTeaching/UniqueTeaching';
import SuccessStory from './Pages/SuccessStory/SuccessStory';
import OnlineLibrary from './Pages/OnlineLibrary/OnlineLibrary';
import ContactUs from './Pages/ContactUs/ContactUs';
import ChatWidget from './Components/ChatWidget/ChatWidget';

function App() {

  return (

    <Router>
      <div>
      <Routes>
         <Route  path = "/" element ={<HomePage/>} />
         <Route  path = "/course-categories" element ={<CareerOppAndCourseCategories/>} />
         <Route  path = "/course-categories/courses" element ={<CategoryCourseList/>} />
         <Route  path = "/faculty" element ={<Faculty/>} />
         <Route  path = "/earn-while-learning" element ={<EarnWhileLearning/>} />
         <Route  path = "/unique-teaching" element ={<UniqueTeaching/>} />
         <Route  path = "/success-story" element ={<SuccessStory/>} />
         <Route  path = "/online-library" element ={<OnlineLibrary/>} />
         <Route  path = "/contact-us" element ={<ContactUs/>} />
      </Routes>
      <ChatWidget/>
      <Footer/>
      </div>
    </Router>
    

     
  )
}

export default App
