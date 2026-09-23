import organista from "../data/img/Organista/organista.jpg";

export const OrganistaOficial = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="bg-[#123A63] px-4 py-10 text-white sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Organista Oficial
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:mt-4 sm:text-lg">
            Conoce a la Organista Oficial del Congreso Nacional de Pueri
            Cantores.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">
          {/* TÍTULO */}
          <div className="mb-8 border-b border-slate-200 pb-5 sm:mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-[#123A63] sm:text-4xl">
              Ulyana Popovych
            </h2>
          </div>

          {/* IMAGEN + BIOGRAFÍA */}
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(220px,320px)_1fr] md:gap-10 lg:gap-14">
            {/* IMAGEN */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex justify-center bg-slate-100 p-4 sm:p-6">
                <img
                  src={organista}
                  alt="Ulyana Popovych, Organista Oficial"
                  className="h-auto max-h-[500px] w-full rounded-xl object-contain"
                />
              </div>

              <div className="border-t border-slate-200 px-4 py-3 text-center">
                <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                  Ulyana Popovych
                </p>

                <p className="mt-1 text-xs text-slate-400">Organista Oficial</p>
              </div>
            </div>

            {/* BIOGRAFÍA */}
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-[#D8B46A]" />

                <h3 className="text-xl font-bold text-[#123A63] sm:text-2xl">
                  Biografía
                </h3>
              </div>

              <div className="space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
                <p>
                  Ha estudiado el piano en la Escuela Musical Especial Solomiya
                  Krushelnytska de Lviv, Nivel Profesional con matrícula de
                  honor (2000), y en la Academia Superior de Música Mykola
                  Lysenko de su país natal, donde obtuvo el Nivel Superior con
                  matrícula de honor (2006).
                </p>

                <p>
                  Está titulada con el máster de música como pianista solista,
                  maestra de piano y pianista acompañante.
                </p>

                <p>
                  Sus profesores son Svitlana Popvych, Juri Mojsiak y Jozsef
                  Orény (piano); Lidia Nikolaeva (acompañamiento y
                  corepetición); y Tatiana Shupiana (música de cámara).
                </p>

                <p>
                  Ha ganado diferentes concursos internacionales y nacionales
                  como pianista solista y pianista acompañante de instrumentos
                  de cuerda, viento madera, viento metal, percusión, acordeón,
                  canto coral y cantantes solistas.
                </p>

                <p>
                  Reside en Menorca desde 2008. Actualmente es profesora de
                  piano en la Escola Municipal de Música i Dansa de Ciutadella y
                  Es Mercadal.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};
