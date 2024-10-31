import { HeroSection } from './HeroSection.jsx';
import { AboutMe } from './AboutMe.jsx';
import { CvSection } from './CvSection.jsx';
import {Footer} from './Footer.jsx';
import { DarkmodeToggle } from './DarkmodeToggle.jsx';
import { useEffect, useState } from 'react';

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem('dark-mode');
    setIsDarkMode(value != null && value === "true");
  }, [])

  return (
    <div id='app' className={isDarkMode ? 'dark-mode' : ''}>
      <main className="App max-w-[1200px] mx-auto px-4">
        <DarkmodeToggle />
        <HeroSection />
        <AboutMe />
        <CvSection />
      </main>

      <Footer />
    </div>
  );
}