import {Header} from './Header.jsx';
import { HeroSection } from './HeroSection.jsx';
import { AboutMe } from './AboutMe.jsx';
import { CvSection } from './CvSection.jsx';
import {Footer} from './Footer.jsx';

export function App() {

  return (
    <div>
      <main className="App max-w-[1150px] mx-auto px-4">
        <Header />
        <HeroSection />
        <AboutMe />
        <CvSection />
      </main>

      <Footer />
    </div>
  );
}