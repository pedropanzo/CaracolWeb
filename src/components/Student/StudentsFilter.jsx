export default function StudentsFilter(){

return(

<div className="card p-3">

<h6>Escolha o ano que desejas.</h6>

<label className="mt-3">Ano lectivo</label>

<select className="form-select mb-3">
<option>2021/2022</option>
<option>2022/2023</option>
</select>

<button className="btn btn-primary w-100">
Buscar
</button>

</div>

)

}