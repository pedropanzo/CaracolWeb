import StudentsFilter from "../../Student/StudentsFilter"
import StudentsHeader from "../../Student/StudentsHeader"
import StudentsTable from "../../Student/StudentsTable"

export default function StudentsAcademico(){

return(

<div className="container-fluid mt-4">

<h4 className="mb-3">Dados Académico</h4>

<StudentsHeader/>

<div className="row mt-3">

<div className="col-md-3">
<StudentsFilter/>
</div>

<div className="col-md-9">
<StudentsTable/>
</div>

</div>

</div>

)

}