import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Importando as dependências para criar as rotas
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Aluno from './routes/Aluno.jsx'

/*Criando a função createBrowserRouter*/
const router = createBrowserRouter([
  {
//Criando as rotas Pai
path:'/',element:<App/>,
errorElement:<Error/>,

//Criando as rotas Filhas
children:[
  {path:'/',element:<Home/>},
  {path:'/Aluno',element:<Aluno/>}
]


  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*Criando o desestruct para ser renderizado*/}
    <RouterProvider router={router}/>
  </StrictMode>,
)
