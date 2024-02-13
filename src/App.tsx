
import './App.css'
import About from './com/about'
import Carsoul from './com/carsoul'
import Nav from './com/nav'
import Teachers from './com/teachers'

function App() {
  

  return (
    <>
    
      <Nav/>
      <div className='border-margin'>
      <Carsoul/>
      <About/>
      <Teachers/>
      </div>
      
    </>
  )
}

export default App
