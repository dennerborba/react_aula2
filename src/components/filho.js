export default function Filho(props){
    function responderPai(){
        props.respostaProPai('To te respondendo ')
    }
    return(
        <div>
            <h2>Componente Filho</h2>
            <span>Aviso: {props.msg}</span> <br />
            <span>Nome: {props.dados.nome}</span> <br />
            <span>Idade: {props.dados.idade}</span>
            <br/>
            <button onClick={() => props.respostaProPai('olá')}>Responder ao pai</button>

            <button onClick={responderPai}>Responde de novo</button>

        </div>
    )
}