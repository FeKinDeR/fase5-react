const membros = [
  {
    nome: "Felipe",
    img: "/assets/img/felipe.jpg",
    alt: "Foto de Felipe",
    href: "https://www.instagram.com/devfelipekinder/",
    texto: (
      <>
        Hacker Whitehat desde os 12 anos, empresário no ramo de chapas de ferro e aço no estado de São Paulo. (
        <a href="https://www.atlantaferroeaco.com.br" target="_blank" rel="noreferrer">
          www.atlantaferroeaco.com.br
        </a>
        ) Dev Fullstack formado pela Digital House. CEH - Certified Ethical Hacker pela Digital House. Participante de
        projetos como{" "}
        <a href="https://devscout.app/pt" target="_blank" rel="noreferrer">
          DevScout
        </a>{" "}
        e antiga{" "}
        <a href="https://www.baixou.com.br" target="_blank" rel="noreferrer">
          Baixou
        </a>{" "}
        (#desativado)
      </>
    ),
  },
  {
    nome: "Ramon",
    img: "/assets/img/ramon.jpg",
    alt: "Foto de Ramon",
    href: "https://www.instagram.com/ramonmtr",
    texto: <>Programador Java e Python desde os 18 anos, iniciando no desenvolvimento HTML, CSS e JavaScript.</>,
  },
  {
    nome: "Audibert",
    img: "/assets/img/audibert.jpg",
    alt: "Foto de Audibert",
    href: null,
    texto: (
      <>
        Desenvolvedor apaixonado por tecnologia e por criar soluções que ajudem outros devs e comunidades online. Tenho
        experiência com JavaScript e Python, além de atuar em projetos com React e Node.js. Canal no{" "}
        <a href="https://www.youtube.com/@audibert" target="_blank" rel="noreferrer">
          YouTube
        </a>
        .
      </>
    ),
  },
  {
    nome: "Thiago",
    img: "/assets/img/thiago.jpeg",
    alt: "Foto de Thiago",
    href: "https://www.instagram.com/thsaccomani",
    texto: <>Bacharel em Direito. Atualmente, em transição para a área de Tecnologia da Informação.</>,
  },
  {
    nome: "Lucas Sanches Coelho",
    img: "/assets/img/lucas.jpg",
    alt: "Foto de Lucas",
    href: "https://www.instagram.com/sancheesc",
    texto: (
      <>
        Gestor de uma escola e de uma empresa de peças automotivas, com experiência em administração estratégica de
        equipes, processos e resultados. Atuei como suporte de TI em ambiente educacional. Domino Excel e curso FIAP EAD.
      </>
    ),
  },
];

export default function SobreNos() {
  return (
    <>
      <section className="Blank" style={{ height: 50 }} />

      <section className="sobre">
        <h2>Sobre Nós</h2>
        <p>
          O Grupo 09 da FIAP desenvolveu este projeto com o objetivo de demonstrar como as tecnologias emergentes estão
          transformando o agronegócio brasileiro e contribuindo para o combate à fome. Acreditamos que inovação e
          sustentabilidade são pilares essenciais para promover um desenvolvimento agrícola mais eficiente e inclusivo.
        </p>

        <div className="missao">
          <h3>Nossa Missão</h3>
          <p>
            Fomentar o uso de tecnologias inovadoras no agronegócio, com foco em aumentar a produtividade, otimizar
            recursos, reduzir desperdícios e garantir a segurança alimentar em todo o Brasil.
          </p>
        </div>

        <div className="visao">
          <h3>Nossa Visão</h3>
          <p>
            Consolidar-se como referência em soluções tecnológicas aplicadas ao agronegócio, contribuindo para a
            construção de um futuro sustentável, ético e livre da fome.
          </p>
        </div>
      </section>

      <section className="tecnologias">
        <h2>Membros do Grupo</h2>

        <div className="cards">
          {membros.map((m) => {
            const card = (
              <div className="card" key={m.nome}>
                <img src={m.img} alt={m.alt} />
                <h3>{m.nome}</h3>
                <p>{m.texto}</p>
              </div>
            );

            return m.href ? (
              <a
                key={m.nome}
                href={m.href}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {card}
              </a>
            ) : (
              card
            );
          })}
        </div>
      </section>
    </>
  );
}
