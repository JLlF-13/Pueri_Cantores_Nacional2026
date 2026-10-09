import React, { useState } from "react";
import organista from "../data/img/AboutUs/organista.jpg";
import FEPC from "../data/img/AboutUs/FEPC.jpg";
import Cris from "../data/img/AboutUs/Cris.jpg";
import Bisbe from "../data/img/AboutUs/Bisbe.jpg";
import Quinteto from "../data/img/AboutUs/Quintet.jpg";
import Jose from "../data/img/AboutUs/Jose.jpg";
import Victor from "../data/img/AboutUs/Victor.jpg";
import Joan from "../data/img/AboutUs/Joan.jpg";
import Junta from "../data/img/AboutUs/Junta.jpg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Github, Linkedin } from "lucide-react";

export const AboutUS = () => {
  const totalImages = 8;
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
                Federación Española de Pueri Cantores
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

        {/* BISBE */}
        <section className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4">
              <div className="h-10 w-1 shrink-0 rounded-full bg-[#D8B46A] sm:h-12" />

              <h2 className="text-2xl font-bold text-[#123A63] sm:text-3xl">
                Obispo de Menorca: Gerard Villalonga
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

        {/* JUNTA MENORCA */}
        <section className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4">
              <div className="h-10 w-1 shrink-0 rounded-full bg-[#D8B46A] sm:h-12" />

              <h2 className="text-2xl font-bold text-[#123A63] sm:text-3xl">
                Junta de Menorca
              </h2>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <img
                src={Junta}
                alt="Junta Menorca"
                onLoad={handleImageLoad}
                className="h-auto max-h-[500px] w-full rounded-xl object-contain"
              />
            </div>
          </div>
        </section>

        {/* COMPOSITOR DEL HIMNO */}
        <section className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4">
              <div className="h-10 w-1 shrink-0 rounded-full bg-[#D8B46A] sm:h-12" />

              <h2 className="text-2xl font-bold text-[#123A63] sm:text-3xl">
                Compositor del Himno: Victor Estapé
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
        {/* PROGRAMADOR WEB */}
        <section className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4">
              <div className="h-10 w-1 shrink-0 rounded-full bg-[#D8B46A] sm:h-12" />

              <h2 className="text-2xl font-bold text-[#123A63] sm:text-3xl">
                Programador WEB: Joan Lluch Fonoll
              </h2>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/JLlF-13"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-[#123A63] transition hover:text-[#1B4E7A]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.15 1.17A10.9 10.9 0 0 1 12 6.1c.97 0 1.94.13 2.85.38 2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.24 2.74.12 3.03.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.67.41.36.77 1.07.77 2.16v3.2c0 .31.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/joan-lluch-fonoll-007796378/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-[#123A63] transition hover:text-[#1B4E7A]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 .02.78.02 1.76v20.48c0 .98.78 1.76 1.76 1.76h20.44c.98 0 1.76-.78 1.76-1.76V1.76C23.98.78 23.2 0 22.22 0Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <img
                src={Joan}
                alt="WEB"
                onLoad={handleImageLoad}
                className="h-auto max-h-[500px] w-full rounded-xl object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};