import "./App.css";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Experience />
        <Education />
        <Languages />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
