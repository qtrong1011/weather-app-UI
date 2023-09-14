import Weather from './components/Weather'
import NavBar from './components/NavBar'
import About from './components/About'
import {HashRouter as Router, Routes ,Route} from "react-router-dom"
import References from './components/References'

const App = () => {
  return (
    <div className='m-auto flex flex-col items-center'>
      
      <Router>
        <NavBar />
        
        <Routes>
            
          <Route path='/' exact element={<Weather/>}>
          </Route>
          <Route path='/about' element={<About/>}>
          </Route>
          <Route path='/references' element={<References/>}>
          </Route>
        </Routes>
         
      </Router>
      
      
      
    </div>
  )
}

export default App