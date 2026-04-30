export default function EmployeesHeader({ total, filter, setFilter }) {
  return (
    <div className="row" style={{width: "60%", margin: "0px auto", paddingTop: "50px", paddingBottom: "50px", borderRadius: "10px"}}>

      {/* TOTAL */}
      <div className="col-lg-3">
        <div className="bg-light px-3 py-2 rounded shadow-sm" style={{backgroundColor: "white", padding: "10px"}}>
             <strong>Total Funcionários:</strong> <span className="text-primary" style={{color: "blue"}}> {total}</span>
        </div>
      </div>
      {/* BOTÃO IMPRIMIR */}
      <div className="col-lg-9">
        <div className="row" style={{backgroundColor: "white", padding: "10px", borderRadius: "10px"}}>
            <div className="col-lg-2">
      <button
        className="btn btn-primary px-4"
        onClick={() => window.print()}
      >
         IMPRIMIR
      </button>
      </div>
      <div className="col-lg-7">

      {/* FILTRO */}
      <div className="row text-center bg-light px-3 py-2 rounded shadow-sm">
        <div className="col-full">
        <strong>Modo de Visualização</strong>   
        </div>
        <div className="col-lg-4 form-check">
          <input
            type="radio"
            checked={filter === "ativos"}
            onChange={() => setFilter("ativos")}
            className="form-check-input"
          />
          <label>Activos</label>
        </div>

        <div className="col-lg-4 form-check">
          <input
            type="radio"
            checked={filter === "desativados"}
            onChange={() => setFilter("desativados")}
            className="form-check-input"
          />
          <label>Desactivados</label>
        </div>

        <div className="col-lg-4 form-check">
          <input
            type="radio"
            checked={filter === "todos"}
            onChange={() => setFilter("todos")}
            className="form-check-input"
          />
          <label>Todos</label>
        </div>
        </div>
      </div>
      </div>
      </div>

    </div>
  )
}
