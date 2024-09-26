export function AboutMe() {

    return (
      <div>
        <div>
            <h2 className="text-center">Om mig</h2>
            <hr />
            <div className="flex flex-col sm:flex-row sm:gap-8">
                <p className="mb-8">Jeg hedder Frida, jeg er 23 år gammel og bor i Høje Taastrup med min kæreste Mark og hund Mokka.<br /><br />
                Jeg har altid godt kunne lide at være kreativ og har haft en interesse for at tage og redigere billeder. Dette var springbrættet for at jeg startede på multimediedesign uddannelsen.</p>
                <p>Undervejs i uddannelsen har jeg fundet ud at af jeg er super interesseret og fasineret af at kode og det er noget jeg ønsker at forbedre mig yderligere indenfor.</p>
            </div>
        </div>

        <div className="code">
            <h3 className="text-center">Kode færdigheder</h3>
            <div className="tags">
                <h6>HTML</h6>
                <h6>CSS</h6>
                <h6>JavaScript</h6>
                <h6>Astro</h6> 
                <h6>React</h6>
                <h6>Next.js</h6>
                <h6>Tailwind CSS</h6>
            </div>
        </div>
      </div>
    );
  }