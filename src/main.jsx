import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//routes
import Root from './routes/Root.jsx'
import PageNotFound from './routes/PageNotFound.jsx'
import Edital from './routes/Edital.jsx'
import Home from './routes/Home.jsx'
import Avisos from './routes/Avisos.jsx'
import LinksImportantes from './routes/LinksImportantes.jsx'
import Contato from './routes/Contatos.jsx'
import Admin from './routes/Admin.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <PageNotFound/>,
    children:[
      {path: '/', element: <Home/>},
      {path: '/edital', element: <Edital/>},
      {path: '/avisos', element: <Avisos/>},
      {path: '/links', element: <LinksImportantes/>},
      {path: '/contatos', element: <Contato/>},
      {path: '/admin', element: <Admin/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
