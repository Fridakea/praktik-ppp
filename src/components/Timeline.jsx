const timelineStyling = "flex flex-row gap-8";

export function Timeline({leftList, rightList}) {



    return (
            <div className={timelineStyling}>
                <div className="flex-1 flex flex-col text-right justify-between py-4">
                {
                    leftList?.map((nextDataElement) => <h5 className="first:mb-4 sm:first:mb-0">{nextDataElement}</h5>)
                }
                </div>
                <div className="vertical-line"></div>
                <div className="flex-[3] flex flex-col justify-between gap-6 py-4 sm:flex-[2]">
                {
                    rightList?.map((nextDataElement) => <h5 className="last:text-action">{nextDataElement}</h5>)
                }
                </div>
            </div>
    );
  }