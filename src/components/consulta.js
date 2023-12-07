import { useEffect, useState } from 'react';
import Card from './card';
export default function Consulta(){
    const [contatos, setContatos] = useState([])
    function consultar(){
        fetch('http://localhost:8250/contatos')
        .then(data => data.json())
        .then(response => setContatos(response))
      }

      useEffect(consultar, [])
    return (
        <div>
            <h2 className='text-center'>Consulta de Contatos</h2>
            <div className='w-75 h-75 d-flex flex-wrap'>
            {
                contatos.map(ct => <Card contato ={ct}/>)
            }
            </div>
        </div>
    )
}