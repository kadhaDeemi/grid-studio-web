import Hero from '../components/Hero';
import WebPlans from '../components/WebPlans';
import CreativeStudio from '../components/CreativeStudio';
import Portafolio from '../components/Portafolio';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <WebPlans />
      <CreativeStudio />
      <Portafolio />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;