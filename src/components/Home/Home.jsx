import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import JobCategorys from '../JobCategorys/JobCategorys';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {

   return (
      <div>
         <HomeBanner />

         <JobCategorys />

         <FeaturedJobs />
      </div>
   );
};

export default Home;