import React from "react";
import turmas from "../pages/reports/turmasMock";

const TurmasTable = () => {
  return (
    <div className="mt-3">
      <table className="table table-bordered">

        <thead style={{ background: "#0d6efd", color: "black" }}>
          <tr>
            <th>CLASSE</th>
            <th>TURMA</th>
            <th>PERÍODO</th>
            <th>LOTAÇÃO DEFINIDA</th>
            <th>Nº ALUNOS INSCRITOS</th>
          </tr>
        </thead>

        <tbody>
          {turmas.map((t, i) => (
            <tr key={i}>
              <td>{t.classe}</td>
              <td>{t.turma}</td>
              <td>{t.periodo}</td>
              <td>{t.lotacao}</td>
              <td>{t.alunos}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default TurmasTable;