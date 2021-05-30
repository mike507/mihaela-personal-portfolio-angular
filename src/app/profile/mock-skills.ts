/* import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
]; */


import { Skill } from './skill';

export const SKILLS: Skill[] = [
  { type: "Langages de programmation", list: [
    "JavaScript (ES6+)",
    "Node.js",
    "HTML5",
    "CSS3",
    "Python",
    "C/C++/C++11"
    ] },
    { type: "IDE et Tools :", list: [
      "Visual Studio Code",
      "PyCharm",
      "Git/GitHub",
      "Microsoft Visual Studio",
      "Postman",
      "Oracle SQL Developer",
      "Jira"
    ]},
    { type: "Framework :", list:["React",
    "Express",
    "Angular 9"
    ]},
    {
      type: "Systèmes d'exploitation :", list:["Microsoft Windows 10",
      "Linux /Ubuntu",
      "MacOS"
    ]},
    {
      type:"Cloud computing :", list:["Amazon Web Services (AWS)"
    ]},
    {
      type:"Méthodologies  :", list:["Agile@Scale"
    ]},
    {
      type: "Bases de données :", list:["SQL : Oracle, Oracle PL/SQL, MySQL, PostgreSQL",
      "NoSQL: MongoDB"
    ]}
  ];
