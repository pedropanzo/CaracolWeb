export default function EmployeesTable({ data }) {

  return (
    <div className="table-responsive" style={{ maxHeight: "500px", overflowY: "auto" }}>
      
      <table className="table table-hover table-sm">

        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Nome Completo</th>
            <th>Sexo</th>
            <th>Estado Civil</th>
            <th>Residência</th>
            <th>Contacto</th>
            <th>Cargo</th>
            <th>Modificado em</th>
          </tr>
        </thead>

        <tbody>
          {data.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.nome}</td>
              <td>{emp.sexo}</td>
              <td>{emp.estadoCivil}</td>
              <td>{emp.residencia}</td>
              <td>{emp.contacto}</td>
              <td>{emp.cargo}</td>
              <td>{emp.data}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}

