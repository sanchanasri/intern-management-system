import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import StudentAttedance from './components/StudentAttedance';
import Students from './components/Students';
import AddOther from './components/AddOther';
import Reports from './components/Reports';
import QrReader from './components/QrScan';
import StudentDetail from './components/ScanResults';
import ManageUsers from './components/ManageUsers';
import Courses from './components/Courses';
import Trainers from './components/Trainers';
import Colleges from './components/Colleges';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Log_in from './components/LogIn';
import Sign_up from './components/SignUp';
import Internships from './components/Internships'
import AddUser from './components/AddUser';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
   <div>
    <div className="app-container">
      <div className="content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add_Student" element={<AddStudent/>}/>
        <Route path="/student_attendance" element={<StudentAttedance/>}/>
        <Route path="/add_other" element={<AddOther />} /> 
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/qr_scanner" element={<QrReader/>}/>
        <Route path="/student_detail" element={<StudentDetail/>}/>
        <Route path="/manage" element={<ManageUsers/>}/>
        <Route path="/manage/students" element={<Students/>}/>
        <Route path="/manage/courses" element={<Courses/>}/>
        <Route path="/manage/trainers" element={<Trainers/>}/>
        <Route path="/manage/colleges" element={<Colleges/>}/>
        <Route path="/manage/internships" element={<Internships/>}/>
        <Route path="/sign_up" element={<Sign_up/>}/>
        <Route path="/log_in" element={<Log_in/>}/>
        <Route path="/add_user" element={<AddUser/>}/>
      </Routes>
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
