import React from 'react';
import Banner from '../Pages/Banner/Banner';
import ServicesCards from '../Pages/Services/ServicesCards';

const Home = () => {
   return (
      <div className='mx-5'>
         <Banner></Banner>
         <ServicesCards></ServicesCards>
      </div>
   );
};

export default Home;