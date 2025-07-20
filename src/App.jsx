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
import Settings from "./components/core/Dashboard/Settings/index"
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart/index"
import { ACCOUNT_TYPE } from "./utils/constants";
import { useSelector } from "react-redux";

function App() {

    const {user} = useSelector((state) => state.profile);
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
                <Route path="/dashboard/settings" element={<Settings/>} />
                

                    {
                user?.accountType === ACCOUNT_TYPE.STUDENT && (
                    <>
                    <Route path="dashboard/cart" element={<Cart />} />
                    <Route path="dashboard/enrolled-courses" element={<EnrolledCourses/>} />
                    </>
                )
                }
    

            </Route>
            
 

          </Routes>

    
      </div>
  );
}

export default App;
