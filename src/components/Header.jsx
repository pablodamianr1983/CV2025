import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="/foto.jpg" alt="Foto de perfil" className="profile-pic" />
      <div className="header-info">
        <h1>PABLO DAMIÁN ROLDÁN</h1>
        <p className="job-title">Técnico Universitario en Desarrollo de Software</p>
        <p className="description">
          Profesional con experiencia en educación, gestión de proyectos y desarrollo web. Apasionado por la robótica y las tendencias tecnológicas.
        </p>
        <div className="contact-info">
          <a href="mailto:damianpabloroldan@gmail.com">damianpabloroldan@gmail.com</a> |
          <a href="https://www.linkedin.com/in/pablo-damian-roldan-3a8625179" target="_blank">LinkedIn</a> |
          <span>3875668039</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
