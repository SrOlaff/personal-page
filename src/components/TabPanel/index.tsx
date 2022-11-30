import React, { useState } from "react";
import { Experience, experiences } from "./experiences";
import ListItem from "./ListItem";
import SkillPill from "./SkillPill";

function TabPanel() {
  const [experienceSelected, setExperienceSelected] = useState<Experience>(
    experiences[0],
  );

  return (
    <div className="mb-2 flex flex-col xl:grid xl:flex-1 xl:grid-cols-4 xl:grid-rows-1">
      <div className="ml-5 flex overflow-scroll rounded-sm pr-5 text-text xl:col-end-2 xl:ml-5 xl:h-3/4 xl:flex-col xl:border-r xl:border-accent xl:pr-0 ">
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

      <div className="xl:col-span-3 xl:flex xl:max-h-full xl:flex-col">
        <div className="py-5 px-5 xl:flex-1 xl:overflow-y-scroll xl:px-8">
          <div className="mb-2 space-y-2 text-center">
            <a
              className="text-center text-lg font-bold text-accent underline xl:text-2xl 2xl:text-4xl"
              target="_blank"
              rel="noreferrer"
              href={experienceSelected.linkedin.link}
            >
              {experienceSelected.linkedin.at}
            </a>

            <p className="text-sm text-neutral-400 xl:text-lg 2xl:text-2xl">
              {experienceSelected.period}
            </p>
          </div>

          <p className="text-justify text-text xl:text-lg 2xl:text-2xl">
            {experienceSelected.description}
          </p>
        </div>

        <div className="py-5 px-5 xl:flex-1 xl:px-8">
          <h1 className="mb-4 text-center text-lg font-bold text-accent xl:text-2xl 2xl:text-4xl">
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
