import {Link, Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Agenda</h1>
      <hr/>
      <nav className='nav-bar'>
        <Link to='/contato/cadastrar'>Cadastro</Link> &nbsp;
        <Link to='/contato/consultar'>Consulta</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
