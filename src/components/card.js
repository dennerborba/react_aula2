export default function Card(props) {
    function excluir(){
        fetch(`http://localhost:8250/contatos/${props.contato.id}`, 
        {
            method: 'DELETE',
        })
        .then(x => alert('O contato foi excluído com sucesso.'))
    }
    return (
        <div className="card mt-3 col-sm-4 col-md-4">
            <img src="https://i.pinimg.com/1200x/23/61/5c/23615ce774a4264fc334b1a5cd422de4.jpg"></img>
            <div className="card-body bg-dark text-white">
                <div>
                    <span className="fw-bold me-1">Nome:</span>
                    <span className="text-danger">{props.contato.nome}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">E-mail:</span>
                    <span className="text-danger">{props.contato.email}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Telefone:</span>
                    <span className="text-danger">{props.contato.telefone}</span>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                    <button className="btn btn-outline-primary">Editar</button>
                    <button onClick={excluir} className="btn btn-outline-danger">Excluir</button>
                </div>


            </div>
        </div>
    )
}