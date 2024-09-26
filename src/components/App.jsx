import {Header} from './Header.jsx';
import { HeroSection } from './HeroSection.jsx';
import { AboutMe } from './AboutMe.jsx';

export function App() {

  return (
    <main className="App max-w-[1150px] mx-auto px-4">
      <Header />
      <HeroSection />
      <AboutMe />
    </main>
  );
}