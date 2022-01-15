import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex items-center flex-col">
      <h1>Hello from HomePage</h1>
      <Link to="/app">Go to App</Link>
    </div>
  );
};

export default HomePage;
