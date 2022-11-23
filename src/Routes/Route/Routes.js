import { createBrowserRouter } from "react-router-dom";
import AddDoctors from "../../components/Dashboard/AddDoctors/AddDoctors";
import AllUsers from "../../components/Dashboard/AllUsers/AllUsers";
import ManageDoctors from "../../components/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../components/Dashboard/MyAppointment/MyAppointment";
import Payment from "../../components/Dashboard/Payment/Payment";
import Home from "../../components/Home/Home/Home";
import Appointment from "../../components/Home/Pages/Appointment/Appointment/Appointment";
import DisplayError from "../../components/Home/Pages/Shared/DisplayError/DisplayError";
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
      errorElement: <DisplayError></DisplayError>,
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
      errorElement: <DisplayError></DisplayError>,
      children: [
         {
            path: '/dashboard',
            element: <MyAppointment></MyAppointment>
         },
         {
            path: '/dashboard/allusers',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
         },
         {
            path: '/dashboard/adddoctors',
            element: <AdminRoute><AddDoctors></AddDoctors></AdminRoute>
         },
         {
            path: '/dashboard/managedoctors',
            element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
         },
         {
            path: '/dashboard/payment/:id',
            element: <AdminRoute><Payment></Payment></AdminRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
         },
      ]
         
   }
])

export default router;