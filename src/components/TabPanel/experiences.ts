export interface Experience {
  company: string;
  description: string;
  period?: string;
  skills: string[];
  linkedin: {
    at: string;
    link: string;
  };
}

export const experiences = [
  {
    company: "F4A",
    linkedin: {
      at: "@foodforall",
      link: "https://www.linkedin.com/company/food-4-all-dev/about/",
    },
    description:
      "Here at Food for All - F4A, I develop solutions for all the production chains of the agronomical field, covering critical processes like pest control and maximum residue limit, seeking to transform the field into a more effective and productive one for all its contributors.",
    period: "09/2022 - current",
    skills: [
      "ReactJS",
      "React Native",
      "Typescript",
      "TailwindCSS",
      "Styled Components",
      "Styled System",
    ],
  },
  {
    company: "Autonomous",
    linkedin: {
      at: "@me",
      link: "https://www.linkedin.com/pedroolavo",
    },
    description:
      "As an autonomous worker I have created many personal websites and minor web apps to fulfil the specific needs of my clients, like some small ERPs.",
    period: "11/2021 - 09/2022",
    skills: ["ReactJS", "Styled Components", "Firebase"],
  },
  {
    company: "F4A",
    linkedin: {
      at: "@foodforall",
      link: "https://www.linkedin.com/company/food-4-all-dev/about/",
    },
    description:
      "Here at Food for All - F4A, I develop solutions for all the production chains of the agronomical field, covering critical processes like pest control and maximum residue limit, seeking to transform the field into a more effective and productive one for all its contributors.",
    period: "09/2022 - current",
    skills: [
      "ReactJS",
      "React Native",
      "Typescript",
      "TailwindCSS",
      "Styled Components",
      "Styled System",
    ],
  },
];
