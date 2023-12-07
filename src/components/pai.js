import Filho from "./filho";

export default function Pai(){
    function respostaFilho(txt){
        alert(txt)
    }
    return(
        <div>
            <h2>Componente Pai</h2>
            <Filho 
                //props
                msg = 'Olá filhão'
                dados = {{nome:'Jonas', idade: 50}}     
                respostaProPai = {respostaFilho}
            />
        </div>
    )
}