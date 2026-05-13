export default function ClassHistoryHeader({
  total,
  year,
  setYear
}) {

  return (
    <div className="row" style={{width: "60%", margin: "0px auto", paddingTop: "50px", paddingBottom: "50px", borderRadius: "10px"}}>

      {/* TOTAL */}
      <div className="col-lg-3">
        <div className="bg-light rounded shadow-sm px-4 py-3" style={{backgroundColor: "white", padding: "10px"}}>
            <strong>Total de Turmas</strong>  <span className="text-primary" style={{color: "blue"}}>{total}</span>
        </div>
      </div>
      <div className="col-lg-9" >
        {/* FILTRO */}
        <div className="row" style={{textAlign:"center"}}>
            <div className="col-lg-7"></div>
            <div className="col-lg-3" style={{backgroundColor: "white", padding: "10px", borderRadius: "10px"}}>
                <label className="form-label">
                    Ano lectivo:
                </label>

                <select
                className="form-select"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                >
                <option>2025/2026</option>
                <option>2024/2025</option>
                <option>2023/2024</option>
                </select>
            </div>
            <div className="col-lg-2">
            {/* IMPRIMIR */}
                <button
                    className="btn btn-primary px-4 py-3" style={{padding:"20px"}}
                    onClick={() => window.print()}
                >
                    🖨️ IMPRIMIR
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}
