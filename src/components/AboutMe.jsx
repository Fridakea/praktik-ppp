import { codetags, programtags, adobetags } from "../data/lists";

const tagContainerStyle = "my-4 mx-[-1rem] px-4 py-8 bg-secondary sm:mx-0";
const tagsStyle = "max-w-[500px] flex flex-row justify-center flex-wrap gap-x-8";
const tagHoverStyling = "hover:scale-110 ease-in-out duration-200 hover:bg-text/75"

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

        <div className="my-8 sm:my-4 flex flex-col sm:flex-row items-center sm:gap-16">
          <div className={`${tagContainerStyle}`}>
              <h3 className="text-center">Kode færdigheder</h3>
              <div className={tagsStyle}>
                {
                  codetags.map((nextCodetag) => <h6 className={tagHoverStyling} key={nextCodetag}>{nextCodetag}</h6>)
                }
              </div>
          </div>

          <div className={tagContainerStyle}>
              <h3 className="text-center">Programmer</h3>
              <div className={tagsStyle}>
                {
                  programtags.map((nextProgramtag) => <h6 className={tagHoverStyling} key={nextProgramtag}>{nextProgramtag}</h6>)
                }
              </div>

              <h3 className="text-center">Adobe</h3>
              <div className={tagsStyle}>
                {
                  adobetags.map((nextAdobetag) => <h6 className={tagHoverStyling} key={nextAdobetag}>{nextAdobetag}</h6>)
                }
              </div>
          </div>
        </div>

      </div>
    );
  }