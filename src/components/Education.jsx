import "./Education.css";

const Education = () => {
    const educationList = [
      {
        title: "Tecnicatura Universitaria en Desarrollo de Software",
        institution: "IUPATECO, Salta.",
      },
      {
        title: "Técnico Superior en Seguridad e Higiene Laboral (Cursado hasta 3º año)",
        institution: "Instituto de Educación Superior 6040, Vaqueros, Salta.",
      },
      {
        title: "Curso de Introducción a la Robótica Educativa",
        institution: "Ministerio de Educación, Cultura, Ciencia y Tecnología.",
      },
      {
        title: "Curso Universitario de Diseño Gráfico",
        institution: "UPATECO.",
      },
      {
        title: "Curso Universitario Introducción al Modelado 3D Digital",
        institution: "UPATECO.",
      },
      {
        title: "Curso de Introducción a AWS",
        institution: "Udemy.",
      },
      {
        title: "Curso Dominando Moodle",
        institution: "Udemy.",
      },
      {
        title: "Curso Energía Solar y Eólica de Baja Potencia",
        institution: "UTN.BA (Univ. Tecnológica Nacional BA).",
      },
      {
        title: "Curso Tester QA Manual",
        institution: "EducaciónIT.",
      },
    ];
  
    return (
      <section className="education">
        <h2>FORMACIÓN</h2>
        <ul>
          {educationList.map((edu, index) => (
            <li key={index}>
              <h3>{edu.title}</h3>
              <p>{edu.institution}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Education;
