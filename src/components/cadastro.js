import { useState } from 'react';
import Card from './card';
export default function Cadastro(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    function salvar(){
        let obj = {nome: nome, email: email, telefone:telefone}
        fetch('http://localhost:8250/contatos' , 
        {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(obj)
        })
        .then(x => alert('Contato criado com sucesso.'))
    }

    return (
        <div className="container">
            <h2 className="text-center mt-3">Novo Contato</h2>
            <label className="form-label">Informe nome</label>
            <input className="form-control" type="text" placeholder="Nome" value={nome} onChange={txt => setNome(txt.target.value)}></input>

            <label className="form-label">Informe E-mail</label>
            <input className="form-control" type="text" placeholder="E-mail" value={email} onChange={txt => setEmail(txt.target.value)}></input>

            <label className="form-label">Informe Telefone</label>
            <input className="form-control" type="text" placeholder="Telefone" value={telefone} onChange={txt => setTelefone(txt.target.value)}></input>

            <div className="mt-3 d-flex justify-content-around">
                <button onClick={salvar} className="btn btn-success">Salvar</button>
                <button className="btn btn-danger">Cancelar</button>
            </div>

        </div>
    )
}