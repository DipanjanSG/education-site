import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import CareerOppAndCourseCategories from './Pages/CareerOppAndCourseCategories/CareerOppAndCourseCategories';
import CategoryCourseList from './Pages/CategoryCourseList/CategoryCourseList';
import Footer from './Components/Footer/Footer';
import Faculty from './Pages/FacultyList/FacultyList';


function App() {

  return (

    <Router>
      <div>
      <Routes>
         <Route  path = "/" element ={<HomePage/>} />
         <Route  path = "/course-categories" element ={<CareerOppAndCourseCategories/>} />
         <Route  path = "/course-categories/courses" element ={<CategoryCourseList/>} />
         <Route  path = "/faculty" element ={<Faculty/>} />
      </Routes>
      <Footer/>
      </div>
    </Router>
    

     
  )
}

export default App
