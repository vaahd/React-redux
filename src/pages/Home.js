import Carousel from "../components/Carousel";
import { category1 } from "../assets/images";
import { category2 } from "../assets/images";
import { category3 } from "../assets/images";
import { category4 } from "../assets/images";
function Home() {
  return (
    <div className="container mt-4 text-center">
      <section className=" container-2 offer bg-dark text-white text-center py-3" style={{borderRadius:"5px"}}>
  <h5> Big Shope Sale – Up to 50% OFF on all products! </h5>
</section>
      <Carousel/>
       <section className="py-5 bg-dark mt-4 category" style={{borderRadius:"5px"}}>
        <div className="container">
          <h2 className="text-center mb-4 text-white">Shop by Categories</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="card text-center p-3">
                <img src={category1} className="card-img" alt="Men" />
                <div className="card-body">
                  <h5 className="card-title text-white">Mens-Shirt</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center p-3">
                <img src={category2} className="card-img" alt="Women" />
                <div className="card-body">
                  <h5 className="card-title text-white">Womens-Clothing</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center p-3">
                <img src={category3} className="card-img" alt="Electronics" />
                <div className="card-body">
                  <h5 className="card-title text-white">Electronics</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center p-3">
                <img src={category4} className="card-img" alt="Grocery" />
                <div className="card-body">
                  <h5 className="card-title text-white">Grocery</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
  
}

export default Home;
