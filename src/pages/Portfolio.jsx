import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";
import recipePatch from "../../public/recipe-patch.png";
import challengeFitness from "../../public/challenge-fitness.png";
import readmeGen from '../../public/README-generator.png'
import weatherApp from '../../public/weather-app.png'
import projectStyles from '../css/project.module.css'


const projectData = [
  {
    title: "Recipe Patch",
    technology: "JavaScript and Third-Party APIs",
    githubLink: "https://github.com/anicrob/recipe-patch-andrea",
    deployment: "https://anicrob.github.io/recipe-patch-andrea/",
    img: recipePatch,
  },
  {
    title: "Fitness App",
    technology: "MySQL & Handlebars",
    githubLink:
      "https://www.desiringgod.org/articles/letter-to-a-friend-concerning-the-so-called-lordship-salvation",
    deployment: "https://challenge-fitness-9cf387429034.herokuapp.com/login",
    img: challengeFitness,
  },
  {
    title: "README Generator",
    technology: "Inquirer and Node.js",
    githubLink: "https://github.com/anicrob/README_generator",
    deployment: "https://watch.screencastify.com/v/HrcOwgfszPWBDXuUE039",
    img: readmeGen,
  },
  {
    title: "Weather App",
    technology: "Third-Party APIs and JavaScript",
    githubLink:
      "https://github.com/anicrob/weather-app-6",
      deployment: 'https://anicrob.github.io/weather-app-6/',
    img: weatherApp,
  },
];

export default function Portfolio() {
  return (
    <>
      <Header />
      <h3 className={projectStyles.title}>My Projects</h3>
      <div className={projectStyles.container}>
      {projectData.map(
        ({ title, technology, githubLink, deployment, img }, i) => (
          <Project
            Title={title}
            Technology={technology}
            Link={githubLink}
            Image={img}
            Deploy={deployment}
            Key={i}
          />
        )
      )}
      </div>
      <Footer />
    </>
  );
}
