import { useState } from "react";
import organista from "../data/img/AboutUs/organista.jpg";
import FEPC from "../data/img/AboutUs/FEPC.jpg";
import Cris from "../data/img/AboutUs/Cris.jpg";
import Bisbe from "../data/img/AboutUs/Bisbe.jpg";
import Quinteto from "../data/img/AboutUs/Quintet.jpg";

export const AboutUS = () => {

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="bg-[#123A63] px-4 py-10 text-white sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Quiénes Somos
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:mt-4 sm:text-lg">
            Conoce a los principales colaboradores del Congreso.
          </p>
        </div>
      </section>

      {/* FEPC */}
      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4">
            <div className="h-10 w-1 shrink-0 rounded-full bg-[#D8B46A] sm:h-12" />

            <h2 className="text-2xl font-bold text-[#123A63] sm:text-3xl">
              FEPC
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <img
              src={FEPC}
              alt="FEPC"
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
              Creador del Himno
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <img
              src={FEPC}
              alt="Creador Himne"
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
              Obispo
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <img
              src={Bisbe}
              alt="Bisbe"
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
                  src={Cris}
                  alt="Músico 3"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="px-4 py-3 text-center">
                <p className="text-sm font-bold text-[#123A63]">
                  Director
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  ?                
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="flex aspect-square items-center justify-center bg-slate-100 p-3">
                <img
                  src={Quinteto}
                  alt="Quineto"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="px-4 py-3 text-center">
                <p className="text-sm font-bold text-[#123A63]">
                  Quinteto
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>
    </main>
  );
};
