import { useState } from "react";
import { Music, Download, ChevronLeft, ChevronRight } from "lucide-react";
import data from "../data/partituras_data.json";

// Carregar tots els àudios de la carpeta pueris_audios
const audios = import.meta.glob(
  "../data/pueris_audios/**/*.{mp3,wav}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// Buscar un àudio pel seu nom
const obtenerAudio = (nombreArchivo) => {
  const ruta = Object.keys(audios).find((ruta) =>
    ruta.endsWith(`/${nombreArchivo}`)
  );

  return ruta ? audios[ruta] : null;
};

export const Partituras = () => {
  const obras = data.CongresoInformacion;

  const [obraSeleccionada, setObraSeleccionada] = useState(
    Object.keys(obras[0])[0]
  );

  const obraData = obras.find(
    (obra) => Object.keys(obra)[0] === obraSeleccionada
  );

  const contenidos = obraData?.[obraSeleccionada] || [];

  // Índice de l'obra seleccionada
  const indiceObra = obras.findIndex(
    (obra) => Object.keys(obra)[0] === obraSeleccionada
  );

  // Canviar d'obra
  const cambiarObra = (direccion) => {
    let nuevoIndice = indiceObra + direccion;

    if (nuevoIndice < 0) {
      nuevoIndice = obras.length - 1;
    }

    if (nuevoIndice >= obras.length) {
      nuevoIndice = 0;
    }

    const nuevaObra = Object.keys(obras[nuevoIndice])[0];

    setObraSeleccionada(nuevaObra);
  };

  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="bg-[#123A63] px-4 py-10 text-white sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl text-center">

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B46A] sm:text-sm">
            Congreso Nacional 2026
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Partituras y Audios
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:mt-4 sm:text-lg">
            Consulta las obras y escucha o descarga los audios de cada parte.
          </p>

        </div>
      </section>

      {/* SELECTOR DE OBRAS */}
      <section className="px-3 py-5 sm:px-6 sm:py-8">
        <div className="mx-auto max-w-5xl">

          <div className="rounded-2xl bg-white p-2 shadow-lg ring-1 ring-slate-200 sm:p-4">

            <div className="flex items-center gap-1.5 sm:gap-4">

              {/* ANTERIOR */}
              <button
                onClick={() => cambiarObra(-1)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#123A63] text-white transition hover:bg-[#1B4E7A] active:scale-95 sm:h-12 sm:w-12"
                aria-label="Obra anterior"
              >
                <ChevronLeft size={22} />
              </button>

              {/* OBRAS */}
              <div className="grid min-w-0 flex-1 grid-cols-2 gap-1.5 sm:grid-cols-5 sm:gap-3">

                {obras.map((obra) => {
                  const nombreObra = Object.keys(obra)[0];
                  const activo = nombreObra === obraSeleccionada;

                  return (
                    <button
                      key={nombreObra}
                      onClick={() => setObraSeleccionada(nombreObra)}
                      className={`min-w-0 rounded-xl px-2 py-3 text-xs font-bold transition duration-300 sm:px-3 sm:py-5 sm:text-sm ${
                        activo
                          ? "bg-[#123A63] text-white shadow-md"
                          : "bg-slate-100 text-[#123A63] hover:bg-[#123A63]/10"
                      }`}
                    >
                      {nombreObra}
                    </button>
                  );
                })}

              </div>

              {/* SIGUIENTE */}
              <button
                onClick={() => cambiarObra(1)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#123A63] text-white transition hover:bg-[#1B4E7A] active:scale-95 sm:h-12 sm:w-12"
                aria-label="Siguiente obra"
              >
                <ChevronRight size={22} />
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="px-3 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-5xl">

          {/* TÍTULO */}
          <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4">

            <div className="h-10 w-1 shrink-0 rounded-full bg-[#D8B46A] sm:h-12" />

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D8B46A] sm:text-sm">
                Obra seleccionada
              </p>

              <h2 className="text-2xl font-bold text-[#123A63] sm:text-3xl">
                {obraSeleccionada}
              </h2>
            </div>

          </div>

          {/* LISTADO */}
          <div className="space-y-3 sm:space-y-4">

            {contenidos.map((contenido, index) => {

              const nombre = Object.keys(contenido)[0];
              const valor = contenido[nombre];

              /*
                CASO 1:
                {
                  "Soprano 1": "1-soprano-blancas.mp3"
                }

                CASO 2:
                {
                  "Aleluya (Agustín Sánchez)": [
                    {
                      "Aleluya ALTO + ÓRGANO": "Aleluya ALTO + ÓRGANO.mp3"
                    }
                  ]
                }
              */

              // --------------------------------------------------
              // SECCIÓ AMB DIVERSES PISTES
              // --------------------------------------------------

              if (Array.isArray(valor)) {
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
                  >

                    {/* TÍTOL DE LA SECCIÓ */}
                    <div className="bg-[#123A63] px-4 py-4 text-white sm:px-6">
                      <div className="flex items-center gap-3">

                        <Music
                          size={20}
                          className="shrink-0 text-[#D8B46A]"
                        />

                        <h3 className="text-base font-bold sm:text-lg">
                          {nombre}
                        </h3>

                      </div>
                    </div>

                    {/* ÀUDIOS */}
                    <div className="divide-y divide-slate-100">

                      {valor.map((audio, audioIndex) => {

                        const nombreAudio = Object.keys(audio)[0];
                        const archivo = audio[nombreAudio];

                        const urlAudio = obtenerAudio(archivo);

                        return (
                          <div
                            key={audioIndex}
                            className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
                          >

                            {/* NOM */}
                            <div className="flex min-w-0 items-center gap-3">

                              <Music
                                size={18}
                                className="shrink-0 text-[#123A63]"
                              />

                              <span className="text-sm font-medium text-slate-700 sm:text-base">
                                {nombreAudio}
                              </span>

                            </div>

                            {/* CONTROLS */}
                            <div className="flex items-center gap-2">

                              {urlAudio ? (
                                <>
                                  <audio
                                    controls
                                    src={urlAudio}
                                    className="h-9 max-w-full"
                                  />

                                  <a
                                    href={urlAudio}
                                    download={archivo}
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#123A63] text-white transition hover:bg-[#1B4E7A]"
                                    title="Descargar audio"
                                  >
                                    <Download size={17} />
                                  </a>
                                </>
                              ) : (
                                <span className="text-xs text-red-500">
                                  Audio no encontrado
                                </span>
                              )}

                            </div>

                          </div>
                        );
                      })}

                    </div>

                  </div>
                );
              }

              // --------------------------------------------------
              // ÀUDIO NORMAL
              // --------------------------------------------------

              const urlAudio = obtenerAudio(valor);

              return (
                <article
                  key={index}
                  className="rounded-2xl bg-white px-4 py-4 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:shadow-lg sm:px-6 sm:py-5"
                >

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    {/* NOM */}
                    <div className="flex min-w-0 items-center gap-3">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#123A63]/10">

                        <Music
                          size={20}
                          className="text-[#123A63]"
                        />

                      </div>

                      <h3 className="text-sm font-bold leading-snug text-[#123A63] sm:text-base">
                        {nombre}
                      </h3>

                    </div>

                    {/* AUDIO */}
                    <div className="flex items-center gap-2">

                      {urlAudio ? (
                        <>
                          <audio
                            controls
                            src={urlAudio}
                            className="h-9 max-w-full"
                          />

                          <a
                            href={urlAudio}
                            download={valor}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#123A63] text-white transition hover:bg-[#1B4E7A]"
                            title="Descargar audio"
                          >
                            <Download size={17} />
                          </a>
                        </>
                      ) : (
                        <span className="text-xs text-red-500">
                          Audio no encontrado
                        </span>
                      )}

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

          {/* SIN CONTENIDO */}
          {contenidos.length === 0 && (
            <div className="rounded-2xl bg-white px-5 py-10 text-center shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500 sm:text-base">
                No hay audios disponibles para esta obra.
              </p>
            </div>
          )}

        </div>
      </section>

    </main>
  );
};
