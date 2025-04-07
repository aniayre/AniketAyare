import logo from './logo.svg';
import './App.css';
// import Header from './Components/Header';
// import C from './Components/Footer';
// import Hopbha from './Components/Hopbha';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Organogram from './pages/Organogram';
import Rti from './pages/rti';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import Tail from './Components/Tail';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Header />
      <Hopbha />
      <C /> */}
      <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Organogram" element={<Organogram />} />
          <Route path="rti" element={<Rti />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
        <Footer />
        {/* <Tail /> */}
    </BrowserRouter>
    </div>
    {/* <Footer /> */}
    </div>
  );
}

export default App;
