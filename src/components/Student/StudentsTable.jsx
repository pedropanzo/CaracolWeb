import { useState } from "react"

export default function StudentsTable(){

const [selected,setSelected] = useState(null)

const students = [
{
id:24,
name:"Abdulai Bah",
curso:"Sem Opção",
classe:"1ª Classe",
turma:"A",
sala:3,
periodo:"Manhã",
inscrito:"Lina Nsalambi",
data:"02/09/2021"
},
{
id:752,
name:"Abel José",
curso:"Gestão de Redes",
classe:"10ª Classe",
turma:"B",
sala:0,
periodo:"Manhã",
inscrito:"Pedro Daniel",
data:"25/09/2021"
}
]

return(

<table className="table table-bordered">

<thead className="table-light">

<tr>
<th>ID</th>
<th>Nome</th>
<th>Curso</th>
<th>Classe</th>
<th>Turma</th>
<th>Sala</th>
<th>Período</th>
<th>Inscrito por</th>
<th>Data</th>
</tr>

</thead>

<tbody>

{students.map((s)=>(
<tr
key={s.id}
onClick={()=>setSelected(s.id)}
className={selected === s.id ? "table-primary" : ""}
>

<td>{s.id}</td>
<td>{s.name}</td>
<td>{s.curso}</td>
<td>{s.classe}</td>
<td>{s.turma}</td>
<td>{s.sala}</td>
<td>{s.periodo}</td>
<td>{s.inscrito}</td>
<td>{s.data}</td>

</tr>
))}

</tbody>

</table>

)

}