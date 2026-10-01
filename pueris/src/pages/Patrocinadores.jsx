import patrocinadoresData from "../data/data_sponsors.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useState } from "react";

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
  const [loadedImages, setLoadedImages] = useState(0);

  const sponsorsConImagen = sponsors.filter(
    (patrocinador) => patrocinador.imagen
  );

  const totalImages = sponsorsConImagen.length;

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  const isLoading = loadedImages < totalImages;

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="bg-[#123A63] px-4 py-10 text-white sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Patrocinadores del Congreso
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:mt-4 sm:text-lg">
            Consulta todos los patrocinadores que hacen posible el Congreso
          </p>
        </div>
      </section>

      {isLoading && (
        <div className="flex min-h-[50vh] flex-col items-center justify-center">
          <DotLottieReact
            src="https://lottie.host/a3480378-556b-4d3b-ade0-290141f24d5f/rY7ilXbX4z.lottie"
            loop
            autoplay
            style={{
              width: "200px",
              height: "200px",
            }}
          />

          <p className="mt-2 text-slate-500">
            Cargando imagenes...
          </p>
        </div>
      )}

      <div
        className={
          isLoading ? "invisible h-0 overflow-hidden" : "visible"
        }
      >
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
                    onLoad={handleImageLoad}
                    onError={handleImageLoad}
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
      </div>
    </main>
  );
};