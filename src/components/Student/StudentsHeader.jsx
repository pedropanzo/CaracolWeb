export default function StudentsHeader(){

return(

<div className="d-flex justify-content-between align-items-center mb-3">

<input
type="text"
className="form-control w-50"
placeholder="Pesquisar..."
/>

<div className="d-flex gap-3">

<button className="btn btn-warning">
Editar
</button>

<button className="btn btn-secondary">
2ª via ficha inscrição
</button>

<div className="card p-2 text-center">
<span>Total de alunos</span>
<strong>781</strong>
</div>

</div>

</div>

)

}