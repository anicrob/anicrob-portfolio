import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Resume() {
  return (
    <>
      <Header />
      <div className='mx-3 mt-3'>
        <h1>Resume & Skills</h1>
        <p>Download my resume <a href='resume.pdf' download='resume.pdf'>here</a> to read more!</p>
        <p>All technologies:</p>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Databases: MongoDB, MySQL</li>
          <li>Mongoose and Sequelize</li>
          <li>React</li>
          <li>Authentication: Sessions and JWTs</li>
          <li>Jest</li>
          <li>Atlassian: Jira, Confluence, JSM, etc.</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
