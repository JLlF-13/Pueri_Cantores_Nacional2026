import React, { useState } from "react";
import organista from "../data/img/AboutUs/organista.jpg";
import FEPC from "../data/img/AboutUs/FEPC.jpg";
import Cris from "../data/img/AboutUs/Cris.jpg";
import Bisbe from "../data/img/AboutUs/Bisbe.jpg";
import Quinteto from "../data/img/AboutUs/Quintet.jpg";
import Jose from "../data/img/AboutUs/Jose.jpg";
import Victor from "../data/img/AboutUs/Victor.jpg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const AboutUS = () => {
  const totalImages = 7;
  const [loadedImages, setLoadedImages] = useState(0);

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
            Quiénes Somos
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:mt-4 sm:text-lg">
            Conoce a los principales organizadores del Congreso.
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
      <div className={isLoading ? "invisible h-0 overflow-hidden" : "visible"}>
        {/* FEPC */}
        <section className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4">
              <div className="h-10 w-1 shrink-0 rounded-full bg-[#D8B46A] sm:h-12" />

              <h2 className="text-2xl font-bold text-[#123A63] sm:text-3xl">
                Federación Española de Puericantores
              </h2>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <img
                src={FEPC}
                alt="FEPC"
                onLoad={handleImageLoad}
                className="h-auto max-h-[500px] w-full rounded-xl object-contain"
              />
            </div>
          </div>
        </section>

        {/* CREADOR DEL HIMNO */}
        <section className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4">
              <div className="h-10 w-1 shrink-0 rounded-full bg-[#D8B46A] sm:h-12" />

              <h2 className="text-2xl font-bold text-[#123A63] sm:text-3xl">
                Creador del Himno: Victor Estapé
              </h2>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <img
                src={Victor}
                alt="Creador Himne"
                onLoad={handleImageLoad}
                className="h-auto max-h-[500px] w-full rounded-xl object-contain"
              />
            </div>
          </div>
        </section>

        {/* BISBE */}
        <section className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4">
              <div className="h-10 w-1 shrink-0 rounded-full bg-[#D8B46A] sm:h-12" />

              <h2 className="text-2xl font-bold text-[#123A63] sm:text-3xl">
                Obispo de Menorca
              </h2>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <img
                src={Bisbe}
                alt="Bisbe"
                onLoad={handleImageLoad}
                className="h-auto max-h-[500px] w-full rounded-xl object-contain"
              />
            </div>
          </div>
        </section>

        {/* MÚSICOS */}
        <section className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-5xl">
            {/* TÍTULO */}
            <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
              <div className="h-10 w-1 shrink-0 rounded-full bg-[#D8B46A] sm:h-12" />

              <h2 className="text-2xl font-bold text-[#123A63] sm:text-3xl">
                Músicos
              </h2>
            </div>

            {/* FOTOS */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <div className="flex aspect-square items-center justify-center bg-slate-100 p-3">
                  <img
                    src={organista}
                    alt="Ulyana Popovych"
                    onLoad={handleImageLoad}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="px-4 py-3 text-center">
                  <p className="text-sm font-bold text-[#123A63]">
                    Ulyana Popovych
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Organista oficial
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <div className="flex aspect-square items-center justify-center bg-slate-100 p-3">
                  <img
                    src={Cris}
                    alt="Cristina Álvarez"
                    onLoad={handleImageLoad}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="px-4 py-3 text-center">
                  <p className="text-sm font-bold text-[#123A63]">
                    Cristina Álvarez
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Directora
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <div className="flex aspect-square items-center justify-center bg-slate-100 p-3">
                  <img
                    src={Jose}
                    alt="Músico 3"
                    onLoad={handleImageLoad}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="px-4 py-3 text-center">
                  <p className="text-sm font-bold text-[#123A63]">
                    Jose Antonio Pérez
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Responsable Musical
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <div className="flex aspect-square items-center justify-center bg-slate-100 p-3">
                  <img
                    src={Quinteto}
                    alt="Quinteto de metales"
                    onLoad={handleImageLoad}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="px-3 py-3 text-center">
                  <p className="text-[11px] font-bold leading-relaxed text-[#123A63]">
                    Celia Morales López — Trombón<br />
                    Carles Taroncher Ramos — Trompa<br />
                    Magí Ferrer Bella — Tuba<br />
                    Nicolás Calcagno Raposo — Trompeta<br />
                    Júlia Garcia Pons — Trompeta
                  </p>

                  <p className="mt-2 text-xs font-medium text-slate-500">
                    Quinteto de Metales
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};