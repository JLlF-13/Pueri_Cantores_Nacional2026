import { useState } from "react";
import { Clock3, ChevronLeft, ChevronRight } from "lucide-react";
import data from "../data/data.json";

export const Home = () => {
  const dias = data.CongresoInformacion;

  // Detectar el dia actual
  const hoy = new Date();
  const diaActual = hoy.getDate();
  const mesActual = hoy.getMonth() + 1;

  let diaInicial = "10 Octubre";

  if (mesActual === 10) {
    if (diaActual === 11) {
      diaInicial = "11 Octubre";
    } else if (diaActual === 12) {
      diaInicial = "12 Octubre";
    }
  }

  const [diaSeleccionado, setDiaSeleccionado] = useState(diaInicial);

  // Activitats del dia seleccionat
  const diaData = dias.find(
    (dia) => Object.keys(dia)[0] === diaSeleccionado
  );

  const actividades = diaData?.[diaSeleccionado] || [];

  // Índex del dia actual
  const indiceDia = dias.findIndex(
    (dia) => Object.keys(dia)[0] === diaSeleccionado
  );

  // Canviar de dia
  const cambiarDia = (direccion) => {
    let nuevoIndice = indiceDia + direccion;

    if (nuevoIndice < 0) {
      nuevoIndice = dias.length - 1;
    }

    if (nuevoIndice >= dias.length) {
      nuevoIndice = 0;
    }

    const nuevoDia = Object.keys(dias[nuevoIndice])[0];

    setDiaSeleccionado(nuevoDia);
  };

  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="bg-[#123A63] px-4 py-10 text-white sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl text-center">

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B46A] sm:text-sm sm:tracking-[0.25em]">
            Congreso Nacional 2026
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Programa del Congreso
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:mt-4 sm:text-lg">
            Consulta todas las actividades y horarios del Congreso Nacional
            de Pueri Cantores.
          </p>

        </div>
      </section>

      {/* SELECTOR DE DÍAS */}
      <section className="px-3 py-5 sm:px-6 sm:py-8">
        <div className="mx-auto max-w-5xl">

          <div className="rounded-2xl bg-white p-2 shadow-lg ring-1 ring-slate-200 sm:p-4">

            <div className="flex items-center gap-1.5 sm:gap-4">

              {/* ANTERIOR */}
              <button
                onClick={() => cambiarDia(-1)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#123A63] text-white transition hover:bg-[#1B4E7A] active:scale-95 sm:h-12 sm:w-12"
                aria-label="Día anterior"
              >
                <ChevronLeft size={22} />
              </button>

              {/* DÍAS */}
              <div className="grid min-w-0 flex-1 grid-cols-3 gap-1.5 sm:gap-3">

                {dias.map((dia) => {
                  const nombreDia = Object.keys(dia)[0];
                  const activo = nombreDia === diaSeleccionado;

                  return (
                    <button
                      key={nombreDia}
                      onClick={() => setDiaSeleccionado(nombreDia)}
                      className={`min-w-0 rounded-xl px-1 py-3 text-xs font-bold transition duration-300 sm:px-4 sm:py-5 sm:text-base ${
                        activo
                          ? "bg-[#123A63] text-white shadow-md"
                          : "bg-slate-100 text-[#123A63] hover:bg-[#123A63]/10"
                      }`}
                    >
                      {nombreDia}
                    </button>
                  );
                })}

              </div>

              {/* SIGUIENTE */}
              <button
                onClick={() => cambiarDia(1)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#123A63] text-white transition hover:bg-[#1B4E7A] active:scale-95 sm:h-12 sm:w-12"
                aria-label="Día siguiente"
              >
                <ChevronRight size={22} />
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* PROGRAMA */}
      <section className="px-3 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-5xl">

          {/* TÍTULO DEL DÍA */}
          <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4">

            <div className="h-10 w-1 shrink-0 rounded-full bg-[#D8B46A] sm:h-12" />

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D8B46A] sm:text-sm">
                Programa
              </p>

              <h2 className="text-2xl font-bold text-[#123A63] sm:text-3xl">
                {diaSeleccionado}
              </h2>
            </div>

          </div>

          {/* ACTIVIDADES */}
          <div className="space-y-3 sm:space-y-4">

            {actividades.map((actividad, index) => {
              const titulo =
                actividad.actividadTitulo || actividad.actividad;

              return (
                <article
                  key={index}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:shadow-lg"
                >

                  <div className="flex flex-col sm:flex-row">

                    {/* HORA */}
                    <div className="flex items-center gap-3 bg-[#123A63] px-4 py-3 text-white sm:w-44 sm:flex-col sm:items-start sm:justify-center sm:px-5 sm:py-5">

                      <Clock3
                        size={19}
                        className="shrink-0 text-[#D8B46A]"
                      />

                      <div className="text-sm font-bold sm:text-base">
                        {actividad.horaInicio}

                        {actividad.horaFin && (
                          <span className="font-normal text-blue-100">
                            {" "}
                            - {actividad.horaFin}
                          </span>
                        )}
                      </div>

                    </div>

                    {/* CONTENIDO */}
                    <div className="px-4 py-4 sm:px-6 sm:py-5">

                      <h3 className="text-base font-bold leading-snug text-[#123A63] sm:text-xl">
                        {titulo}
                      </h3>

                      {actividad.informacionAdicional && (
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                          {actividad.informacionAdicional}
                        </p>
                      )}

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

          {/* SENSE ACTIVITATS */}
          {actividades.length === 0 && (
            <div className="rounded-2xl bg-white px-5 py-10 text-center shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500 sm:text-base">
                No hay actividades programadas para este día.
              </p>
            </div>
          )}

        </div>
      </section>

    </main>
  );
};
