
import car1 from "../src/Images/car1.jpeg";
import car2 from "../src/Images/car2.jpeg";
import car3 from "../src/Images/car3.jpeg";
function Carousel(){
return (
  
<>
<div className="row" data-aos="zoom-in">
  <div className="col-md-12 col-lg-12 col-12">
<div className="caro">
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators sliders">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src= {car1} class="d-block w-100 img-fluid ht" alt="..."/>
     
    </div>
    <div class="carousel-item ht">
      <img src={car2} class="d-block w-100 img-fluid ht" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={car3} class="d-block w-100 img-fluid ht" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div></div></div>
</>


)
}

export default Carousel;



{/* <>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src= g1" class="d-block w-100" alt="..."///>
    </div>
    <div class="carousel-item">
      <img src= g1" class="d-block w-100" alt="..."///>
    </div>
    <div class="carousel-item">
      <img src= g1" class="d-block w-100" alt="..."///>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</> */}