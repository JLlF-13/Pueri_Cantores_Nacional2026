import {
  ExternalLink,
  Globe,
  Link2Off,
  MapPin,
} from "lucide-react";
import data from "../data/participantes_data.json";

export const Participants = () => {
  const participants = data.CongresoInformacion.flatMap((item) =>
    Object.entries(item).map(([title, info]) => ({
      title,
      localidad: info[0]?.localidad ?? "",
      web: info[0]?.web ?? "",
    }))
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-[#123A63] px-4 py-10 text-white sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Participantes
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:mt-4 sm:text-lg">
            Consulta los participantes del Congreso.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {participants.map((participant) => (
              <article
                key={participant.title}
                className="group flex min-h-[220px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                {/* Icona */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#123A63] transition-colors group-hover:bg-[#123A63] group-hover:text-white">
                  <Globe className="h-6 w-6" />
                </div>

                {/* Títol */}
                <h2 className="text-lg font-bold leading-snug text-slate-800">
                  {participant.title}
                </h2>

                {/* Informació */}
                <div className="mt-auto space-y-3 pt-6">
                  {participant.localidad && (
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPin className="h-4 w-4 shrink-0 text-[#123A63]" />
                      <span>{participant.localidad}</span>
                    </div>
                  )}

                  {participant.web ? (
                    <a
                      href={participant.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-[#123A63] transition-colors hover:text-blue-700 hover:underline"
                    >
                      <ExternalLink className="h-4 w-4 shrink-0" />
                      <span className="truncate">Página web</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Link2Off className="h-4 w-4 shrink-0" />
                      <span>Web no disponible</span>
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
