import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Zemari from "./pages/Zemari";
import Type from "./pages/Type";
import ViewLyrics from "./pages/ViewLyrics";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes >
    
        <Route path="/" element={<Home/>}></Route>
        <Route path="/zemari/:id" element={<Zemari/>}></Route>
        <Route path="/aynet/:id" element={<Type/>}></Route>
        <Route path="/mezmur/:id" element={<ViewLyrics/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
