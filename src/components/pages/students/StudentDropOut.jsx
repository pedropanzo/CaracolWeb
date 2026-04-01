import { useState } from 'react'
import { student as data } from './mockStudent'
import StudentSearch from '../../Student/StudentSearch'
import StudentStats from '../../Student/StudentStats'
import StudentTable from '../../Student/StudentTable'

export default function StudentDropOut(){
    const [search, setSearch] = useState("")

    const desistentes = data.filter(s => s.estado === "Desactivo" || s.estado === "Desistente")
    
    return (
        <div className='container mt-4'>
            <h3 className='mb-3'>Dados dos alunos desistentes</h3>
            <StudentSearch search={search} setSearch={setSearch} />
            <StudentTable student={desistentes} />
        </div>
    )
}