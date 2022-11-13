import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home/Home";
import Appointment from "../../components/Home/Pages/Appointment/Appointment/Appointment";
import Login from "../../components/Home/Pages/Shared/Login/Login";
import SignUp from "../../components/Home/Pages/Shared/SignUp/SignUp";
import Main from "../../layout/Main/Main";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/home',
            element: <Home></Home>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/signup',
            element: <SignUp></SignUp>
         },
         {
            path: '/appointment',
            element: <Appointment></Appointment>
         }
      ]
   }
])

export default router;