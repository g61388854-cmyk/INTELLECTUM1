import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StartSection from './components/StartSection';
import Prompts from './components/Prompts';
import FeaturesChess from './components/FeaturesChess';
import Stats from './components/Stats';
import CtaFooter from './components/CtaFooter';

export default function App() {
  return (
    <div className="bg-black">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="bg-black">
          <StartSection />
          <Prompts />
          <FeaturesChess />
          <Stats />
          <CtaFooter />
        </div>
      </div>
    </div>
  );
}
