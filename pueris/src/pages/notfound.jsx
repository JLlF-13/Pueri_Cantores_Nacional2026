import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <section className="w-full max-w-xl rounded-2xl bg-white p-8 text-center shadow-lg ring-1 ring-slate-200 sm:p-12">

        <h1 className="text-7xl font-bold text-[#123A63] sm:text-8xl">
          404
        </h1>

        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          La página que buscas no existe.
        </p>

        <Link
          to="/Pueri_Cantores_Nacional2026/"
          className="mt-8 inline-block rounded-xl bg-[#123A63] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B4E7A] active:scale-95 sm:text-base"
        >
          Inicio
        </Link>

      </section>
    </main>
  );
};
