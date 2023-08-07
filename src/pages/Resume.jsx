import Header from "../components/Header";
import Footer from "../components/Footer";
// import resume from "../../public/sampleResume.doc"

export default function Resume() {
  return (
    <>
      <Header />
      <div>
        <h1>Resume Page</h1>
        {/* <p>Download my resume <a href={resume} download='resume'>here</a> to read more!</p> */}
        <p>
          other skills add here:
          <ul>
            <li>
              skill 1
            </li>
            <li>
              skill 2
            </li>            
            <li>
              skill 3
            </li>            
            <li>
              skill 4
            </li>
          </ul>
        </p>
      </div>
      <Footer />
    </>
  );
}
