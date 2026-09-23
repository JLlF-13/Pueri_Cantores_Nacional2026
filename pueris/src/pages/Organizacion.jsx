import patrocinadoresData from "../data/organizacion_data.json";

export const OrganitzacioCongres = () => {
  const data = patrocinadoresData.organicacion.flatMap((item) =>
    Object.entries(item).map(([title, persones]) => ({
      title,
      persones,
    }))
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-[#123A63] px-4 py-10 text-white sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Organización
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:mt-4 sm:text-lg">
            Conoce la organización y las comisiones que ayudan con el
            Congreso Nacional.
          </p>
        </div>
      </section>

      {/* COMISIONES */}
      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.map((comision) => {
            const responsables = comision.persones.filter(
              (persona) => persona.jefe === true
            );

            const miembros = comision.persones.filter(
              (persona) => persona.jefe !== true
            );

            return (
              <article
                key={comision.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {/* TÍTULO DE LA COMISIÓN */}
                <div className="bg-[#123A63] px-5 py-4 text-white">
                  <h2 className="text-lg font-bold sm:text-xl">
                    {comision.title}
                  </h2>
                </div>

                <div className="space-y-5 p-5">
                  {/* RESPONSABLES */}
                  {responsables.length > 0 && (
                    <div>
                      <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#123A63]">
                        <span className="h-2 w-2 rounded-full bg-[#D8B46A]" />
                        Responsables
                      </h3>

                      <ul className="space-y-2">
                        {responsables.map((persona, index) => (
                          <li
                            key={`${persona.name}-${index}`}
                            className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-[#123A63]"
                          >
                            {persona.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* MEMBRES */}
                  {miembros.length > 0 && (
                    <div>
                      <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
                        Miembros
                      </h3>

                      <ul className="space-y-2">
                        {miembros.map((persona, index) => (
                          <li
                            key={`${persona.name}-${index}`}
                            className="border-b border-slate-100 pb-2 text-sm text-slate-600 last:border-0"
                          >
                            {persona.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};