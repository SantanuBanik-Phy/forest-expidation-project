import React from 'react';
import Banner from '../components/Banner.jsx';
import { useLoaderData } from 'react-router-dom';
import AdventureCard from '../components/AdventureCard.jsx';





const Home = () => {
    const adventures = useLoaderData();
    return (
        <div>
         <Banner></Banner>
         <section className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 mt-8">Adventure Experiences</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {adventures.map((adventure) => (
            <AdventureCard key={adventure.id} adventure={adventure} />
          ))}
        </div>
      </section>

        </div>
    );
};

export default Home;