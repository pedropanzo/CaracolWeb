import React from "react";
import EmptyState from "./EmptyState";

const Table = ({ data }) => {
  if (!data.length) return <EmptyState />;

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", fontSize: "13px" }}>
        <thead style={{ backgroundColor: "#f8f9fa" }}>
          <tr>
            <th>Classe</th>
            <th>Serviço</th>
            <th>Custo</th>
            <th>Data</th>
            <th>Computador</th>
            <th>Usuário</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.classe}</td>
              <td>{item.servico}</td>
              <td>{item.custo}</td>
              <td>{item.data}</td>
              <td>{item.computador}</td>
              <td>{item.usuario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;