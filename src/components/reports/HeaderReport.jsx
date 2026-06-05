import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faUser } from "@fortawesome/free-solid-svg-icons";

const HeaderReport = () => {
  return (
    <div style={{ marginBottom: "30px" }}>

      {/* TÍTULO */}
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <h4 style={{ fontWeight: "600", margin: 0 }}>
          Impressão do{" "}
          <span
            style={{
              borderBottom: "3px solid #0d6efd",
              paddingBottom: "4px",
            }}
          >
            histórico de turmas criadas
          </span>
        </h4>
      </div>

      {/* LINHA PRINCIPAL */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >

        {/* ESQUERDA → TOTAL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#f1f3f5",
            borderRadius: "30px",
            padding: "8px 15px",
            gap: "10px",
          }}
        >
          <div
            style={{
              background: "#0d6efd",
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            <FontAwesomeIcon icon={faUser} />
          </div>

          <div style={{ fontSize: "13px", lineHeight: "16px" }}>
            TOTAL DE TURMAS <br />
            <strong style={{ color: "#0d6efd" }}>31</strong>
          </div>
        </div>

        {/* CENTRO → FILTRO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#f1f3f5",
            borderRadius: "30px",
            padding: "10px 20px",
            gap: "10px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <span style={{ fontSize: "13px" }}>Ano lectivo:</span>

          <select
            style={{
              width: "130px",
              padding: "5px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "13px",
            }}
          >
            <option>2024/2025</option>
            <option>2023/2024</option>
          </select>
        </div>

        {/* DIREITA → BOTÃO */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "linear-gradient(90deg, #4e73df, #6f42c1)",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faPrint} />
          IMPRIMIR
        </button>

      </div>
    </div>
  );
};

export default HeaderReport;