import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "./pages/HomePage";
import AppView from "./pages/AppView";
import "./styles/main.scss";

import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<AppView />} />
      </Routes>
    </Provider>
  );
}

export default App;
