import { Experience } from './experience';

export const EXPERIENCES: Experience[] = [
  {
    period: "2021",
    societe: "Bien'ici",
    job: "Développeur fullstack",
    description:
      `
    Développeur Web fullstack sur le site Web de Bien'ici
    Réalisation des nouvelles fonctionnalités
    Vuejs, MongoDB, Javascript, NodeJs, Gitlab
    Tests fonctionnels et unitaires: Nightwatch, Mocha, Chai
    ` },

  {
    period: "2020 ",
    societe: "Indépendant",
    job: "Développeur fullstack",
    description:
      `
    Développement full-stack d'une site Web: AlbumPhoto. Visualisation et mise à jour d'une collection des photos (opérations CRUD).
    Node.js, Express, Mongoose, MongoDB, React, Bootstrap4, HTML5, CSS3
    Autoformation en ligne sur JavaScript, React, Node.js.
    Lien GitHub: https://github.com/mike507/card-javascript-fullstack-app
    ` },

  {
    period: "2020 ",
    societe: "Ausy",
    job: "Ingénieur consultant",
    description:
      `Dans le cadre du projet de recherche et développement de traitement automatique de langues, j'ai développé de nouvelles fonctionnalités et j'ai corrigé des anomalies. J'ai travaillé avec Java, JavaScript, Angular, Spring Boot, API Google Custom Search.
    Missions / réalisations :
    Conversion d’un CV du candidat du format PDF en format TXT (avec ApachePDFBox, en Java)
    Web Scraping avec l’API Google Custom Search (en Java et Javascript)
    Environnement :
    Langages : Java, JavaScript, PostgreSQL
    Outils : Microsoft Visual Source Code, Eclipse
    Framework : Angular, Spring Boot
    Systèmes d’exploitation : Microsoft Windows 10
    Méthodes : Agile SCRUM
    `},

  {
    period: "2018 à 2020 ",
    societe: "Société Générale Securities Services (Consultant Ausy)",
    job: "Ingénieur consultant",
    description:
      `Dans le cadre du projet NCIS (New Custody Information System Program) de l'entité SGSS (Société Générale Securities Services) de la Société Générale, je suis intervenu en tant que développeur C++/SQL au sein de l'équipe SIB/MIB (Settlement Instructions Book/Miscellaneous Instructions Book).
      Missions / réalisations :
      Développement du module NCIS : MIB - Carnet d’opérations divers. Le module comprend :
      Tableau de bord - UI
      Fonction de recherche sur les instructions
      Gestion des typologies des remises (remises de tiers, virements à tiers, virements internes, changement de formes, …)
      Ateliers de formation interne sur Test Driven Development et Behaviour Driven Development
      Environnement : C++, Oracle PL/SQL
      Méthodes : Agile@Scale
      `
  }
];
