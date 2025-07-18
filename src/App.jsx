import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/comman/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup" ; 
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/Dashboard/MyProfile";

function App() {
  return (
      <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>
          <Navbar />
          <Routes>
              <Route path="/"  element={<Home/>} />
              <Route path="/login"  element={<Login/>} />
              <Route path="/signup"  element={<Signup/>} />
              <Route path="/forgot-password" element={<ForgotPassword/>}/>
              <Route path="/update-password/:id" element={<UpdatePassword/>}/>
              <Route path="/about" element={<About />}/>

              <Route
              path="/verify-email"
              element={
                  <VerifyEmail />
              }
             />  

            <Route path="/contact"  element={<ContactPage/>} />   
            
            <Route  element={<Dashboard />}>

                <Route path="/dashboard/my-profile" element={<MyProfile />} />
    

            </Route>
            
 

          </Routes>

    
      </div>
  );
}

export default App;
