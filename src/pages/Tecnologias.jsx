const items = [
  {
    img: "/assets/img/tecnologias_1.avif",
    alt: "Drone agrícola",
    title: "Drones",
    desc: "Usados para mapeamento, pulverização e monitoramento de lavouras.",
  },
  {
    img: "/assets/img/tecnologias_2.webp",
    alt: "Sensores IoT",
    title: "IoT e Sensores",
    desc: "Monitoram dados de solo, clima e produtividade em tempo real.",
  },
  {
    img: "/assets/img/tecnologias_3.webp",
    alt: "Inteligência artificial no campo",
    title: "Inteligência Artificial",
    desc: "Analisa dados para prever safras e otimizar decisões agrícolas.",
  },
];

export default function Tecnologias() {
  return (
    <section className="tecnologias">
      <h2>Principais Tecnologias</h2>

      <div className="cards">
        {items.map((t) => (
          <div className="card" key={t.title}>
            <img src={t.img} alt={t.alt} />
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
