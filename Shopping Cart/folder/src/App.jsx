
import './App.css'
import { AllRoutes } from './routes/AllRoutes'
import {Header} from './components/Header'
function App() {

  return (
    <div style={{backgroundColor: "whitesmoke"}}>
      <Header />
      <AllRoutes />
    </div>
  )
}

export default App
