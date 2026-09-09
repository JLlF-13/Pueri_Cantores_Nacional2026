import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#123A63] text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Pueri Cantores"
            className="h-12 w-auto"
          />

          <div className="hidden sm:block">
            <h1 className="text-lg font-bold tracking-wide">
              Pueri Cantores
            </h1>
            <p className="text-sm text-[#D8B46A]">
              Congreso Nacional 2026
            </p>
          </div>
        </a>

        {/* Menú escritorio */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          <Link
            to="/Pueri_Cantores_Nacional2026/"
            className="transition duration-300 hover:text-[#D8B46A]"
          >
            Inicio
          </Link>

          <Link
            to="/Pueri_Cantores_Nacional2026/map"
            className="transition duration-300 hover:text-[#D8B46A]"
          >
            Mapa
          </Link>

          <Link
            to="/Pueri_Cantores_Nacional2026/map"
            className="transition duration-300 hover:text-[#D8B46A]"
          >
            Participantes
          </Link>
        </nav>

        {/* Botón móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 transition hover:bg-[#1B4E7A] md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav className="border-t border-[#D8B46A]/30 bg-[#123A63] md:hidden">
          <a
            href="/"
            className="block px-6 py-4 transition hover:bg-[#1B4E7A] hover:text-[#D8B46A]"
            onClick={() => setOpen(false)}
          >
            Inicio
          </a>

          <a
            href="/mapa"
            className="block px-6 py-4 transition hover:bg-[#1B4E7A] hover:text-[#D8B46A]"
            onClick={() => setOpen(false)}
          >
            Mapa
          </a>
        </nav>
      )}
    </header>
  );
};