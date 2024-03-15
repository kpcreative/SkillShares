import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="bg-white h-screen flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="container mx-auto px-4">
        <section className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h2
                className="text-5xl font-bold"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Upskilling Made <span className="text-red-900">{`<EASY>`}</span>
              </motion.h2>
              <motion.p
                className="mt-4 text-gray-600  font-medium"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
               Where learning meets community in an innovative platform designed to facilitate skill sharing among individuals. Whether you're an expert in a particular field or a novice eager to learn, ProjectSkillShares is your go-to destination for connecting with others who share your passion for growth and knowledge exchange.
              </motion.p>
              <motion.p
                className="mt-2 text-gray-600"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                What are we waiting for? Let's push Start!

               

              </motion.p>

              <button className="mt-5 bg-transparent hover:bg-black text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-800 hover:border-transparent rounded transition duration-300 transform hover:scale-105 ">
                  Start Now
                </button>

             
        
            </div>
            <motion.div

              className="flex justify-center w-[120%]"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <img
                alt="Upskilling Images"
                className="rounded-lg h-full w-full object-cover"
                src="../assests/land.png"
              />
            </motion.div>
          </div>
        </section>
        <section className="py-8">
        
        </section>
      </main>
     
    </motion.div>
  );
};

export default Home;