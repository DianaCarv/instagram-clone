import { Home,  } from './pages'
import { Sidebar } from './components/Sidebar/Sidebar'
import Layout from './components/Layout/Layout'
import "./App.css"


function App() {
  return (
    <div className='main-container'>
      <Sidebar />

      <Layout>
        <Home />
      </Layout>
    </div>
  )
}

export default App
