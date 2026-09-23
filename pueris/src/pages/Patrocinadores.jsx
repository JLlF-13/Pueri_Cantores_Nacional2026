import patrocinadoresData from "../data/data_sponsors.json";

const imagenesImportadas = import.meta.glob(
  "../data/img/**/*.{jpg,jpeg,png,webp,JPG,svg}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const obtenerImagen = (nombreArchivo) => {
  const ruta = Object.keys(imagenesImportadas).find((ruta) =>
    ruta.endsWith(`/${nombreArchivo}`)
  );

  return ruta ? imagenesImportadas[ruta] : null;
};

const sponsors = patrocinadoresData.Patrocinadors.map((patrocinador) => ({
  ...patrocinador,
  imagen: obtenerImagen(patrocinador.src),
}));

export const Patrocinadores = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="bg-[#123A63] px-4 py-10 text-white sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Patrocinadores del Congreso
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:mt-4 sm:text-lg">
            Consulta todos los patrocinadores que ayudan con el Congreso
            Nacional
          </p>
        </div>
      </section>

      {/* PATROCINADORES */}
      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {sponsors.map((patrocinador, index) => (
            <article
              key={`${patrocinador.src}-${index}`}
              className="flex min-h-[150px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:min-h-[180px] sm:p-6"
            >
              {patrocinador.imagen ? (
                <img
                  src={patrocinador.imagen}
                  alt={patrocinador.nom || "Patrocinador"}
                  className="max-h-28 w-full object-contain sm:max-h-36"
                />
              ) : (
                <p className="text-center text-sm text-red-500">
                  Imagen no encontrada
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};