import { PhoneCallIcon } from "lucide-react";
import data from "../data/telefonos_data.json";

export const Telefonos = () => {
  const participants = data.CongresoInformacion.flatMap((item) =>
    Object.entries(item).map(([title, info]) => ({
      title,
      telefono: info[0]?.telefono ?? "",
    })),
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-[#123A63] px-4 py-10 text-white sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Telefonos
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:mt-4 sm:text-lg">
            Telefonos de interes para el congreso
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {participants.map((participant) => (
              <article
                key={participant.title}
                className="group flex min-h-[120px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                {/* Títol */}
                <h2 className="text-lg font-bold leading-snug text-slate-800">
                  {participant.title}
                </h2>

                {/* Informació */}
                <div className="mt-auto space-y-3">
                  {participant.telefono && (
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <PhoneCallIcon className="h-4 w-4 shrink-0 text-[#123A63]" />
                      <span>{participant.telefono}</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
