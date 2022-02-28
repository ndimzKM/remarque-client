import { Link } from "react-router-dom";
import mockup from "../assets/mockup.png";
import { GrDocumentNotes } from "react-icons/gr";

const HomePage = () => {
  return (
    <section className="homepage">
      <nav>
        <div>
          <GrDocumentNotes size={25} color="#3361cc" />
          <span>Remarque</span>
        </div>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a
              href="https://github.com/ndimzKM/remarque-client"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center flex-col homepage-header">
        <h1>
          The simplest way to <br />
          keep notes
        </h1>
        <p>
          All your notes, synced on all your devices. Get Remarque now for iOS,{" "}
          <br />
          Android, Mac, Windows, Linux, or in your browser.
        </p>

        <Link to="/app">Go to App</Link>
        <img src={mockup} alt="Mockup Image" className="mockup-image" />
      </div>
    </section>
  );
};

export default HomePage;
