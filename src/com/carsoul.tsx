import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import pcc from '../assets/pcc4.jpg';
import pcc1 from '../assets/pcc3.jpeg';
import pcc2 from '../assets/pcc2.jpeg';
import './carsoul.css'
function Carsoul() {
  
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide h-50">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
  <div className="carousel-item active">
  <img src={pcc} className="d-block w-100 half-height" alt="..."/>
</div>
<div className="carousel-item">
  <img src={pcc1} className="d-block w-100 half-height" alt="..."/>
</div>
<div className="carousel-item">
  <img src={pcc2} className="d-block w-100 half-height" alt="..."/>
</div>


  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default Carsoul
