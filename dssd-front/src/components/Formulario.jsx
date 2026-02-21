import React, { useState } from "react";

export default function Formulario() {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [nombreOrganizacion, setNombreOrganizacion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [descripcionProyecto, setDescripcionProyecto] = useState("");
  const [presupuesto, setPresupuesto] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const opcionesPresupuesto = [
    { label: "Menos de $1,000 MXN", value: "Menos de $1,000 MXN" },
    { label: "$1,000 - $3,000 MXN", value: "$1,000 - $3,000 MXN" },
    { label: "$3,000 - $10,000 MXN", value: "$3,000 - $10,000 MXN" },
    { label: "$10,000 - $20,000 MXN", value: "$10,000 - $20,000 MXN"},
    { label: "Más de $20,000 MXN", value: "Más de $20,000 MXN" },
  ];

  const inputStyle =
    "peer w-full bg-neutral-800 border border-neutral-500 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition";

  const labelStyle =
    "absolute left-4 top-2 text-sm text-gray-400 transition-all duration-200 " +
    "peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 " +
    "peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-400 " +
    "pointer-events-none";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const request = {
        nombre: nombreCompleto,
        nombre_organizacion: nombreOrganizacion,
        telefono: telefono,
        email: email,
        descripcion_proyecto: descripcionProyecto,
        presupuesto: presupuesto,
      };

      const response = await fetch("http://127.0.0.1:8000/solicitud", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setSuccess(true);

      // limpiar campos
      setNombreCompleto("");
      setNombreOrganizacion("");
      setTelefono("");
      setEmail("");
      setDescripcionProyecto("");
      setPresupuesto("");
    } catch (err) {
      setError(err.message || "Ocurrió un error al enviar el formulario.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-neutral-200">
      <div className="relative">
        <input
          type="text"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
          required
          placeholder=" "
          className={inputStyle}
        />
        <label className={labelStyle}>Nombre completo</label>
      </div>

      <div className="relative">
        <input
          type="text"
          value={nombreOrganizacion}
          onChange={(e) => setNombreOrganizacion(e.target.value)}
          placeholder=" "
          className={inputStyle}
        />
        <label className={labelStyle}>Organización</label>
      </div>

      <div className="relative">
        <input
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder=" "
          className={inputStyle}
        />
        <label className={labelStyle}>Teléfono</label>
      </div>

      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder=" "
          className={inputStyle}
        />
        <label className={labelStyle}>Email</label>
      </div>

      <div className="relative">
        <textarea
          value={descripcionProyecto}
          onChange={(e) => setDescripcionProyecto(e.target.value)}
          required
          rows="4"
          placeholder=" "
          className={`${inputStyle} resize-none`}
        />
        <label className={labelStyle}>Descripción del proyecto</label>
      </div>

      <div className="relative">
        <select
          value={presupuesto}
          onChange={(e) => setPresupuesto(e.target.value)}
          required
          className={`${inputStyle} appearance-none`}
        >
          <option value="" className="bg-neutral-900">
            Selecciona un presupuesto
          </option>

          {opcionesPresupuesto.map((opcion) => (
            <option
              key={opcion.value}
              value={opcion.value}
              className="bg-neutral-900"
            >
              {opcion.label}
            </option>
          ))}
        </select>
        <label className={labelStyle}>Presupuesto estimado</label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Enviando..." : "Enviar solicitud"}
      </button>

      {success && (
        <p className="text-green-400 text-sm mt-2">
          Mensaje enviado correctamente
        </p>
      )}

      {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
    </form>
  );
}