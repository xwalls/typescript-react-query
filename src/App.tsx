import { useEffect, useRef, useState } from 'react'
import './App.css'
import { User } from './types.d'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const originalUsers = useRef<User[]>([])
  // useRef -> para guardar un valor
  // que queremos que se comparta entre renderizados
  // pero que al cambiar, no vuelva a renderizar el componente

  useEffect(() => {
    fetch('https://randomuser.me/api?results=5')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
        originalUsers.current = res.results
      })
  }, [])

  return (
    <div className='App'>
      <h1>Prueba técnica</h1>
      <header>
        <div className="card">
          <button onClick={() => console.log('BOTON 1')}>
            Ordenar
          </button>
          <button onClick={() => console.log('BOTON 2')}>
            Reiniciar
          </button>
        </div>
      </header>
      <main>
        <p>Lista de Usuarios</p>
      </main>
    </div>
  )
}

export default App
