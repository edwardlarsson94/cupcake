import "../style/style.scss";
import Cupcake from "./pages/Cupcake";
import Home from "./pages/Home";
import Headers from "./sections/Header";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Abouts from "./pages/Abouts";

function App() {
  return (
    <BrowserRouter>
      <Headers/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cupcake" element={<Cupcake/>} />
        <Route path="/abouts" element={<Abouts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
