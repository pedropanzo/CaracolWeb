import { useState } from "react";

export default function ClassModal({addClass,close}){

const [turma,setTurma] = useState("")
const [periodo,setPeriodo] = useState("")
const [lotacao,setLotacao] = useState("")
const [sala,setSala] = useState("")

function handleSubmit(e){

e.preventDefault()

addClass({

id:Date.now(),
turma,
periodo,
lotacao,
sala

})

}

return(

<div className="modal d-block">

<div className="modal-dialog">

<div className="modal-content">

<div className="modal-header">

<h5>Nova Turma</h5>

<button
className="btn-close"
onClick={close}
></button>

</div>

<form onSubmit={handleSubmit}>

<div className="modal-body">

<label>Turma</label>
<input
className="form-control mb-2"
value={turma}
onChange={(e)=>setTurma(e.target.value)}
required
/>

<label>Período</label>
<input
className="form-control mb-2"
value={periodo}
onChange={(e)=>setPeriodo(e.target.value)}
required
/>

<label>Lotação</label>
<input
className="form-control mb-2"
value={lotacao}
onChange={(e)=>setLotacao(e.target.value)}
required
/>

<label>Sala</label>
<input
className="form-control"
value={sala}
onChange={(e)=>setSala(e.target.value)}
required
/>

</div>

<div className="modal-footer">

<button
type="button"
className="btn btn-secondary"
onClick={close}
>
Cancelar
</button>

<button
type="submit"
className="btn btn-primary"
>
Salvar
</button>

</div>

</form>

</div>

</div>

</div>

)

}