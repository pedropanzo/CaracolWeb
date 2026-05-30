import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'

const Filters = ({ inicio, fim, setInicio, setFim }) => {
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
      {/* FILTRO */}
      <div
  style={{
    backgroundColor: "#f1f3f5", // fundo externo (cinza claro)
    borderRadius: "40px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
  }}
>
  {/* CAIXA INTERNA (BRANCA) */}
  <div
    style={{
      backgroundColor: "#ffffff",
      borderRadius: "30px",
      padding: "10px 20px",
      gap: "15px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    }} className="row"
  >
    <span style={{ fontSize: "13px" }} className="col-lg-12">
      Selecione o intervalo 
    </span>
      <br/>

    <span style={{ fontSize: "13px", padding: "10px" }} >Início</span>
    <input
      type="date"
      value={inicio}
      onChange={(e) => setInicio(e.target.value)}
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "4px",
      }}
    />

    <span style={{ fontSize: "13px", padding: "10px" }}>Fim</span>
    <input
      type="date"
      value={fim}
      onChange={(e) => setFim(e.target.value)}
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "4px",
      }}
    />
  </div>
</div>

      {/* BOTÃO */}
      <button
        onClick={() => window.print()}
        style={{
          background: "linear-gradient(90deg, #4e73df, #6f42c1)",
          color: "#fff",
          border: "none",
          padding: "10px 25px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon icon={faPrint} /> IMPRIMIR
      </button>
    </div>
  );
};

export default Filters;