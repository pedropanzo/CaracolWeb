export default function ClassHistoryTable({ data }) {

  return (
    <div
      className="table-responsive"
      style={{
        maxHeight: "500px",
        overflowY: "auto"
      }}
    >

      <table className="table table-hover table-bordered align-middle">

        <thead className="table-primary">
          <tr>
            <th>Classe</th>
            <th>Turma</th>
            <th>Período</th>
            <th>Lotação Definida</th>
            <th>Nº Alunos Inscritos</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.classe}</td>
              <td>{item.turma}</td>
              <td>{item.periodo}</td>
              <td>{item.lotacao}</td>
              <td>{item.inscritos}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}
