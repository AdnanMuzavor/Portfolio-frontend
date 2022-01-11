import car1 from "../src/Images/car1.jpeg";
import car2 from "../src/Images/car2.jpeg";
import car3 from "../src/Images/car3.jpeg";
function Carousel() {
  return (
    <>
      <div classNameName="row" data-aos="zoom-in">
        <div classNameName="col-md-12 col-lg-12 col-12">
          <div classNameName="caro">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div classNameName="carousel-indicators sliders">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  classNameName="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={car1}
                    className="d-block w-100 img-fluid ht"
                    alt="..."
                  />
                </div>
                <div className="carousel-item ht">
                  <img
                    src={car2}
                    className="d-block w-100 img-fluid ht"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={car3}
                    className="d-block w-100 img-fluid ht"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;

{
  /* <>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src= g1" className="d-block w-100" alt="..."///>
    </div>
    <div className="carousel-item">
      <img src= g1" className="d-block w-100" alt="..."///>
    </div>
    <div className="carousel-item">
      <img src= g1" className="d-block w-100" alt="..."///>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</> */
}
