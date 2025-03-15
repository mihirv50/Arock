import React from "react";
import PlayIcon from "../Icons/PlayIcon";

const SubHeading = () => {
  return (
    <div className="uppercase flex items-center justify-between">
      <div className="flex items-center justify-center gap-3">
        <div>
          <PlayIcon />
        </div>
        <div>
          <h1 className="text-6xl">
            Play
            <br /> the film
          </h1>
        </div>
      </div>
      <div className="flex items-center text-6xl justify-between gap-24">
        <h1>
          Creator <br />
          curator
        </h1>
        <h1>
          new york <br />
          los angeles
        </h1>
      </div>
    </div>
  );
};

export default SubHeading;
