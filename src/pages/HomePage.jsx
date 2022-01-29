import { Link } from "react-router-dom";
import {} from 'react-icons';

const HomePage = () => {
  return (
    <div className="flex items-center flex-col">
      <h1>The simplest way to keep notes</h1>
      <p>All your notes, synced on all your devices. Get Remarque now for iOS, Android, Mac, Windows, Linux, or in your browser.</p>
      
      <Link to="/app">Go to App</Link>
    </div>
  );
};

export default HomePage;
