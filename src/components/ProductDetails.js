import { useParams,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const products = useSelector((state) => state.products.items || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <div className="alert alert-warning">Product not found</div>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid" style={{ maxHeight: "400px", objectFit: "contain" }}/>
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <h4 className="text-white">₹{product.price}</h4>
          <p>{product.description}</p>
          <button className="btn btn-dark add-2" onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
           <button className="btn btn-dark add-2 mx-2" onClick={() => navigate("/products")}>
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
