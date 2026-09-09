import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import data from "../data/map_data.json";


// =====================================================
// ICONA PERSONALITZADA
// =====================================================

const markerIcon = L.divIcon({
  className: "custom-marker",
  html: `
    <div style="
      width: 32px;
      height: 32px;
      background: #123A63;
      border: 3px solid white;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 2px 6px rgba(0,0,0,0.35);
    ">
      <div style="
        width: 10px;
        height: 10px;
        background: #D8B46A;
        border-radius: 50%;
        position: absolute;
        top: 8px;
        left: 8px;
      "></div>
    </div>
  `,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});


// =====================================================
// AJUSTAR EL MAPA
// =====================================================

const AjustarMapa = ({ puntos }) => {

  const map = useMap();

  useEffect(() => {

    const timeout = setTimeout(() => {

      // Important per evitar el problema dels tiles
      map.invalidateSize();

      if (!puntos || puntos.length === 0) {
        return;
      }

      const coordenadas = puntos
        .map((punto) => [
          Number(punto.latitud),
          Number(punto.longitud),
        ])
        .filter(
          ([lat, lng]) =>
            Number.isFinite(lat) &&
            Number.isFinite(lng)
        );

      if (coordenadas.length === 0) {
        return;
      }

      if (coordenadas.length === 1) {
        map.setView(coordenadas[0], 16);
        return;
      }

      const bounds = L.latLngBounds(coordenadas);

      map.fitBounds(bounds, {
        padding: [50, 50],
        maxZoom: 16,
      });

    }, 300);

    return () => clearTimeout(timeout);

  }, [map, puntos]);

  return null;
};


// =====================================================
// MAPA
// =====================================================

export const Map = () => {

  // ---------------------------------------------------
  // CATEGORIA
  // ---------------------------------------------------

  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState("Congreso");


  // ---------------------------------------------------
  // OBTENER DATOS
  // ---------------------------------------------------

  const puntosCongreso =
    data.CongresoInformacion.find(
      (grupo) =>
        grupo["Puntos de Interes del Congreso"]
    )?.["Puntos de Interes del Congreso"] || [];


  const puntosGeneral =
    data.CongresoInformacion.find(
      (grupo) =>
        grupo["Puntos de Interes General"]
    )?.["Puntos de Interes General"] || [];


  const puntosTurismo =
    data.CongresoInformacion.find(
      (grupo) =>
        grupo["Turismo"]
    )?.["Turismo"] || [];


  // ---------------------------------------------------
  // PUNTOS A MOSTRAR
  // ---------------------------------------------------

  let puntos = [];

  if (categoriaSeleccionada === "Congreso") {
    puntos = puntosCongreso;
  }

  if (categoriaSeleccionada === "General") {
    puntos = puntosGeneral;
  }

  if (categoriaSeleccionada === "Turismo") {
    puntos = puntosTurismo;
  }


  // ===================================================
  // RENDER
  // ===================================================

  return (
    <main className="min-h-screen bg-slate-50">


      {/* =================================================
          CABECERA
      ================================================= */}

      <section className="bg-[#123A63] px-4 py-10 text-white sm:px-6 sm:py-14">

        <div className="mx-auto max-w-7xl text-center">

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Mapa
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:mt-4 sm:text-lg">
            Consulta los puntos de interés del Congreso.
          </p>

        </div>

      </section>


      {/* =================================================
          SELECTOR
      ================================================= */}

      <section className="px-3 py-5 sm:px-6 sm:py-8">

        <div className="mx-auto max-w-5xl">

          <div className="rounded-2xl bg-white p-2 shadow-lg ring-1 ring-slate-200 sm:p-4">

            <div className="grid grid-cols-3 gap-2 sm:gap-3">


              {/* CONGRESO */}

              <button
                onClick={() =>
                  setCategoriaSeleccionada("Congreso")
                }
                className={`rounded-xl px-2 py-3 text-xs font-bold transition duration-300 sm:py-4 sm:text-base ${
                  categoriaSeleccionada === "Congreso"
                    ? "bg-[#123A63] text-white shadow-md"
                    : "bg-slate-100 text-[#123A63] hover:bg-[#123A63]/10"
                }`}
              >
                Congreso
              </button>


              {/* GENERAL */}

              <button
                onClick={() =>
                  setCategoriaSeleccionada("General")
                }
                className={`rounded-xl px-2 py-3 text-xs font-bold transition duration-300 sm:py-4 sm:text-base ${
                  categoriaSeleccionada === "General"
                    ? "bg-[#123A63] text-white shadow-md"
                    : "bg-slate-100 text-[#123A63] hover:bg-[#123A63]/10"
                }`}
              >
                General
              </button>


              {/* TURISMO */}

              <button
                onClick={() =>
                  setCategoriaSeleccionada("Turismo")
                }
                className={`rounded-xl px-2 py-3 text-xs font-bold transition duration-300 sm:py-4 sm:text-base ${
                  categoriaSeleccionada === "Turismo"
                    ? "bg-[#123A63] text-white shadow-md"
                    : "bg-slate-100 text-[#123A63] hover:bg-[#123A63]/10"
                }`}
              >
                Turismo
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          MAPA
      ================================================= */}

      <section className="px-3 pb-12 sm:px-6 sm:pb-16">

        <div className="mx-auto max-w-5xl">

          <div
            className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200"
            style={{
              height: "600px",
              width: "100%",
            }}
          >

            <MapContainer
              center={[40.001, 3.835]}
              zoom={15}
              scrollWheelZoom={true}
              style={{
                height: "100%",
                width: "100%",
              }}
            >

              {/* OPENSTREETMAP */}

              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />


              {/* AJUSTAR MAPA */}

              <AjustarMapa puntos={puntos} />


              {/* =================================================
                  MARCADORES
              ================================================= */}

              {puntos.map((punto, index) => {

                const lat = Number(punto.latitud);
                const lng = Number(punto.longitud);

                if (
                  !Number.isFinite(lat) ||
                  !Number.isFinite(lng)
                ) {
                  return null;
                }

                return (

                  <Marker
                    key={`${punto.nom}-${index}`}
                    position={[lat, lng]}
                    icon={markerIcon}
                  >

                    <Popup>

                      <div
                        style={{
                          minWidth: "180px",
                          textAlign: "center",
                        }}
                      >

                        <h3
                          style={{
                            color: "#123A63",
                            fontWeight: "700",
                            fontSize: "15px",
                            marginBottom: "8px",
                          }}
                        >
                          {punto.nom}
                        </h3>


                        <a
                          href={punto.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#123A63",
                            fontWeight: "600",
                            textDecoration: "underline",
                            fontSize: "13px",
                          }}
                        >
                          Ver en OpenStreetMap
                        </a>

                      </div>

                    </Popup>

                  </Marker>

                );
              })}

            </MapContainer>

          </div>

        </div>

      </section>

    </main>
  );
};
