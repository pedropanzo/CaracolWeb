import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const ReportFilters = () => {
  
  const [mode, setMode] = useState("ativos");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {/* TOTAL */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: "#0d6efd",
            color: "white",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
          }}
        >
           <FontAwesomeIcon icon={faUser} />
        </div>

        <div style={{ fontSize: "13px" }}>
          TOTAL PROFESSORES{" "}
          <strong style={{ color: "#0d6efd" }}>33</strong>
        </div>
      </div>

      {/* FILTRO + BOTÃO */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          backgroundColor: "#f1f3f5",
          padding: "10px 20px",
          borderRadius: "30px",
        }}
      >
        {/* TEXTO */}
        <span style={{ fontSize: "13px" }}>
          Modo de Visualização
        </span>

        {/* RADIOS */}
        <label style={{ fontSize: "13px" }}>
          <input
            type="radio"
            name="mode"
            checked={mode === "ativos"}
            onChange={() => setMode("ativos")}
            style={{ marginRight: "5px" }}
          />
          Activos
        </label>

        <label style={{ fontSize: "13px" }}>
          <input
            type="radio"
            name="mode"
            checked={mode === "desativados"}
            onChange={() => setMode("desativados")}
            style={{ marginRight: "5px" }}
          />
          Desactivados
        </label>

        <label style={{ fontSize: "13px" }}>
          <input
            type="radio"
            name="mode"
            checked={mode === "todos"}
            onChange={() => setMode("todos")}
            style={{ marginRight: "5px" }}
          />
          Todos
        </label>

        {/* BOTÃO */}
        <button
          style={{
            background: "linear-gradient(90deg, #4e73df, #6f42c1)",
            color: "#fff",
            border: "none",
            padding: "8px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FontAwesomeIcon icon={faPrint} /> Imprimir
        </button>
      </div>
    </div>
  );
};


export default ReportFilters;
