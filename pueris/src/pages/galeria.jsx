import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import data from "../data/galeria_data.json";

// Carregar totes les imatges de data/img
const imagenesImportadas = import.meta.glob(
  "../data/img/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// Buscar una imatge pel seu nom
const obtenerImagen = (nombreArchivo) => {
  const ruta = Object.keys(imagenesImportadas).find((ruta) =>
    ruta.endsWith(`/${nombreArchivo}`)
  );

  return ruta ? imagenesImportadas[ruta] : null;
};

export const Galeria = () => {
  const galerias = data.Galeria;

  const [galeriaSeleccionada, setGaleriaSeleccionada] = useState(0);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0);

  // Galeria actual
  const galeriaActual = galerias[galeriaSeleccionada];

  const tituloGaleria = galeriaActual
    ? Object.keys(galeriaActual)[0]
    : "";

  const nombresImagenes = galeriaActual
    ? galeriaActual[tituloGaleria]
    : [];

  // Canviar de galeria
  const cambiarGaleria = (indice) => {
    setGaleriaSeleccionada(indice);
    setImagenSeleccionada(0);
  };

  // Imatge anterior
  const anterior = () => {
    setImagenSeleccionada((actual) =>
      actual === 0 ? nombresImagenes.length - 1 : actual - 1
    );
  };

  // Imatge següent
  const siguiente = () => {
    setImagenSeleccionada((actual) =>
      actual === nombresImagenes.length - 1 ? 0 : actual + 1
    );
  };

  const nombreImagenActual = nombresImagenes[imagenSeleccionada];
  const imagenActual = obtenerImagen(nombreImagenActual);

  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="bg-[#123A63] px-4 py-10 text-white sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl text-center">

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Galería
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:mt-4 sm:text-lg">
            Recuerdos y momentos del Congreso Nacional de Pueri Cantores.
          </p>

        </div>
      </section>

      {/* SELECTOR DE GALERÍAS */}
      <section className="px-3 py-5 sm:px-6 sm:py-8">
        <div className="mx-auto max-w-5xl">

          <div className="rounded-2xl bg-white p-2 shadow-lg ring-1 ring-slate-200 sm:p-4">

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">

              {galerias.map((galeria, index) => {
                const titulo = Object.keys(galeria)[0];
                const activa = index === galeriaSeleccionada;

                return (
                  <button
                    key={titulo}
                    onClick={() => cambiarGaleria(index)}
                    className={`rounded-xl px-3 py-3 text-xs font-bold transition duration-300 sm:px-4 sm:py-4 sm:text-sm ${
                      activa
                        ? "bg-[#123A63] text-white shadow-md"
                        : "bg-slate-100 text-[#123A63] hover:bg-[#123A63]/10"
                    }`}
                  >
                    {titulo}
                  </button>
                );
              })}

            </div>

          </div>

        </div>
      </section>

      {/* CARRUSEL */}
      <section className="px-3 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-5xl">

          {/* TÍTULO */}
          <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4">

            <div className="h-10 w-1 shrink-0 rounded-full bg-[#D8B46A] sm:h-12" />

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D8B46A] sm:text-sm">
                Galería
              </p>

              <h2 className="text-2xl font-bold text-[#123A63] sm:text-3xl">
                {tituloGaleria}
              </h2>
            </div>

          </div>

          {/* CARRUSEL */}
          {nombresImagenes.length > 0 ? (
            <>
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200">

                {/* IMAGEN */}
                <div className="relative flex aspect-video items-center justify-center bg-slate-200">

                  {imagenActual ? (
                    <img
                      src={imagenActual}
                      alt={`${tituloGaleria} - imagen ${imagenSeleccionada + 1}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <p className="text-sm text-slate-400">
                      Imagen no encontrada
                    </p>
                  )}

                  {/* ANTERIOR */}
                  {nombresImagenes.length > 1 && (
                    <button
                      onClick={anterior}
                      className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#123A63] shadow-md transition hover:bg-white active:scale-95 sm:left-5 sm:h-12 sm:w-12"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft size={24} />
                    </button>
                  )}

                  {/* SIGUIENTE */}
                  {nombresImagenes.length > 1 && (
                    <button
                      onClick={siguiente}
                      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#123A63] shadow-md transition hover:bg-white active:scale-95 sm:right-5 sm:h-12 sm:w-12"
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight size={24} />
                    </button>
                  )}

                </div>

                {/* INFORMACIÓN */}
                <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">

                  <div>
                    <p className="text-sm font-semibold text-[#123A63]">
                      {tituloGaleria}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-[#123A63] sm:text-sm">
                    {imagenSeleccionada + 1} / {nombresImagenes.length}
                  </span>

                </div>

              </div>

              {/* MINIATURAS */}
              {nombresImagenes.length > 1 && (
                <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:grid-cols-5 sm:gap-3">

                  {nombresImagenes.map((nombreImagen, index) => {

                    const imagen = obtenerImagen(nombreImagen);
                    const activa = index === imagenSeleccionada;

                    return (
                      <button
                        key={nombreImagen}
                        onClick={() => setImagenSeleccionada(index)}
                        className={`aspect-video overflow-hidden rounded-xl transition ${
                          activa
                            ? "ring-2 ring-[#123A63] ring-offset-2"
                            : "opacity-70 hover:opacity-100"
                        }`}
                        aria-label={`Ver imagen ${index + 1}`}
                      >

                        {imagen ? (
                          <img
                            src={imagen}
                            alt={`${tituloGaleria} - miniatura ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-slate-200">
                            <span className="text-xs text-slate-400">
                              {index + 1}
                            </span>
                          </div>
                        )}

                      </button>
                    );

                  })}

                </div>
              )}

            </>
          ) : (
            <div className="rounded-2xl bg-white px-5 py-10 text-center shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500 sm:text-base">
                No hay imágenes disponibles para esta galería.
              </p>
            </div>
          )}

        </div>
      </section>

    </main>
  );
};