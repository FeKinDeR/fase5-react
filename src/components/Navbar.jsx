import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/img/logo.png" alt="Logo AgroTech Grupo 09" />
      </div>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Abrir/fechar menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        &#9776;
      </button>

      <ul
        className="nav-links"
        id="nav-links"
        style={open ? { display: "block" } : undefined}
      >
        <li>
          <NavLink to="/" className="btn-nav" onClick={close} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tecnologias" className="btn-nav" onClick={close}>
            Tecnologias
          </NavLink>
        </li>
        <li>
          <NavLink to="/orgaos-e-iniciativas" className="btn-nav" onClick={close}>
            Órgãos e Iniciativas
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre-nos" className="btn-nav" onClick={close}>
            Sobre Nós
          </NavLink>
        </li>
        <li>
          <NavLink to="/contato" className="btn-nav" onClick={close}>
            Fale Conosco
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
