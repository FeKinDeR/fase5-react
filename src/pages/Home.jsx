export default function Home() {
  return (
    <>
      <section className="banner" id="inicio">
        <div className="banner-texto">
          <h1>Tecnologias no Agronegócio</h1>
          <p>Inovação, sustentabilidade e o futuro do campo brasileiro.</p>
        </div>
      </section>

      <section className="intro">
        <img src="/assets/img/intro.jpg" alt="Plantação moderna" />

        <div className="texto">
          <h2>Transformando o campo com tecnologia</h2>
          <p>
            O agronegócio brasileiro vem se modernizando com o uso de drones, sensores, Internet das Coisas (IoT) e
            inteligência artificial. Essas inovações melhoram a produtividade, reduzem custos e minimizam impactos
            ambientais, garantindo um futuro mais sustentável para o campo.
          </p>

          {/* Modernização leve: link com cara de botão (sem <button><a>) */}
          <div className="botaoyt">
           <a
  className="BotaoYT"
  href="https://youtu.be/0J2eZ4qtm0M"
  target="_blank"
  rel="noreferrer"
>
  ▶ Assistir vídeo
</a>


          </div>
        </div>

        <div className="sobreagro">
          <a
            href="https://www.gov.br/agricultura/pt-br/assuntos/politica-agricola/cafe"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/img/cafe.jpg" alt="Café" />
          </a>

          <a
            href="https://fpagropecuaria.org.br/2021/10/18/importancia-da-soja-para-o-brasil/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/img/soja.jpg" alt="Soja" />
          </a>

          <a
            href="https://cnabrasil.org.br/noticias/milho-%C3%A9-uma-das-principais-fontes-de-alimento-do-brasileiro-com-import%C3%A2ncia-estrat%C3%A9gica-nas-exporta%C3%A7%C3%B5es-do-agroneg%C3%B3cio"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/img/milho.jpg" alt="Milho" />
          </a>

          <p>
            O agronegócio é um dos pilares da economia brasileira, responsável por grande parte das exportações e pela
            geração de milhões de empregos. Graças à vasta extensão territorial, ao clima diversificado e ao avanço
            tecnológico no campo, o Brasil destaca-se na produção de grãos, carnes, frutas e fibras. Setores como soja,
            milho, café e pecuária colocam o país entre os maiores produtores e exportadores do mundo. Além de impulsionar
            o desenvolvimento econômico, o agronegócio também estimula a inovação e fortalece diversas cadeias produtivas,
            contribuindo para o crescimento sustentável do país.
          </p>
        </div>
      </section>
    </>
  );
}

