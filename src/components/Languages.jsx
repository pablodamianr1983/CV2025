import "./Languages.css";

const Languages = () => {
    const languages = [
      { name: "Español", level: "80%", color: "black" },
      { name: "Inglés", level: "30%", color: "yellow" },
    ];
  
    return (
      <section className="languages">
        <h2>IDIOMAS</h2>
        <ul>
          {languages.map((lang, index) => (
            <li key={index}>
              <p>{lang.name}</p>
              <div className="progress-bar" style={{ width: lang.level, backgroundColor: lang.color }}></div>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Languages;