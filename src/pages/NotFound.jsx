import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page">
      <h1>Página não encontrada</h1>
      <p>O link que você acessou não existe.</p>
      <Link to="/">Voltar para o início</Link>
    </section>
  );
}
