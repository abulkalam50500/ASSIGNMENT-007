import React from 'react';
import Hero from '../pages/hero/Hero';
import Counter from '../pages/counter/Counter';
import Friends from '../pages/friends/Friends';
import { Suspense } from 'react';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <Counter></Counter>
           
           <Suspense fallback={<div className="flex justify-center items-center h-40">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
  </div>}>
               <Friends></Friends>
           </Suspense>
           



        </div>
    );
};

export default Home;