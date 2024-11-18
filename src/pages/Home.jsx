import React from 'react';
import Banner from '../components/Banner.jsx';

import AdventureCard from '../components/AdventureCard.jsx';
import Feedback from '../components/FeedBack.jsx';
import SpecialDeals from '../components/SepcialDeals.jsx';
import { useLoaderData } from 'react-router-dom';
import 'animate.css';





const Home = () => {
    const adventures = useLoaderData();
    const {adventureData, feedBackData, specialDealsData} = adventures
    return (
        <div>
         <Banner></Banner>
         <section className="w-11/12 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 mt-12 animate__animated  animate__fadeInRightBig">Adventure Experiences</h2>
        <div className="grid md:grid-cols-3 gap-6  mb-8">
          {adventureData.map((adventure) => (
            <AdventureCard key={adventure.id} adventure={adventure} />
          ))}
        </div>
      </section>
      <section>
      <Feedback feedBackData={feedBackData}></Feedback>
        
      </section>
      <section>
      <SpecialDeals specialDealsData={specialDealsData}></SpecialDeals>
      </section>
     

        </div>
    );
};

export default Home;