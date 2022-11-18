import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../../components/Dashboard/AllUsers/AllUsers";
import MyAppointment from "../../components/Dashboard/MyAppointment/MyAppointment";
import Home from "../../components/Home/Home/Home";
import Appointment from "../../components/Home/Pages/Appointment/Appointment/Appointment";
import Login from "../../components/Home/Pages/Shared/Login/Login";
import SignUp from "../../components/Home/Pages/Shared/SignUp/SignUp";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import Main from "../../layout/Main/Main";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
   },
   {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children: [
         {
            path: '/dashboard',
            element: <MyAppointment></MyAppointment>
         },
         {
            path: '/dashboard/allusers',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
         }
      ]
         
   }
])

export default router;