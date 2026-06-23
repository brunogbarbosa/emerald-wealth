import { useEffect, useRef, useState } from "react";
import wa1Img from "./assets/wa-1.png";
import wa2Img from "./assets/wa-2.png";
import wa3Img from "./assets/wa-3.png";

const WA_URLS = [wa1Img, wa2Img, wa3Img];

const LETICIA_1 = "/leticia-1.png";
const LETICIA_2 = "/leticia-2.png";

const WHATS = "https://wa.me/5524988116465";


function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-up, .cta-line");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("is-in"), i * 110);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  useReveal();
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;
      navRef.current.style.borderBottomColor =
        window.scrollY > 8 ? "var(--line)" : "transparent";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "var(--void)", color: "var(--white)" }}>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
        style={{
          background: "rgba(8,9,11,0.72)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid transparent",
          transition: "border-color 300ms",
        }}
      >
        <a href="#top" className="flex flex-col leading-tight">
          <span className="flex items-baseline gap-3">
            <span
              className="font-syne font-extrabold text-2xl"
              style={{ color: "var(--emerald)" }}
            >
              L·C
            </span>
            <span
              className="font-syne uppercase text-[12px] hidden sm:inline"
              style={{ color: "var(--white)", letterSpacing: "0.2em", fontWeight: 600 }}
            >
              Letícia Cristina
            </span>
          </span>
          <span
            className="font-inter uppercase text-[10px] mt-1 hidden sm:inline"
            style={{ color: "var(--muted)", letterSpacing: "0.18em" }}
          >
            Assessora de Investimentos · ANCORD / CVM
          </span>
        </a>

        <div
          className="hidden md:flex items-center gap-9 font-inter uppercase text-[11px]"
          style={{ color: "var(--muted)", letterSpacing: "0.15em" }}
        >
          <a href="#sobre" className="hover:text-[color:var(--white2)]">Sobre</a>
          <a href="#servicos" className="hover:text-[color:var(--white2)]">Serviços</a>
          <a href="#xp" className="hover:text-[color:var(--white2)]">Por que XP</a>
          <a href="#contato" className="hover:text-[color:var(--white2)]">Contato</a>
        </div>

        <a
          href={WHATS}
          target="_blank"
          rel="noreferrer"
          className="nav-cta font-syne uppercase text-[11px]"
          style={{ letterSpacing: "0.18em", fontWeight: 700 }}
        >
          Agendar conversa
        </a>
      </nav>

      {/* HERO */}
      <section
        id="top"
        className="relative w-full overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 20% 50%, var(--emerald-glow) 0%, transparent 65%)",
          }}
        />
        {/* Huge background text */}
        <div
          className="absolute pointer-events-none select-none font-syne font-extrabold whitespace-nowrap"
          style={{
            fontSize: "clamp(70px, 13vw, 170px)",
            color: "rgba(239,242,240,0.025)",
            left: "-1%",
            top: "50%",
            transform: "translateY(-50%)",
            letterSpacing: "-0.02em",
          }}
        >
          INVESTIMENTOS
        </div>

        {/* Visual layer (image) */}
        <div
          className="hidden md:block absolute top-0 right-0 h-screen"
          style={{
            width: "42%",
            background:
              "linear-gradient(150deg, var(--surface) 0%, var(--deep) 100%)",
            clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <img
            src={LETICIA_1}
            alt="Letícia Cristina, assessora de investimentos InvestSmart XP"
            className="w-full h-full"
            style={{ objectFit: "cover", objectPosition: "top center" }}
          />
          <div
            className="absolute font-syne uppercase text-[10px] px-3 py-2"
            style={{
              bottom: 28,
              left: 64,
              letterSpacing: "0.18em",
              background: "var(--emerald-dim)",
              border: "1px solid var(--emerald)",
              color: "var(--white)",
              fontWeight: 600,
            }}
          >
            Volta Redonda / RJ · Atendimento online
          </div>
        </div>

        {/* Text layer */}
        <div
          className="relative px-6 md:px-0 pt-32 md:pt-0 pb-20 md:pb-0"
          style={{ minHeight: "100vh" }}
        >
          <div
            className="md:absolute md:top-1/2 md:left-[7%] md:-translate-y-1/2 max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-8 fade-up">
              <div
                style={{
                  height: 1,
                  width: 36,
                  background: "var(--emerald)",
                }}
              />
              <span
                className="font-inter uppercase text-[10px]"
                style={{
                  color: "var(--emerald)",
                  letterSpacing: "0.25em",
                  fontWeight: 600,
                }}
              >
                Assessora certificada ANCORD · CVM
              </span>
            </div>

            <h1
              className="font-syne font-extrabold fade-up"
              style={{
                fontSize: "clamp(40px, 12vw, 120px)",
                color: "var(--white)",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                wordBreak: "break-word",
              }}
            >
              SEU
              <br />
              PATRIMÔNIO,
            </h1>
            <div
              className="font-syne fade-up mt-2"
              style={{
                fontSize: "clamp(28px, 4vw, 58px)",
                color: "var(--emerald)",
                fontWeight: 600,
                fontStyle: "italic",
                lineHeight: 1,
              }}
            >
              nossa prioridade.
            </div>

            <p
              className="font-inter fade-up mt-8 max-w-md"
              style={{ color: "var(--muted)", fontSize: 16, fontWeight: 300, lineHeight: 1.65 }}
            >
              Assessoria personalizada de investimentos, com a estrutura do maior escritório
              credenciado à XP do Brasil.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-8 fade-up">
              <a
                href={WHATS}
                target="_blank"
                rel="noreferrer"
                className="font-syne uppercase"
                style={{
                  background: "var(--emerald)",
                  color: "var(--void)",
                  padding: "15px 36px",
                  borderRadius: 2,
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.15em",
                }}
              >
                Agendar conversa
              </a>
              <a href="#servicos" className="arrow-link font-inter" style={{ fontSize: 13 }}>
                Conhecer os serviços <span>→</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 mt-10 fade-up">
              {[
                "4 anos de profissão",
                "Volta Redonda / RJ + Online",
                "Certificação ANCORD · CVM",
              ].map((m, i) => (
                <div key={m} className="flex items-center gap-5">
                  {i > 0 && (
                    <div style={{ width: 1, height: 14, background: "var(--emerald)" }} />
                  )}
                  <span
                    className="font-mono2"
                    style={{ color: "var(--white)", fontSize: 12, fontWeight: 400 }}
                  >
                    {m}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile image */}
          <div className="md:hidden mt-12 -mx-6">
            <img
              src={LETICIA_1}
              alt="Letícia Cristina"
              className="w-full"
              style={{ objectFit: "cover", objectPosition: "top center", maxHeight: 520 }}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="hidden md:flex absolute items-center gap-3"
          style={{ bottom: 40, left: 36, color: "var(--emerald)", opacity: 0.5 }}
        >
          <span
            className="font-inter uppercase text-[10px]"
            style={{ writingMode: "vertical-rl", letterSpacing: "0.3em" }}
          >
            Scroll
          </span>
          <div style={{ width: 1, height: 40, background: "var(--emerald)" }} />
        </div>
      </section>

      {/* METRICS */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--surface)", padding: "56px 0" }}
      >
        <div
          className="absolute font-mono2 font-light pointer-events-none select-none"
          style={{
            fontSize: 320,
            color: "rgba(239,242,240,0.03)",
            bottom: -120,
            right: -40,
            lineHeight: 1,
          }}
        >
          00
        </div>
        <div
          className="relative max-w-7xl mx-auto px-6 md:px-12 grid gap-10 md:gap-0"
          style={{ gridTemplateColumns: "minmax(0,1fr)" }}
        >
          <div className="hidden md:grid" style={{ gridTemplateColumns: "40% 20% 20% 20%" }}>
            {[
              { big: "R$ 30 Bilhões", small: "sob custódia", size: 52, color: "var(--emerald)" },
              { big: "Top Escritório", small: "XP Investimentos", size: 32, color: "var(--white)" },
              { big: "2.776+", small: "publicações e análises", size: 32, color: "var(--white)" },
              { big: "72,4 mil", small: "seguidores InvestSmart", size: 32, color: "var(--white)" },
            ].map((m, i) => (
              <div
                key={m.big}
                className="px-8 fade-up"
                style={{ borderLeft: i === 0 ? "none" : "1px solid var(--line)" }}
              >
                <div className="font-mono2" style={{ fontSize: m.size, color: m.color, lineHeight: 1, fontWeight: 400 }}>
                  {m.big}
                </div>
                <div
                  className="font-inter mt-3"
                  style={{ color: "var(--muted)", fontSize: 14, fontWeight: 300 }}
                >
                  {m.small}
                </div>
              </div>
            ))}
          </div>
          {/* Mobile stacked */}
          <div className="md:hidden grid grid-cols-2 gap-8">
            {[
              { big: "R$ 30bi", small: "sob custódia" },
              { big: "Top XP", small: "Escritório" },
              { big: "2.776+", small: "publicações" },
              { big: "72,4 mil", small: "seguidores" },
            ].map((m) => (
              <div key={m.big}>
                <div className="font-mono2" style={{ fontSize: 28, color: "var(--emerald)" }}>{m.big}</div>
                <div className="font-inter text-xs mt-2" style={{ color: "var(--muted)" }}>{m.small}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="relative overflow-hidden py-28 md:py-40"
        style={{ background: "var(--void)" }}
      >
        <div
          className="absolute font-syne font-extrabold pointer-events-none select-none"
          style={{ fontSize: 160, color: "rgba(239,242,240,0.03)", top: 40, right: 40, lineHeight: 1 }}
        >
          01
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 relative fade-up">
            <div style={{ border: "1px solid var(--emerald)", borderRadius: 4, overflow: "hidden", minHeight: 500 }}>
              <img
                src={LETICIA_2}
                alt="Letícia Cristina, assessora InvestSmart XP"
                className="w-full h-full"
                style={{ objectFit: "cover", objectPosition: "top center", minHeight: 500 }}
              />
            </div>
            <div
              className="absolute font-syne uppercase"
              style={{
                bottom: -20,
                right: -20,
                background: "var(--panel)",
                border: "1px solid var(--emerald)",
                color: "var(--white)",
                fontSize: 10,
                letterSpacing: "0.2em",
                padding: "10px 16px",
                fontWeight: 600,
              }}
            >
              ANCORD · CVM
            </div>
          </div>
          <div className="md:col-span-7 md:pl-8">
            <div
              className="font-inter uppercase fade-up"
              style={{ color: "var(--emerald)", fontSize: 10, letterSpacing: "0.35em", fontWeight: 600 }}
            >
              Sobre
            </div>
            <h2
              className="font-syne font-extrabold mt-5 fade-up"
              style={{ color: "var(--white)", fontSize: "clamp(36px,9vw,44px)", lineHeight: 1, letterSpacing: "-0.01em" }}
            >
              LETÍCIA
              <br />
              CRISTINA
            </h2>
            <div
              className="font-syne mt-5 fade-up"
              style={{ color: "var(--emerald)", fontSize: 20, fontWeight: 600 }}
            >
              Assessora de Investimentos · InvestSmart XP
            </div>
            <p
              className="font-inter mt-6 fade-up max-w-xl"
              style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.7, fontWeight: 300 }}
            >
              Especialista em assessoria de investimentos, credenciada ao maior escritório
              parceiro XP do país. Foco em planejamento patrimonial personalizado e construção
              de riqueza de longo prazo — estratégia construída em torno da sua vida, dos seus
              objetivos e do seu tempo.
            </p>
            <div className="mt-10 grid gap-4">
              {[
                "Atendimento personalizado",
                "Estrutura InvestSmart XP",
                "Estratégia de longo prazo",
              ].map((d) => (
                <div
                  key={d}
                  className="font-inter fade-up flex items-center gap-3"
                  style={{ color: "var(--white)", fontSize: 15 }}
                >
                  <span style={{ color: "var(--emerald)" }}>→</span>
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section
        id="servicos"
        className="relative overflow-hidden py-28 md:py-36"
        style={{ background: "var(--deep)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2
            className="font-syne font-extrabold fade-up"
            style={{ color: "var(--white)", fontSize: "clamp(36px,8vw,68px)", letterSpacing: "-0.02em" }}
          >
            SERVIÇOS
          </h2>
          <div style={{ width: 80, height: 1, background: "var(--emerald)", margin: "20px 0 60px" }} />

          <div className="hidden md:flex gap-6 items-start">
            <ServiceCard
              roman="I"
              title="Planejamento Patrimonial"
              desc="Estruturação completa do seu patrimônio, alinhada aos seus objetivos de vida, com diversificação e proteção em mente."
              w="44%"
              h={340}
              mt={0}
            />
            <ServiceCard
              roman="II"
              title="Carteira Diversificada"
              desc="Carteiras sob medida combinando renda fixa, variável, internacional e alternativos com base no seu perfil."
              w="30%"
              h={270}
              mt={50}
            />
            <ServiceCard
              roman="III"
              title="Renda Fixa & Variável"
              desc="Acesso a produtos exclusivos da plataforma XP — do CDB ao private equity — com curadoria especializada."
              w="22%"
              h={310}
              mt={0}
            />
          </div>
          {/* Mobile */}
          <div className="md:hidden grid gap-5">
            <ServiceCard roman="I" title="Planejamento Patrimonial" desc="Estruturação completa do seu patrimônio." w="100%" h={240} mt={0} />
            <ServiceCard roman="II" title="Carteira Diversificada" desc="Carteiras sob medida e diversificadas." w="100%" h={240} mt={0} />
            <ServiceCard roman="III" title="Renda Fixa & Variável" desc="Acesso a produtos exclusivos da XP." w="100%" h={240} mt={0} />
          </div>

          <div
            className="mt-16 p-8 md:p-12 fade-up flex flex-col md:flex-row items-start md:items-center gap-6 justify-between"
            style={{
              background: "var(--emerald-dim)",
              border: "1px solid var(--emerald)",
              borderRadius: 4,
            }}
          >
            <div
              className="font-syne max-w-3xl"
              style={{ color: "var(--white)", fontSize: 20, fontWeight: 600, lineHeight: 1.4 }}
            >
              INVESTSMART — Eleito um dos melhores escritórios credenciados à XP do Brasil.
              Mais de R$ 30 bilhões sob custódia.
            </div>
            <div
              className="font-mono2"
              style={{ color: "var(--emerald)", fontSize: 14, letterSpacing: "0.3em" }}
            >
              XP · INVESTIMENTOS
            </div>
          </div>
        </div>
      </section>

      {/* POR QUE XP */}
      <section
        id="xp"
        className="relative overflow-hidden py-28 md:py-36"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2
            className="font-syne font-extrabold fade-up"
            style={{ fontSize: "clamp(30px,7vw,60px)", letterSpacing: "-0.02em", wordBreak: "break-word" }}
          >
            <span style={{ color: "var(--white)" }}>POR QUE </span>
            <span style={{ color: "var(--emerald)" }}>XP INVESTIMENTOS?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {[
              {
                t: "Maior plataforma de investimentos do Brasil",
                d: "Acesso a uma plataforma robusta com mais de 800 produtos financeiros disponíveis para todos os perfis.",
              },
              {
                t: "Produtos exclusivos de renda fixa e variável",
                d: "Ofertas primárias, fundos de gestoras renomadas, COE e oportunidades restritas à rede XP.",
              },
              {
                t: "Proteção e segurança patrimonial com regulação CVM",
                d: "Operação regulada pela CVM e BACEN, com custódia segregada e protocolos institucionais.",
              },
              {
                t: "Assessoria certificada e focada no seu perfil",
                d: "Profissionais certificados ANCORD acompanhando sua jornada de investimentos do início ao longo prazo.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="p-8 fade-up"
                style={{
                  background: "var(--panel)",
                  borderLeft: "2px solid var(--emerald)",
                  borderRadius: 4,
                }}
              >
                <div
                  className="font-syne"
                  style={{ color: "var(--white)", fontSize: 18, fontWeight: 700 }}
                >
                  {c.t}
                </div>
                <p
                  className="font-inter mt-3"
                  style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.65, fontWeight: 300 }}
                >
                  {c.d}
                </p>
              </div>
            ))}
          </div>

          <div
            className="text-center mt-20 font-mono2 fade-up"
            style={{ color: "var(--emerald)", fontSize: 18, letterSpacing: "0.04em" }}
          >
            "Seu dinheiro merece mais do que uma poupança."
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="relative overflow-hidden py-28 md:py-36" style={{ background: "var(--void)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2
            className="font-syne font-extrabold fade-up"
            style={{ fontSize: "clamp(28px,7vw,48px)", letterSpacing: "-0.02em", wordBreak: "break-word" }}
          >
            <span style={{ color: "var(--white)" }}>QUEM INVESTIU, </span>
            <span style={{ color: "var(--emerald)" }}>CONFIA.</span>
          </h2>

          <div className="grid md:grid-cols-12 gap-6 mt-16">
            <div
              className="md:col-span-7 relative p-10 fade-up"
              style={{ background: "var(--panel)", borderRadius: 4, border: "1px solid var(--line)" }}
            >
              <span
                className="absolute font-mono2"
                style={{ top: 8, left: 24, fontSize: 90, color: "var(--emerald)", opacity: 0.12, lineHeight: 1 }}
              >
                "
              </span>
              <p
                className="font-inter italic"
                style={{ color: "var(--white)", fontSize: 22, lineHeight: 1.5, fontWeight: 300 }}
              >
                A Letícia entendeu meu perfil e montou uma carteira que realmente faz sentido pra
                minha vida. Resultado consistente mês após mês.
              </p>
              <div
                className="font-syne mt-8 uppercase"
                style={{ color: "var(--emerald)", fontSize: 12, letterSpacing: "0.2em", fontWeight: 700 }}
              >
                Rafael M. · São Paulo
              </div>
            </div>

            <div className="md:col-span-5 grid gap-6">
              {[
                {
                  q: "Nunca pensei que investir pudesse ser tão simples. Ela traduziu o mercado pra mim de um jeito humano.",
                  n: "Camila R. · Rio de Janeiro",
                },
                {
                  q: "Saí da poupança e em 8 meses já vejo a diferença. Atendimento impecável.",
                  n: "Marcos T. · Brasília",
                },
              ].map((t) => (
                <div
                  key={t.n}
                  className="p-7 fade-up"
                  style={{ background: "var(--panel)", borderRadius: 4, border: "1px solid var(--line)" }}
                >
                  <p
                    className="font-inter italic"
                    style={{ color: "var(--white)", fontSize: 15, lineHeight: 1.6, fontWeight: 300 }}
                  >
                    {t.q}
                  </p>
                  <div
                    className="font-syne mt-5 uppercase"
                    style={{ color: "var(--emerald)", fontSize: 11, letterSpacing: "0.2em", fontWeight: 700 }}
                  >
                    {t.n}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MENSAGENS REAIS */}
          <div className="mt-24 md:mt-32">
            <div className="flex items-center gap-4 mb-6 fade-up">
              <div style={{ height: 1, width: 36, background: "var(--emerald)" }} />
              <span
                className="font-inter uppercase"
                style={{ color: "var(--emerald)", fontSize: 10, letterSpacing: "0.3em", fontWeight: 600 }}
              >
                Mensagens reais · WhatsApp
              </span>
            </div>
            <h3
              className="font-syne font-extrabold fade-up max-w-3xl"
              style={{
                fontSize: "clamp(24px,5vw,40px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "var(--white)",
                wordBreak: "break-word",
              }}
            >
              O que clientes da Letícia <span style={{ color: "var(--emerald)" }}>dizem todos os dias.</span>
            </h3>

            {/* Desktop grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 mt-12">
              {WA_URLS.map((url, i) => (
                <div
                  key={i}
                  className="fade-up overflow-hidden"
                  style={{
                    background: "var(--panel)",
                    border: "1px solid var(--line)",
                    borderRadius: 6,
                    padding: 14,
                  }}
                >
                  <img
                    src={url}
                    alt={`Mensagem real de cliente ${i + 1}`}
                    className="w-full h-auto block"
                    style={{ borderRadius: 4, objectFit: "contain" }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Mobile carousel */}
            <MobileCarousel images={WA_URLS} />
          </div>
        </div>
      </section>


      {/* CTA FINAL */}
      <section
        id="contato"
        className="relative overflow-hidden py-32 md:py-44 text-center"
        style={{
          background:
            "var(--void) radial-gradient(ellipse 50% 65% at 50% 50%, rgba(29,184,122,0.08) 0%, transparent 70%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="cta-line mx-auto mb-10" />
          <h2
            className="font-syne font-extrabold"
            style={{ fontSize: "clamp(34px,9vw,80px)", letterSpacing: "-0.02em", lineHeight: 1, wordBreak: "break-word" }}
          >
            <span style={{ color: "var(--white)" }}>COMECE A</span>
            <br />
            <span style={{ color: "var(--emerald)" }}>INVESTIR MELHOR.</span>
          </h2>
          <p
            className="font-inter mt-8 mx-auto max-w-xl fade-up"
            style={{ color: "var(--muted)", fontSize: 15, fontWeight: 300, lineHeight: 1.7 }}
          >
            Assessoria personalizada, com a estrutura da InvestSmart XP. Conversa inicial sem
            compromisso.
          </p>
          <a
            href={WHATS}
            target="_blank"
            rel="noreferrer"
            className="font-syne uppercase inline-block mt-10 fade-up"
            style={{
              background: "var(--emerald)",
              color: "var(--void)",
              padding: "18px 52px",
              borderRadius: 2,
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.18em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--white)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--emerald)";
            }}
          >
            Agendar conversa
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-16 px-6 md:px-12"
        style={{ background: "var(--void)", borderTop: "1px solid var(--line)" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-syne font-extrabold text-2xl" style={{ color: "var(--emerald)" }}>
              L·C
            </div>
            <div className="font-syne mt-4" style={{ color: "var(--white)", fontSize: 16, fontWeight: 600 }}>
              Letícia Cristina
            </div>
            <div
              className="font-inter mt-1 uppercase"
              style={{ color: "var(--muted)", fontSize: 11, letterSpacing: "0.18em" }}
            >
              InvestSmart · XP Investimentos
            </div>
          </div>
          <div className="flex flex-col gap-3 font-inter uppercase text-[12px]" style={{ color: "var(--muted)", letterSpacing: "0.18em" }}>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#xp">Por que XP</a>
            <a href="#contato">Contato</a>
          </div>
          <div className="flex flex-col gap-3 font-inter text-sm" style={{ color: "var(--white)" }}>
            <a href="https://instagram.com/leticiamsouzaa" target="_blank" rel="noreferrer">
              @leticiamsouzaa
            </a>
            <a href="https://instagram.com/investsmart.xp" target="_blank" rel="noreferrer">
              @investsmart.xp
            </a>
            <a href={WHATS} target="_blank" rel="noreferrer" style={{ color: "var(--emerald)" }}>
              WhatsApp →
            </a>
          </div>
        </div>
        <div
          className="max-w-7xl mx-auto mt-14 pt-8 font-inter text-[11px]"
          style={{ color: "var(--muted)", borderTop: "1px solid var(--line)" }}
        >
          © 2025 Letícia Cristina · Assessora de Investimentos · InvestSmart XP
        </div>
        <div
          className="max-w-7xl mx-auto mt-4 font-inter"
          style={{ color: "var(--muted)", opacity: 0.55, fontSize: 10, lineHeight: 1.6 }}
        >
          Investimentos envolvem riscos. Rentabilidade passada não garante rentabilidade futura.
          Assessoria prestada através da InvestSmart, escritório credenciado à XP Investimentos S.A.
        </div>
      </footer>

      {/* Whats float */}
      <a
        href={WHATS}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed flex items-center justify-center"
        style={{
          bottom: 32,
          right: 32,
          width: 56,
          height: 56,
          background: "var(--emerald)",
          borderRadius: 2,
          boxShadow: "0 8px 32px rgba(29,184,122,0.3)",
          zIndex: 60,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4h.01c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3ZM12 21.5h-.01a9.6 9.6 0 0 1-4.9-1.3l-.4-.2-3.8 1 1-3.7-.2-.4a9.6 9.6 0 0 1-1.5-5.1c0-5.3 4.3-9.6 9.7-9.6 2.6 0 5 1 6.8 2.8a9.5 9.5 0 0 1 2.8 6.8c0 5.3-4.3 9.7-9.6 9.7Zm5.5-7.2c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.2.2 2.1 3.2 5.1 4.5 1.8.8 2.5.8 3.4.7.5-.1 1.8-.7 2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4Z"
            fill="var(--void)"
          />
        </svg>
      </a>
    </div>
  );
}

function MobileCarousel({ images }: { images: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const check = () => {
    const el = ref.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    check();
    el.addEventListener("scroll", check);
    return () => el.removeEventListener("scroll", check);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -el.clientWidth * 0.85 : el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div className="md:hidden mt-12 relative">
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {images.map((url, i) => (
          <div
            key={i}
            className="flex-shrink-0 fade-up"
            style={{
              width: "85vw",
              maxWidth: 340,
              scrollSnapAlign: "start",
              background: "var(--panel)",
              border: "1px solid var(--line)",
              borderRadius: 6,
              padding: 14,
            }}
          >
            <img
              src={url}
              alt={`Mensagem real de cliente ${i + 1}`}
              className="w-full h-auto block"
              style={{ borderRadius: 4, objectFit: "contain" }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={() => scroll("left")}
          disabled={!canLeft}
          className="flex items-center justify-center"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: canLeft ? "var(--emerald)" : "var(--panel)",
            color: canLeft ? "var(--void)" : "var(--muted)",
            border: "1px solid var(--line)",
            opacity: canLeft ? 1 : 0.4,
            transition: "all 300ms ease",
          }}
          aria-label="Anterior"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canRight}
          className="flex items-center justify-center"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: canRight ? "var(--emerald)" : "var(--panel)",
            color: canRight ? "var(--void)" : "var(--muted)",
            border: "1px solid var(--line)",
            opacity: canRight ? 1 : 0.4,
            transition: "all 300ms ease",
          }}
          aria-label="Próximo"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function ServiceCard({
  roman,
  title,
  desc,
  w,
  h,
  mt,
}: {
  roman: string;
  title: string;
  desc: string;
  w: string;
  h: number;
  mt: number;
}) {
  return (
    <div
      className="service-card relative p-7 fade-up overflow-hidden"
      style={{
        background: "var(--panel)",
        borderTop: "2px solid var(--emerald)",
        borderRadius: 4,
        width: w,
        height: h,
        marginTop: mt,
      }}
    >
      <span
        className="absolute font-mono2 select-none pointer-events-none"
        style={{ bottom: -10, right: 10, fontSize: 80, color: "var(--white)", opacity: 0.05, lineHeight: 1 }}
      >
        {roman}
      </span>
      <div
        className="font-syne uppercase"
        style={{ color: "var(--white)", fontSize: 17, fontWeight: 700, letterSpacing: "0.04em" }}
      >
        {title}
      </div>
      <p
        className="font-inter mt-4 max-w-xs"
        style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.65, fontWeight: 300 }}
      >
        {desc}
      </p>
    </div>
  );
}
