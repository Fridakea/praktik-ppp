import { HeroSection } from './HeroSection.jsx';
import { AboutMe } from './AboutMe.jsx';
import { CvSection } from './CvSection.jsx';
import {Footer} from './Footer.jsx';
import { DarkmodeToggle } from './DarkmodeToggle.jsx';

export function App() {

  return (
    <div id='app' className='dark-mode'>
      <main className="App max-w-[1150px] mx-auto px-4">
        <DarkmodeToggle />
        <HeroSection />
        <AboutMe />
        <CvSection />
      </main>

      <Footer />
    </div>
  );
}