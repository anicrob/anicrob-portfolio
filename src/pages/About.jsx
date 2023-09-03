import Header from "../components/Header";
import Footer from "../components/Footer";
import advatar from "/advatar.png";

const style = {
  paragraphs: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  heading: {
    marginTop: 15,
  },
  advatar: {
    width: 150,
    height: 170,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column-reverse',

  }
}
export default function About() {
  return (
    <>
      <Header />
      <div className='mx-3'>
        <div style={style.header}>        
        <h1 style={style.heading}>About Me</h1>
        <a href="https://github.com/anicrob"><img src={advatar} style={style.advatar} alt='my advatar'/></a>
        </div>

        <p style={style.paragraphs}>
          Life can be funny sometimes. I went to school for business admin with
          a concentration in project management, but my first job was in IT. I
          knew nothing about being a Salesforce Admin, but they hired me and
          allowed me to learn little by little how to admin the system. With my
          project management background, I was also familiar with Jira Software,
          so I ended up becoming an admin for that afterwards.
        </p>
        <p style={style.paragraphs}> 
          The company opened a Project Specialist position, which I thought was
          my dream job, but after being in the position for a few months, I
          missed the Jira technical stuff so much, I left
          the company to become an Atlassian (Jira) Business consultant where I
          could mix my technical (Jira admin) and business (project management) skills. However, it is hard to
          recommend certain soutions that require examining code or scripts
          without knowing how to code.
        </p>
        <p style={style.paragraphs}>
          After finishing the UNC Full Stack Web Development Bootcamp, I am now
          prepared and have been using my coding skills to create apps, create and debug
          scripts, and be a better consultant.
        </p>
      </div>
      <Footer />
    </>
  );
}
