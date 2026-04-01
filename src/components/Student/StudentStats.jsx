export default function StudentStats({ student }){
    const total = student.length
    const activos = student.filter(s => s.estado === "Activo").length
    const desactivos = student.filter(s => s.estado !== "Activo").length

    return(
        <div className="row text-center mb-3">
            <div className="col-md-4">
                <div className="card p-2">
                    <h6>TOTAL DE ALUNOS</h6>
                    <strong className="text-primary">{total}</strong>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-2 ">
                    <h6>ACTIVOS</h6>
                    <strong className="text-success">{activos}</strong>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-2 ">
                    <h6>NÃO ACTIVOS</h6>
                    <strong className="text-danger">{desactivos}</strong>
                </div>
            </div>
        </div>
    )
}