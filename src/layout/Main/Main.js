import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Home/Pages/Shared/Footer/Footer';
import Navbar from '../../components/Home/Pages/Shared/Navbar/Navbar';

const Main = () => {
   return (
      <div>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Main;