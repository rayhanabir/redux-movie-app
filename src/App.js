import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie/:imdbId" element={<MovieDetails/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
