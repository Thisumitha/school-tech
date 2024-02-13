
import './App.css'
import About from './com/about'
import Carsoul from './com/carsoul'
import Nav from './com/nav'

function App() {
  

  return (
    <>
      <Nav/>
      <div className='container-fulid'>
      <Carsoul/>
      <About/>
      </div>
    </>
  )
}

export default App
