import "./Experience.css";

const Experience = () => {
    const experiences = [
      {
        company: "Ministerio de Educación, Cultura, Ciencia y Tecnología - Coordinación de Educación a Distancia",
        period: "2021-2022",
        tasks: [
          "Gestión de proyectos educativos a distancia.",
          "Desarrollo e implementación de plataformas educativas.",
          "Soporte técnico a docentes y alumnos.",
        ],
      },
      {
        company: "Colegio Secundario San José",
        period: "2021-presente",
        tasks: [
          "Referente Técnico Institucional.",
          "Asistencia al personal y alumnos en TICs.",
          "Mantenimiento de equipos informáticos.",
          "Dictado de Informática General.",
        ],
      },
      {
        company: "Universidad Nacional de Salta",
        period: "2021",
        tasks: [
          "Editor de aulas virtuales en plataforma Moodle.",
          "Cursos: Estrategias de aprendizaje en escenarios virtuales.",
        ],
      },
      {
        company: "CEDSa",
        period: "2015-2021",
        tasks: [
          "Coordinador de Área de Investigación y Desarrollo.",
          "Gestión de inscripción.",
          "Mantenimiento de plataforma educativa.",
          "Organización de materiales didácticos.",
          "Asistencia a docentes y alumnos en software y plataformas.",
          "Investigación y desarrollo de nuevas plataformas.",
          "Diseñador instruccional.",
          "Mantenimiento y actualización de equipos informáticos.",
          "Organización de videoconferencias.",
          "Asignación de tareas al personal del área de sistemas.",
        ],
      },
    ];
  
    return (
      <section className="experience">
        <h2>EXPERIENCIA LABORAL</h2>
        <ul>
          {experiences.map((job, index) => (
            <li key={index}>
              <h3>{job.company} ({job.period})</h3>
              {job.tasks.map((task, i) => <p key={i}>{task}</p>)}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Experience;