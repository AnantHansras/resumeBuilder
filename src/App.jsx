import './App.css'
import Login from './Pages/Login'
import Signup from './Pages/SignUp'
import ForgotPassword from './Pages/ForgotPassword'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import CreateResume from './Pages/CreateResume'
import Home from './Pages/Home'
import About from './Pages/About'
import Tut1 from './Pages/Tut1'
import Tut2 from './Pages/Tut2'
import FAQ from './Pages/FAQ'
import ContactUs from './Pages/ContactUs'
import ResumeExamples from './Pages/ResumeExamples'
import OTP from './Pages/OTP'
import UpdatePassword from './Pages/UpdatePassword'
import {Toaster} from 'react-hot-toast'
import Templates from './Pages/Templates'
import Resume from './Components/Resume'
import YourResume from './Pages/YourResume'


function App() {
  return (
    <div>
    <Toaster position="top-center" reverseOrder={false} />
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/otp' element={<OTP/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/update-password/:id' element={<UpdatePassword/>}/>
        
        <Route path='/' element={<Home/>}/>

        <Route path='/about' element={<About/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>

        <Route path='/tut1' element={<Tut1/>}/>
        <Route path='/tut2' element={<Tut2/>}/>
        
        <Route path='/create-resume' element={<CreateResume/>}/>
        <Route path='/templates' element={<Templates/>}/>
        <Route path='/example-resume' element={<ResumeExamples/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/your-resume' element={<YourResume/>}/>
      </Routes>
    </div>
  )
}


export default App