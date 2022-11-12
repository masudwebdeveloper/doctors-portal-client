import React from 'react';
import Banner from '../Pages/Banner/Banner';
import Contact from '../Pages/Contact/Contact';
import MakeAppointment from '../Pages/MakeAppointment/MakeAppointment';
import ServicesCards from '../Pages/Services/ServicesCards';
import Testimonal from '../Pages/Testimonal/Testimonal';

const Home = () => {
   return (
      <div className='mx-5'>
         <Banner></Banner>
         <ServicesCards></ServicesCards>
         <MakeAppointment></MakeAppointment>
         <Testimonal></Testimonal>
         <Contact></Contact>
      </div>
   );
};

export default Home;