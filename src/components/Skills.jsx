import "./Skills.css";

const Skills = () => {
    const skills = [
      { name: "Desarrollo Web", level: "80%", color: "black" },
      { name: "JavaScript", level: "60%", color: "yellow" },
      { name: "Python", level: "70%", color: "black" },
      { name: "Node.js", level: "60%", color: "black" },
      { name: "React", level: "60%", color: "black" },
      { name: "MySQL", level: "60%", color: "black" },
    ];
  
    return (
      <section className="skills">
        <h2>HABILIDADES</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <p>{skill.name}</p>
              <div className="progress-bar" style={{ width: skill.level, backgroundColor: skill.color }}></div>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Skills;
