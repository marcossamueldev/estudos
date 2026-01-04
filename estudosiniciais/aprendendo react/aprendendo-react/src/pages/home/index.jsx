import './style.css'
import Trash from '../../assets/excluir.png'

function Home() {

  const users = [
    {
      id: 848950701,
      nome: 'Marcos Silva',
      idade: 25,
      email: 'mar@gmail.com',
    },
    {
      id: 848950702,
      nome: 'layane',
      idade: 22,
      email: 'layane@gmail.com',
    }
  ]
  
  return (
      <div className='container'>
        <form>
          <h1>Cadastro de Usuários</h1>
          <input name='Nome' type="text" placeholder='Nome' />
          <input name='Email' type="email" placeholder='Email' />
          <input name='Idade' type="number" placeholder='Idade' />
          <button type="button">Cadastrar</button>
        </form>
        {users.map((user) => (
          <div key={user.id}>
            <div>
          <p>Nome: {user.nome}</p>
          <p>Idade: {user.idade}</p>
          <p>Email: {user.email}</p>
        </div>
        <button>
          <img src={Trash}/>
        </button>
      </div>
        ))}
        </div>
  )
}

export default Home
