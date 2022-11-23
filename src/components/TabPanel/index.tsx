import React, { useState } from "react";
import { Experience, experiences } from "./experiences";
import ListItem from "./ListItem";
import SkillPill from "./SkillPill";

function TabPanel() {
  const [experienceSelected, setExperienceSelected] = useState<Experience>(
    experiences[0],
  );

  return (
    <div className="h-full lg:grid lg:h-3/5 lg:grid-cols-3 lg:grid-rows-1 xl:h-3/4">
      <div className="flex h-16 lg:block lg:h-auto">
        {experiences.map((experience) => {
          return (
            <ListItem
              title={experience.company}
              isSelected={experience === experienceSelected}
              onClick={() => setExperienceSelected(experience)}
            />
          );
        })}
      </div>

      <div className="lg:col-span-2 lg:grid lg:grid-rows-5">
        <div className="text center row-span-3 py-5 lg:py-0 lg:px-6 lg:pb-5">
          <h1 className="text-center text-2xl font-bold text-accent xl:text-3xl">
            {experienceSelected.company}
          </h1>
          <h2 className="mb-5 text-center text-sm font-medium text-text opacity-40 xl:text-base ">
            {experienceSelected.period}
          </h2>
          <p className="text-justify text-text xl:text-lg ">
            {experienceSelected.description}
          </p>
        </div>

        <div className="row-span-2 text-center">
          <h1 className="mb-5 text-center text-2xl font-bold text-accent xl:text-3xl">
            Skills
          </h1>

          <div className="grid grid-cols-2 place-content-center gap-2 lg:grid-cols-3 lg:gap-4 lg:px-6">
            {experienceSelected.skills.map((skill) => (
              <SkillPill name={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabPanel;
