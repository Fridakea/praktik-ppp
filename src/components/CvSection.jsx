import { education, educationYear, educationYearExtended, work, workYear, workYearExtended } from "../data/lists";
import { Timeline } from "./Timeline";

const timelineStyling = "flex flex-row gap-8";

export function CvSection() {

    return (
      <section className="flex flex-col gap-12 my-20">
        <div className="education">
            <h2 className="ml-[10%] sm:ml-[25%]">Uddannelse</h2>
            <Timeline leftList={window.innerWidth > 664 ? educationYearExtended : educationYear} rightList={education} />
        </div>

        <div className="work">
            <h2 className="ml-[12.5%] sm:ml-[27.5%]">Arbejde</h2>
            <Timeline leftList={window.innerWidth > 664 ? workYearExtended : workYear} rightList={work}/>
        </div>
      </section>
    );
  }