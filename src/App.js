import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/home/home-page';
import Characters from "./pages/characters/characters";
import Header from "./components/header/header";
import NotFound from "./components/not-found/not-found";
import Footer from "./components/footer/footer";
import Episodes from "./pages/episodes/episodes";
import Locations from "./pages/locations/locations";
import CardDetails from "./components/card-details/card-details";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CardDetails />} />

          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:id" element={<CardDetails />} />

          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<CardDetails />} />
          
          <Route path="*" element={<NotFound bg={true} text={'Страница не найдена'}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
