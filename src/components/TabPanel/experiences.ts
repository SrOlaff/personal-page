export interface Experience {
  company: string;
  description: string;
  period?: string;
  skills: string[];
}

export const experiences = [
  {
    company: "F4A",
    description: `
      Aqui na Food for All - F4A, desenvolvo soluções para toda as cadeia produtiva do ramo
      agrícola, abrangendo processos críticos como controle de pragas e limite máximo de resíduos,
      buscando transformar o campo em uma área mais eficaz e produtiva para todos os seus
      colaboradores.

      Com esse objetivo, atuo desenvolvendo aplicativos Android e iOS (em React Native) e sistemas
      Backoffice (em ReactJS) que servem como fonte de alimentação para tais aplicações.
    `,
    period: "09/2022 - atualmente",
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
    company: "Autônomo",
    description: `Como trabalhador autônomo, criei muitos sites pessoais e pequenos aplicativos web, que
      atendiam às necessidades específicas dos meus clientes, tais quais alguns pequenos ERPs.`,
    period: "11/2021 - 09/2022",
    skills: ["ReactJS", "Styled Components", "Firebase"],
  },
];
