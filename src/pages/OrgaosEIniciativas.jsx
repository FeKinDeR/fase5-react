const links = [
  {
    href: "https://www-fao-org.translate.goog/fsnforum/resources/reports-and-briefs/fome-zero-zero-hunger-program-brazilian-experience?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=sge",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Logo_Fome_Zero.svg",
    alt: "Programa Fome Zero - Governo Federal",
    title: "Programa Fome Zero - Governo Federal",
  },
  {
    href: "https://www.fao.org/brasil/pt/",
    img: "https://images.sympla.com.br/631dfcf13b638-xs.png",
    alt: "FAO Brasil - ONU para Alimentação e Agricultura",
    title: "FAO Brasil - ONU para Alimentação e Agricultura",
  },
  {
    href: "https://www.mds.gov.br/",
    img: "https://www.ipea.gov.br/acessooportunidades/project/4_ted_mds_2024-2026/featured_logo_mds_huf4996e116b1c7a79d7a28c82dc801fd0_317143_720x0_resize_lanczos_2.png",
    alt: "Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome",
    title: "Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome",
  },
  {
    href: "https://biblioteca.ibge.gov.br/index.php/biblioteca-catalogo?view=detalhes&id=2102084",
    img: "https://agenciadenoticias.ibge.gov.br/images/agenciadenoticias/estatisticas_sociais/2025_10/PNAD-seg-alimentar_HOME_RobertoDziuraJr-AEN.jpg",
    alt: "IBGE - Dados sobre segurança alimentar",
    title: "IBGE - Dados sobre segurança alimentar",
  },
];

export default function OrgaosEIniciativas() {
  return (
    <>
      <section className="Blank" style={{ height: 50 }} />

      <section className="links">
        <h2>Órgãos e Iniciativas contra a Fome</h2>

        <div className="imglinks">
          {links.map((l) => (
            <div className="card-link" key={l.title}>
              <a href={l.href} target="_blank" rel="noreferrer">
                <img src={l.img} alt={l.alt} />
                <p>{l.title}</p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
