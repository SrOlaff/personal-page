/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Experience, experiences } from "./experiences";
import ListItem from "./ListItem";

function TabPanel() {
  const [experienceSelected, setExperienceSelected] = useState<Experience>(
    experiences[0],
  );

  return (
    <div className="flex flex-1 flex-col lg:flex-row ">
      <ul className="h-14 flex lg:flex-col lg:w-1/3 lg:h-full">
        {experiences.map((item) => (
          <ListItem
            title={item.company}
            isSelected={item === experienceSelected}
            onClick={() => setExperienceSelected(item)}
          />
        ))}
      </ul>

      <div className="flex flex-col py-5 lg:px-8 ">
        <h1 className="text-2xl font-bold text-center text-accent">
          {experienceSelected.company}
        </h1>

        <h2 className="text-sm font-medium text-center mb-5 text-text opacity-40">
          {experienceSelected.period}
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum saepe
          reprehenderit, magni quibusdam exercitationem ea culpa reiciendis iure
          veniam? Corrupti nemo consectetur laborum voluptates dicta et illum
          perspiciatis facere temporibus.
        </p>
      </div>
    </div>
  );
}

export default TabPanel;
